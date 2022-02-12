import express from 'express';
import * as http from 'http';
import { getPort, getHelloMsg } from './configuration';
// import { SocketLogger } from './SocketLogger';
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
    const msg = `Hello from the API 💙`;
    res.send({ msg });
});

app.get('/api/hello_secret', (req, res) => {
    const msg = `Secrets: ${getHelloMsg() || 'Missing'}`;
    res.send({ msg });
});

server.listen(getPort(), function () {
    console.log(`App is listening on port ${getPort()}!`);
});
