// https://stackoverflow.com/a/69773286

/* index.ts */
import http from 'http';
import express from 'express';
import exampleRouter from './exampleRouter';

// set up express and create a http server listen for websocket requests on the same port
const app = express();
const server = http.createServer(app);

// listen for websocket requests, which are simple HTTP GET requests with an upgrade header
// NOTE: this must occur BEFORE other middleware is set up if you want the additional ws.handled functionality to close unhandled requests
server.on(
    'upgrade',
    (
        req: Request & {
            ws: { socket: Socket; head: Buffer; handled: boolean };
        },
        socket: Socket,
        head: Buffer,
    ) => {
        // create a dummy response to pass the request into express
        const res = new http.ServerResponse(req);
        // assign socket and head to a new field in the request object
        // optional **handled** field lets us know if there a route processed the websocket request, else we terminate it later on
        req.ws = { socket, head, handled: false };
        // have Express process the request
        app(req, res);
    },
);

/* whatever Express middlewares you want here, such as authentication */
app.use('/example', exampleRouter);

// set up a middleware to destroy unhandled websocket requests and returns a 403
// NOTE: this must occur AFTER your other middlewares but BEFORE the server starts listening for requests
app.use(
    (
        req: Request & {
            ws?: { socket: Socket; head: Buffer; handled: boolean };
        },
        res: Response,
        next: NextFunction,
    ): void => {
        if (req.ws && req.ws.handled === false) {
            req.ws.socket.destroy();
            res.status(404).json('404: Websocket route not found');
        }
        next();
    },
);
