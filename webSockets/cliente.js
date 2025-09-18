const WebSocket = require("ws"); // Importa la biblioteca ws 
const readLine = require("readline"); // Me permite escribir por la terminal


const ws = new WebSocket("ws://localhost:3000"); // Conectar al cliente al servidor

const rl = readLine.createInterface({ // Interfaz para escribir por consola
    input: process.stdin,
    output: process.stdout,
    prompt: "Tú:",
});

ws.on("open", () => { // Función del webSocket abierto
    console.log("Conectado al nuevo chat");
    rl.prompt();

    rl.on("line", (line)=> { // Esto escucha los mensajes del cliente y lo manda al server  
        ws.send(line); // Envia el mensaje
        rl.prompt(); // Permite mandar más mensajes
    });
});
// Esto escucha los mensajes que vengan por parte del servidor
ws.on("message", (data) => {
    console.log("\nOtro:", data.toString()); // Los mensajes viene de forma string
    rl.prompt(); // Permite responder dichos mensajes.
});