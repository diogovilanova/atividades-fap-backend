const readLine = require('readline-sync');

function primeiroCodigo() {
  let nota1 = parseFloat(readLine.question("Digite a primeira nota: "));
  let nota2 = parseFloat(readLine.question("Digite a segunda nota: "));
  let nota3 = parseFloat(readLine.question("Digite a terceira nota: "));

  nota1 = (nota1 >= 0 && nota1 <= 10) ? nota1 : 0;
  nota2 = (nota2 >= 0 && nota2 <= 10) ? nota2 : 0;
  nota3 = (nota3 >= 0 && nota3 <= 10) ? nota3 : 0;
  const mediaNota = (nota1 + nota2 + nota3) / 3;
  const resultado = (mediaNota >= 7 && mediaNota !== NaN) ? "Aprovado" : "Reprovado";
  console.log(`A média do aluno(a) é ${mediaNota.toFixed(2)}`);
  console.log(`Aluno(a) ${resultado}`);
}
primeiroCodigo();

function segundoCodigo() {
  let nota1 = parseFloat(readLine.question("Digite a primeira nota: "));
  let nota2 = parseFloat(readLine.question("Digite a segunda nota: "));
  nota1 = (nota1 >= 0 && nota1 <= 10) ? nota1 : 0;
  nota2 = (nota2 >= 0 && nota2 <= 10) ? nota2 : 0;
  const mediaInicial = (nota1 + nota2) / 2;
  console.log(`Sua média inicial é ${mediaInicial.toFixed(2)}`);
  const notaMinima = 21 - (nota1 + nota2);
  if (notaMinima <= 10) {
    console.log(`Você precisa tirar ${notaMinima.toFixed(2)} para passar com média 7.`);
  } else {
    console.log(`Não é possivel passar com média 7, pois a nota necessária é ${notaMinima}, sendo assim maior que 10.`);
  }
}
segundoCodigo();