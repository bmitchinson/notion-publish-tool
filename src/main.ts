import express from 'express';
import * as http from 'http';
import { getPort, getHelloMsg, themeName } from './configuration';
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

// confirm we have read access to the hexo theme
//   serves as a confirmation that submodules cloned correctly
app.get('/api/theme_conf', (req, res) => {
    import(`../hexo-site/themes/${themeName}/package.json`).then(
        (theme_package) => {
            res.send({ msg: `Theme: "${theme_package.name}" 🎨` });
        },
    );
});

server.listen(getPort(), function () {
    console.log(`App is listening on port ${getPort()}!`);
});
