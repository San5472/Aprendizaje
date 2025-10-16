const serverUrl = (location.protocol === 'https:' ? 'wss:' : 'ws:') + '//' + location.host;
const ws = new WebSocket(serverUrl);

const peers = {};
let localStream = null;
let localId = null;
let roomId = null;

const joinBtn = document.getElementById('joinBtn');
const leaveBtn = document.getElementById('leaveBtn');
const roomInput = document.getElementById('roomInput');
const localVideo = document.getElementById('localVideo');
const videos = document.getElementById('videos');

const videoToggle = document.getElementById('videoToggle');
const audioToggle = document.getElementById('audioToggle');

const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendChatBtn = document.getElementById('sendChatBtn');

const rtcConfig = { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] };

async function startLocalStream() {
  if (localStream) return;
  try {
    localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    localVideo.srcObject = localStream;
  } catch (err) {
    console.error("Error accediendo a la cámara o micro:", err);
    alert("Permite el acceso a la cámara y micrófono para continuar.");
  }
}

function stopLocalStream() {
  if (!localStream) return;
  localStream.getTracks().forEach(t => t.stop());
  localStream = null;
  localVideo.srcObject = null;
}

ws.addEventListener('open', () => {
  console.log(" WebSocket conectado al servidor de llamadas");
});

ws.addEventListener('message', async (ev) => {
  try {
    const msg = JSON.parse(ev.data);
    const { type, payload } = msg;

    switch (type) {
      case 'peers':
        localId = payload.you;
        for (const otherId of payload.others) {
          await createPeerConnection(otherId, true);
        }
        break;

      case 'new-peer':
        await createPeerConnection(payload.id, false);
        break;

      case 'offer':
        await handleOffer(payload.from, payload.sdp);
        break;

      case 'answer':
        await handleAnswer(payload.from, payload.sdp);
        break;

      case 'ice-candidate':
        await handleRemoteIce(payload.from, payload.candidate);
        break;

      case 'peer-left':
        removePeer(payload.id);
        break;

      case 'chat':
        appendChatMessage('Sala', payload.text);
        break;

      default:
        console.warn('Tipo de mensaje desconocido:', type);
    }
  } catch (e) {
    console.error(' Error procesando mensaje WS:', e);
  }
});

async function createPeerConnection(peerId, isInitiator) {
  if (peers[peerId]) return;

  const pc = new RTCPeerConnection(rtcConfig);

  // Crear video remoto
  const videoEl = document.createElement('video');
  videoEl.classList.add('remoteVideo');
  videoEl.autoplay = true;
  videoEl.playsInline = true;
  videoEl.id = 'video_' + peerId;
  videos.appendChild(videoEl);

  peers[peerId] = { pc, videoEl, dataChannel: null };

  if (localStream) {
    localStream.getTracks().forEach(track => pc.addTrack(track, localStream));
  }

  pc.ontrack = (e) => {
    if (videoEl.srcObject !== e.streams[0]) {
      videoEl.srcObject = e.streams[0];
    }
  };

  pc.onicecandidate = (e) => {
    if (e.candidate) {
      ws.send(JSON.stringify({ type: 'ice-candidate', payload: { target: peerId, candidate: e.candidate } }));
    }
  };

  // Crear/escuchar DataChannel
  if (isInitiator) {
    const dc = pc.createDataChannel('chat');
    setupDataChannel(peerId, dc);
    peers[peerId].dataChannel = dc;
  } else {
    pc.ondatachannel = (e) => {
      setupDataChannel(peerId, e.channel);
      peers[peerId].dataChannel = e.channel;
    };
  }

  if (isInitiator) {
    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);
    ws.send(JSON.stringify({
      type: 'offer',
      payload: { target: peerId, sdp: pc.localDescription.toJSON() }
    }));
  }

  return pc;
}

function setupDataChannel(peerId, dc) {
  dc.onopen = () => appendSystemMessage(`Canal abierto con ${peerId}`);
  dc.onmessage = (e) => appendChatMessage(`Peer ${peerId}`, e.data);
}

async function handleOffer(from, sdp) {
  const pc = peers[from]?.pc || await createPeerConnection(from, false);
  await pc.setRemoteDescription(new RTCSessionDescription(sdp));
  const answer = await pc.createAnswer();
  await pc.setLocalDescription(answer);
  ws.send(JSON.stringify({
    type: 'answer',
    payload: { target: from, sdp: pc.localDescription.toJSON() }
  }));
}

async function handleAnswer(from, sdp) {
  const entry = peers[from];
  if (!entry) return;
  await entry.pc.setRemoteDescription(new RTCSessionDescription(sdp));
}

async function handleRemoteIce(from, candidate) {
  const entry = peers[from];
  if (!entry) return;
  await entry.pc.addIceCandidate(new RTCIceCandidate(candidate));
}

function removePeer(peerId) {
  const entry = peers[peerId];
  if (!entry) return;
  entry.pc.close();
  const el = document.getElementById('video_' + peerId);
  if (el) el.remove();
  delete peers[peerId];
  appendSystemMessage(` ${peerId} salió de la sala`);
}

joinBtn.addEventListener('click', async () => {
  roomId = roomInput.value.trim();
  if (!roomId) return alert('Escribe el nombre de la sala.');
  await startLocalStream();
  ws.send(JSON.stringify({ type: 'join', roomId }));
  joinBtn.disabled = true;
  leaveBtn.disabled = false;
});

leaveBtn.addEventListener('click', () => {
  ws.send(JSON.stringify({ type: 'leave' }));
  for (const id in peers) removePeer(id);
  stopLocalStream();
  joinBtn.disabled = false;
  leaveBtn.disabled = true;
});

videoToggle.addEventListener('change', () => {
  if (!localStream) return;
  localStream.getVideoTracks()[0].enabled = videoToggle.checked;
});
audioToggle.addEventListener('change', () => {
  if (!localStream) return;
  localStream.getAudioTracks()[0].enabled = audioToggle.checked;
});

sendChatBtn.addEventListener('click', sendChatFromInput);
chatInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') sendChatFromInput(); });

function sendChatFromInput() {
  const text = chatInput.value.trim();
  if (!text) return;
  appendChatMessage('Tú', text);

  let sent = false;
  for (const id in peers) {
    const dc = peers[id].dataChannel;
    if (dc && dc.readyState === 'open') {
      dc.send(text);
      sent = true;
    }
  }
  if (!sent) ws.send(JSON.stringify({ type: 'chat', payload: { text } }));
  chatInput.value = '';
}

function appendChatMessage(sender, text) {
  const el = document.createElement('div');
  el.innerHTML = `<strong>${sender}:</strong> ${escapeHtml(text)}`;
  chatMessages.appendChild(el);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function appendSystemMessage(text) {
  const el = document.createElement('div');
  el.innerHTML = `<em>${escapeHtml(text)}</em>`;
  chatMessages.appendChild(el);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, (m) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}
