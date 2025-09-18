const websocket = require("ws");

const wss = new websocket.Server({port: 3000}); // puerto en el cual se ejecutara el websocket

console.log("Servidor websocket trabajando en ws://localhost:3000"); // Aviso de que esta ejecutandose el servidor

wss.on("connection", (ws)=> { // cuando alguien se conecta me sale el mensaje
    console.log("Nueva persona conectada") // Persona conectada.

    ws.on("message", (message) => {
        console.log("Mensaje del cliente:", message.toString()); // Escucha los mensajes de las personas

        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) { // Envia los mensajes de las personas y no se repiten en el chat
                client.send(message.toString()); // aqui se envia el mensaje a todos 
            }
        });
    }); 
    wss.on("close", ()=> {
        console.log("Cliente desconectado");
    });
});
