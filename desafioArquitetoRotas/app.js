const express = require('express');
const BodyParser = require('body-parser');
const app = express();

app.use(BodyParser.json());

const users = [
    {
        id: 1, 
        nome: "Diogo Vila Nova", 
        idade: 29, 
        profissao: "Desenvolvedor Web Fullstack"
    },
    { 
        id: 2, 
        nome: "Pollyanna Almeida", 
        idade: 28, 
        profissao: "Analista de Treinamento" 
    },
];

app.get("/", (req, res) => {
    res.send("Bem-vindo ao meu web service!");
});

app.get("/users", (req, res) => {
    res.send(users);
});

app.get("/users/:id", (req, res) => {
    const user = users.find((l) => l.id === parseInt(req.params.id));
    if (!user) {
      return res.status(404).json({ mensagem: "Usuário não encontrado" });
    };
    res.send(user);
});

app.post("/users", (req, res) => {
    const newUser = {
      id: users.length + 1,
      nome: req.body.nome,
      idade: req.body.idade,
      profissao: req.body.profissao,
    };
  
    users.push(newUser);
    res.status(201).json(newUser);
  });
  
app.get("/saudacao/:nome", (req, res) => {
    const nome = req.params.nome;
    res.send(`Olá, ${nome} tudo bem?`);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});