const serverUrl = (location.protocol === 'https:' ? 'wss:' : 'ws:') + '//' + location.host;
const ws = new WebSocket(serverUrl);


const peers = {}; 
let localStream = null;
let localId = null;
let roomId = null;

/* Botones de html */
const joinBtn = document.getElementById('joinBtn');
const leaveBtn = document.getElementById('leaveBtn');
const roomInput = document.getElementById('roomInput');
const localVideo = document.getElementById('localVideo');
const videos = document.getElementById('videos');

/* camara y video */
const videoToggle = document.getElementById('videoToggle');
const audioToggle = document.getElementById('audioToggle');

/* mensajes */
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendChatBtn = document.getElementById('sendChatBtn'); 

const rtcConfig = {
    iceServers: [
        {urls: 'stun:stun.l.google.com:19302'}
    ]
};

async function startLocalStream()  {
    if (localStream) return;

    try {
        localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true}); 
        localVideo.srcObject = localStream;
    } catch (err) {
        console.error("No se logro acceder a la camara/micro", err); 
        alert('permite la camara y el microfono para realizar la prueba.');
    }
}

function stopLocalStream() {
    if (!localStream) return;
    localStream.getTracks().forEach(t => t.stop());
    localStream = null;
    localVideo.srcObject = null;
}

ws.addEventListener('open', () => {
  console.log("ws conectado a llamdas pruebas");
});

ws.addEventListener('message', async (ev) => {
  try {
    const msg = JSON.parse(ev.data);
    const { type, payload } = msg;

    switch (type) {
      case 'peers':
        localId = payload.you;
        const others = payload.others;
        for (const otherId of others) {
          await createPeerConnection(otherId, true);
        }
        break;

      case 'new-peer':
        const newId = payload.id;
        await createPeerConnection(newId, false);
        break;

      case 'offer':
        const { from: offerFrom, sdp: offerSdp } = payload;
        await handleOffer(offerFrom, offerSdp);
        break;

      case 'answer':
        const { from: answerFrom, sdp: answerSdp } = payload;
        await handleAnswer(answerFrom, answerSdp);
        break;

      case 'ice-candidate':
        const { from: iceFrom, candidate } = payload;
        await handleRemoteIce(iceFrom, candidate);
        break;

      case 'peer-left':
        const { id } = payload;
        removePeer(id);
        break;

      case 'chat':
        if (payload && payload.text) {
          appendChatMessage('Sala', payload.text);
        }
        break;

      default:
        console.warn('Tipo de mensaje desconocido:', type, payload);
    }
  } catch (e) {
    console.error(' Error procesando mensaje WS:', e);
  }
});

async function createPeerConnection(peerId, isInitiator) {
  if (peers[peerId]) return; // ya existe
  const pc = new RTCPeerConnection(rtcConfig);

  // crear elemento de video remoto
  const videoEl = document.createElement('video');
  videoEl.classList.add('remoteVideo');
  videoEl.autoplay = true;
  videoEl.playsInline = true;
  videoEl.id = 'video_' + peerId;

  // contenedor
  const wrap = document.createElement('div');
  wrap.appendChild(videoEl);
  videos.appendChild(wrap);

  peers[peerId] = { pc, elVideo: videoEl, dataChannel: null };

  // si tenemos stream local, añadimos sus tracks
  if (localStream) {
    localStream.getTracks().forEach(track => pc.addTrack(track, localStream));
  }

  // manejador de tracks remotos
  pc.addEventListener('track', (evt) => {
    // multiple tracks pueden llegar, pero nos quedamos con el primero para el elemento
    if (videoEl.srcObject !== evt.streams[0]) {
      videoEl.srcObject = evt.streams[0];
    }
  });

  // candidatos ICE => enviar al peer
  pc.addEventListener('icecandidate', (e) => {
    if (e.candidate) {
      ws.send(JSON.stringify({ type: 'ice-candidate', payload: { target: peerId, candidate: e.candidate } }));
    }
  });

  // data channel (chat) - si soy iniciador creo el canal
  if (isInitiator) {
    const dc = pc.createDataChannel('chat');
    setupDataChannel(peerId, dc);
    peers[peerId].dataChannel = dc;
  } else {
    // si no iniciador, escuchar datachannel
    pc.addEventListener('datachannel', (e) => {
      setupDataChannel(peerId, e.channel);
      peers[peerId].dataChannel = e.channel;
    });
  }

  // si soy iniciador, crear offer
  if (isInitiator) {
    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);
    ws.send(JSON.stringify({ type: 'offer', payload: { target: peerId, sdp: pc.localDescription } }));
  }

  return pc;
}

/* ---------------- data channel (chat) ---------------- */
function setupDataChannel(peerId, dc) {
  dc.onopen = () => {
    console.log('DataChannel abierto con', peerId);
    appendSystemMessage(`Canal de datos abierto con ${peerId}`);
  };
  dc.onmessage = (e) => {
    appendChatMessage(`Peer ${peerId}`, e.data);
  };
}

/* ---------------- manejar offer/answer ---------------- */
async function handleOffer(from, sdp) {
  const pc = peers[from] ? peers[from].pc : await createPeerConnection(from, false);
  await pc.setRemoteDescription(new RTCSessionDescription(sdp));
  const answer = await pc.createAnswer();
  await pc.setLocalDescription(answer);
  ws.send(JSON.stringify({ type: 'answer', payload: { target: from, sdp: pc.localDescription } }));
}

async function handleAnswer(from, sdp) {
  const entry = peers[from];
  if (!entry) return console.warn('No se encontró peer al recibir answer', from);
  const pc = entry.pc;
  await pc.setRemoteDescription(new RTCSessionDescription(sdp));
}

async function handleRemoteIce(from, candidate) {
  const entry = peers[from];
  if (!entry) return;
  try {
    await entry.pc.addIceCandidate(new RTCIceCandidate(candidate));
  } catch (e) {
    console.error('Error añadiendo candidate', e);
  }
}

/* ---------------- util: remover peer ---------------- */
function removePeer(peerId) {
  const entry = peers[peerId];
  if (!entry) return;
  // cerrar pc
  try { entry.pc.close(); } catch (e) {}
  // remover video
  const el = document.getElementById('video_' + peerId);
  if (el && el.parentElement) el.parentElement.remove();
  delete peers[peerId];
  appendSystemMessage(`Peer ${peerId} se desconectó`);
}

/* ---------------- UI acciones: join/leave ---------------- */
joinBtn.addEventListener('click', async () => {
  roomId = roomInput.value.trim();
  if (!roomId) return alert('Ingresa un nombre de sala.');
  await startLocalStream();
  // enviar join
  ws.send(JSON.stringify({ type: 'join', roomId }));
  joinBtn.disabled = true;
  leaveBtn.disabled = false;
});

leaveBtn.addEventListener('click', () => {
  // notificar a los peers
  ws.send(JSON.stringify({ type: 'leave', payload: {} }));
  // cerrar todo
  for (const id of Object.keys(peers)) removePeer(id);
  stopLocalStream();
  joinBtn.disabled = false;
  leaveBtn.disabled = true;
});

/* ---------------- toggles cámara / micrófono ---------------- */
videoToggle.addEventListener('change', () => {
  if (!localStream) return;
  const videoTrack = localStream.getVideoTracks()[0];
  if (videoTrack) videoTrack.enabled = videoToggle.checked;
});

audioToggle.addEventListener('change', () => {
  if (!localStream) return;
  const audioTrack = localStream.getAudioTracks()[0];
  if (audioTrack) audioTrack.enabled = audioToggle.checked;
});

/* ---------------- Chat: usar DataChannel si existe, fallback a WS broadcast ---------------- */
sendChatBtn.addEventListener('click', sendChatFromInput);
chatInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') sendChatFromInput(); });

function sendChatFromInput() {
  const text = chatInput.value.trim();
  if (!text) return;
  appendChatMessage('Tú', text);
  // enviar vía datachannel a cada peer si está abierto, sino via signaling ws (broadcast)
  let sent = false;
  for (const id in peers) {
    const dc = peers[id].dataChannel;
    if (dc && dc.readyState === 'open') {
      dc.send(text);
      sent = true;
    }
  }
  if (!sent) {
    // enviar por ws para que el servidor lo retransmita (implementa msjs tipo 'chat' si quieres)
    ws.send(JSON.stringify({ type: 'chat', payload: { text } }));
  }
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

/* escape simple para evitar XSS */
function escapeHtml(str) {
  return str.replace(/[&<>"']/g, (m) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}


ws.addEventListener('message', (ev) => {
  try {
    const msg = JSON.parse(ev.data);
    if (msg.type === 'chat' && msg.payload && msg.payload.text) {
      appendChatMessage('Sala', msg.payload.text);
    }
  } catch (e) {}
});