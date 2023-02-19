const express = require('express');

const app = express();

app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));
// app.get('/', (req, res) => res.status(200).send('<h1>Olá Mundo!</h1>'));
// app.get('/', (req, res) => res.status(200).redirect('https://www.betrybe.com/'));
// app.get('/', (req, res) => res.status(200).render('./index.html'));
// app.get('/', (req, res) => res.status(200).end());




module.exports = app;