const pessoa = [
  {
    nome: "Diogo Vila Nova",
    idade: 29,
    profissao: "Estudante", 
    cidade: "Paulista - PE"
  },
  {
    nome: "Pollyanna Almeida",
    idade: 28,
    profissao: "Analista de treinamento",
    cidade: "Olinda - PE"
  },
  {
    nome: "Fulano",
    idade: 70,
    profissao: "Aposentado",
    cidade: "Recife - PE"
  },
  {
    nome: "Beltrano",
    idade: 43,
    profissao: "Programador",
    cidade: "Igarassu - PE",
  }
];

for (const pessoas of pessoa) {
  console.log(`Pessoa: `);
  for (const propriedade in pessoas) {
    console.log(`\t ${propriedade}: ${pessoas[propriedade]}`);
  }
}