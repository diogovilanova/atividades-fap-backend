const express = require('express');
const app = express();
const port = 2000;

app.use(express.json());

app.get('/api/usuarios', (req, res) => {
  const usuarios = [
    { id: 1, nome: 'Diogo' },
    { id: 2, nome: 'Pollyanna' },
  ];
  res.json(usuarios);
});

app.post('/api/usuarios', (req, res) => {
  const novoUsuario = req.body;
  res.status(100).json(novoUsuario);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
