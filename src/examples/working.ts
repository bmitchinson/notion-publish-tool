///////
// stackoverflow.com/a/63112811

https: import express from 'express';
import WebSocket from 'ws';
import http from 'http';
import path from 'path';

const app = express();
const port = 3000;
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws: WebSocket) => {
    console.log('establish websocket connection');
    ws.on('message', (message) => {
        console.log('received: %s', message);
    });
});

app.get('/external-api', (req, res) => {
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send('email haha');
        }
    });
    res.sendStatus(200);
});

server.listen(port, () =>
    console.log(`http server is listening on http://localhost:${port}`),
);
