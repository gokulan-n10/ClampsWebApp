const express = require('express');
const { resolveNaptr } = require('dns');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to my first server!');
});

app.get('/api/info', (req, res) => {
    res.json({
        message: 'Hello from the server!',
        timestamp: new Date()
    });
});

app.post('/api/message', (req, res) => {
    const message = req.body.message;
    res.json({
        received: message,
        status: 'Message received successfully!'
    });
});

app.listen(port, () => {
    console.log(`Server is running at http:/localhost:${port}`);
});

