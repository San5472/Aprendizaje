const ws = new WebSocket("ws://localhost:3000");

const messageDid = document.getElementById("mensajes");
const input = document.getElementById("input");

ws.onmessage = (event) => {
    const p = document.createElement("p");
    if (event.data.startsWith("Servidor:")) {
        p.style.color = "red";   
        p.style.fontWeight = "bold";
    }
    p.textContent = event.data;
    messageDid.appendChild(p);
    messageDid.scrollTop = messageDid.scrollHeight;
};

function sendMessage() {
    const msg = input.value;
    if (msg.trim () !== "") {
        ws.send(msg); 
        input.value= "";
    }
}