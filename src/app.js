const { query } = require('express');
const express = require('express');

const app = express();

// app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));
// app.get('/', (req, res) => res.status(200).send('<h1>Olá Mundo!</h1>'));
// app.get('/', (req, res) => res.status(200).redirect('https://www.betrybe.com/'));
// app.get('/', (req, res) => res.status(200).render('./index.html'));
// app.get('/', (req, res) => res.status(200).end());
app.use(express.json());
// Query strings
app.get('/search', (req, res) => {
  console.log(req.query.name);
  console.log(req.query.age);
  res.status(200).send('<h1>Search ok</h1>');
})

// Parãmetros de rotas
app.post('/people/:name/:age/:city', (req, res) => {
  console.log(req.params.name)
  console.log(req.params.age)
  console.log(req.params.city)
  res.status(200).send('People ok!');
})

// Corpo de requisição
app.post('/tasks', (req, res) => {
  console.log(req.body)
  res.status(200).send('Tasks ok!');
})




module.exports = app;