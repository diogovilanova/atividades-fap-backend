const readLine = require('readline-sync');

function calculadoraDeMedia () {
  const nota1 = parseFloat(readLine.question("Digite a primeira nota: "));
  const nota2 = parseFloat(readLine.question("Digite a segunda nota: "));
  const nota3 = parseFloat(readLine.question("Digite a terceira nota: "));

  const media = (nota1 + nota2 + nota3) / 3;
  console.log(`A média das notas do aluno é: ${media.toFixed(1)}`);
}
calculadoraDeMedia();