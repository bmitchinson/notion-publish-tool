import express from 'express';
import * as http from 'http';
import { port } from './configuration';
import { SocketLogger } from './SocketLogger';
import { WebSocketServer, WebSocket } from 'ws';

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server, path: '/logger' });

// const socketLogger = new SocketLogger(server);

wss.on('connection', (ws: WebSocket) => {
    console.log('establish websocket connection');
    ws.send('Hello from the WebSocket 💚');
});

app.use(express.static('frontend'));

app.get('/api/hello', (req, res) => {
    console.log('Sent message');
    res.send({ msg: 'Hello from the API 💙' });
});

server.listen(port, function () {
    console.log(`App is listening on port ${port}!`);
});
