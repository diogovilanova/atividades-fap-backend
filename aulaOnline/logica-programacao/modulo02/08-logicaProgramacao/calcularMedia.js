const readLine = require('readline-sync');

const nota1 = parseFloat(readLine.question("Digite a primeira nota: "));
const nota2 = parseFloat(readLine.question("Digite a segunda nota: "));

const notaMedia = (nota1 + nota2) / 2;

function testeAprovacao (notaMedia) {
    if (notaMedia >= 7){
        console.log(`A média foi ${notaMedia}, aluno(a) APROVADO(A)!`);
    } else {
        console.log(`A média foi ${notaMedia}, aluno(a) REPROVADO(A)!`);
    }
}
testeAprovacao(notaMedia);