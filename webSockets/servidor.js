const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const readLine = require("readline");

const app = express();
const server = http.createServer(app)

app.use(express.static("public"));

const wss = new WebSocket.Server({server});

let clientes = []

wss.on("connection", (ws) => {
  console.log("Nueva persona conectada");

  ws.on("message", (message) => {
    console.log("Mensaje recibido:", message.toString());


    wss.clients.forEach((cliente) => {
      if (cliente !== ws && cliente.readyState === WebSocket.OPEN) {
        cliente.send(message.toString()); 
      }
    });
  });

  
  ws.on("close", () => {
    console.log("Persona desconectada");
  });
});

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", (input) => {
    wss.clients.forEach((cliente) => {
        if (cliente.readyState === WebSocket.OPEN) {
            cliente.send(`Servidor dice: ${input}`);
        }

    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server ejecutado en http://localhost:${PORT}`);
})

