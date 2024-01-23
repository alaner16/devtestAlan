const express = require('express');
const app = express();
const port = 3000;
const testAlan = require('./services/functions-service');

app.post('/first', (req, res) => {
    try {
        const service = new testAlan();

        let data = req.query;
        let steps = JSON.parse(data.steps)
        const rest = service.first(steps);
        res.send({ resp: rest, status: true });
    } catch (err) {
        res.send({ resp: err, status: false });
    }
});

app.post('/second', (req, res) => {
    try {
        const service = new testAlan();
        let data = req.query;
        let numbers = JSON.parse(data.numbers);
        const rest = service.second(numbers);
        res.send({ resp: rest, status: true });
    } catch (err) {
        res.send({ resp: err, status: false });
    }
})

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
