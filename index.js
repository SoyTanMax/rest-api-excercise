const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: '👕',
        size: 'large'
    })
})

app.post('/tshirt', (req, res) => {

    const {id} = req.params;
    const {logo} = req.body;

    if(!logo) {
        res.status(418).send({
            message: 'Logo is required';
        })
    }

    rest.send({
        tshirt: `👕 with ${logo} and ID of ${id}`
    })
})