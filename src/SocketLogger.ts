import { WebSocketServer } from 'ws';
import * as http from 'http';

export class SocketLogger {
    private wss: WebSocketServer;

    constructor(server: http.Server) {
        console.log('Created a server');
        this.wss = new WebSocketServer({ server: server, path: '/logs' });
        this.wss.on('connection', function connection(ws, req) {
            console.log('Client was connected:', req.socket.remoteAddress);
            ws.send('Connected to the publishing API!');
        });
    }
}
