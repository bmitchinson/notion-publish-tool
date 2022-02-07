import express from 'express';
import { port } from './configuration';
const app = express();

app.use(express.static('frontend'));

app.get('/api/hello', (req, res) => {
    console.log('Sent message');
    res.send({ msg: 'Hello from the API 💙' });
});

app.listen(port, function () {
    console.log(`App is listening on port ${port}!`);
});
