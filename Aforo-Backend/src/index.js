import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('SERVER ON');
});

export default app;