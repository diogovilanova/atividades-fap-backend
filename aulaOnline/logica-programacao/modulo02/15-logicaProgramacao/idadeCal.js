const readLine = require('readline-sync');

function calcularIdade(entradaNome, entradaAno) {
  const anoAtual = 2022;
  const idadeAtual = anoAtual - entradaAno;
  return `${entradaNome}, completou ou completará ${idadeAtual} anos em 2022.`
}

function anoNascimento() {
  while (true) {
    try {
      const entradaAno = parseInt(readLine.question('Digite o ano do seu nascimento: '));
      if (isNaN(entradaAno) || entradaAno < 1922 || entradaAno > 2021) {
        throw new Error(`O ano de ${entradaAno} é inválido! Tente um ano que seja entre 1922 e 2021.`);
      } else {
        return entradaAno;
      }
    } catch (error) {
      console.error(error.message);
    }
  }
}

function dados() {
  const entradaNome = readLine.question('Digite seu nome completo: ');
  const entradaAno = anoNascimento();
  const entradaIdade = calcularIdade(entradaNome, entradaAno);
  console.log(entradaIdade);
}
dados();