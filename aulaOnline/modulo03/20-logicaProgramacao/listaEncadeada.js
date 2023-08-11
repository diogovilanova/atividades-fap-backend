class Pessoa {
  constructor(nome, idade, filho) {
    this.nome = nome;
    this.idade = idade;
    this.filho = filho || null; //caso não tenha filho será nulo.
  }
}


const pessoa1 = new Pessoa("Amara", 89);
const pessoa2 = new Pessoa("Suelene", 58);
const pessoa3 = new Pessoa("Diogo", 29);

pessoa1.filho = pessoa2;
pessoa2.filho = pessoa3;

function exibirVinculo(pessoa) {
  let pessoaAtual = pessoa;
  while (pessoaAtual !== null) {
    console.log(`Nome: ${pessoaAtual.nome}, Idade: ${pessoaAtual.idade}`);
    pessoaAtual = pessoaAtual.filho;
  }
}
exibirVinculo(pessoa1);