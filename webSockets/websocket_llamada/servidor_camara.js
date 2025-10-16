const express = require('express');
const fs = require('fs');
const https = require('https');
const WebSocket = require('ws'); 

const app = express();
app.use(express.static('public'));


const server = https.createServer({
    key: fs.readFileSync("localhost-key.pem"),
    cert: fs.readFileSync("localhost.pem")
}, app);


const wss = new WebSocket.Server({ server }); 

const rooms = new Map();

// Enviar mensajes a todos menos al remitente
function broadcastToRoom(roomId, exClientId, msg) {
    const room = rooms.get(roomId); 
    if (!room) return;

    for (const [clientId, ws] of room.clients.entries()) {
        if (clientId === exClientId) continue;
        if (ws.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify(msg));
        }
    }
}

wss.on('connection', (ws) => {
    ws.id = Math.random().toString(36).substr(2, 9);
    ws.roomId = null;

    ws.on('message', (data) => {
        let msg;
        try {
            msg = JSON.parse(data);
        } catch (e) {
            return;
        }

        const { type, roomId, payload } = msg;

        // Cuando alguien se une a una sala
        if (type === 'join') {
            ws.roomId = roomId;
            if (!rooms.has(roomId)) {
                rooms.set(roomId, { clients: new Map() }); 
            }

            rooms.get(roomId).clients.set(ws.id, ws);

            // Avisar a otros que hay un nuevo peer
            broadcastToRoom(roomId, ws.id, { type: 'new-peer', payload: { id: ws.id } });

            // Enviar lista de peers actuales al nuevo
            const otherIds = [...rooms.get(roomId).clients.keys()].filter(id => id !== ws.id);
            ws.send(JSON.stringify({ type: 'peers', payload: { you: ws.id, others: otherIds } }));
            return;
        }

        if (!ws.roomId) return;

        if (['offer', 'answer', 'ice-candidate', 'leave'].includes(type)) {
            const { target } = payload || {};
            if (target) {
                const room = rooms.get(ws.roomId);
                const targetWs = room && room.clients.get(target);
                if (targetWs && targetWs.readyState === WebSocket.OPEN) {
                    targetWs.send(JSON.stringify({ type, payload: { from: ws.id, ...payload } }));
                }
            } else {
                broadcastToRoom(ws.roomId, ws.id, { type, payload: { from: ws.id, ...payload } });
            }
            return;
        }
    });

    ws.on('close', () => {
        if (ws.roomId && rooms.has(ws.roomId)) {
            const room = rooms.get(ws.roomId);
            room.clients.delete(ws.id);

            broadcastToRoom(ws.roomId, ws.id, { type: 'peer-left', payload: { id: ws.id } });

            if (room.clients.size === 0) rooms.delete(ws.roomId);
        }
    });
});

app.get('/', (req, res) => {
    res.sendFile('index_camara.html', {root: 'public'});
});

const PORT = process.env.PORT || 3000;
server.listen(PORT,() => console.log(`Listening on https://localhost:${PORT}`));
