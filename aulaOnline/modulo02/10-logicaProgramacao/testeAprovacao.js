const readLine = require('readline-sync');

let nomeAluno = readLine.question("Digite o nome do aluno: ");

let nota1 = parseFloat(readLine.question("Digite a primeira nota: "));
let nota2 = parseFloat(readLine.question("Digite a segunda nota: "));

let faltas = parseInt(readLine.question("Digite o número de faltas: "));

let notaMedia = (nota1 + nota2) / 2;

function testeAprovacao (notaMedia) {
    if (notaMedia < 7 || faltas > 3){
        console.log(`O(A) aluno(a) ${nomeAluno} está REPROVADO(A)!`);
    } else {
        console.log(`O(A) aluno(a) ${nomeAluno} está APROVADO(A)!`);
    }
}
testeAprovacao(notaMedia);