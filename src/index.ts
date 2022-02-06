import express from 'express';
import path from 'path';
import { port } from './configuration';
const app = express();

app.use(express.static('frontend-build'));

app.get('/api/hello', (req, res) => {
    console.log('Sent message');
    res.send({ msg: 'Hello from the API 💙' });
});

app.listen(port, function () {
    console.log(`App is listening on port ${port}!`);
    console.log(
        'Attempting to serve:',
        path.join(process.cwd(), 'frontend-build', '/index.html'),
    );
});
