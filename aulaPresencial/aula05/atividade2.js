const readLine = require('readline-sync');
// 1°
const nome = readLine.question("Qual o seu nome? ");
function saudacao(nome) {
    console.log(`Olá, ${nome}`);
};
saudacao(nome);

// 2°
let num1 = parseFloat(readLine.question("Digite o primeiro número: "));
let num2 = parseFloat(readLine.question("Digite o segundo número: "));
let operacao = readLine.question("Insira a operação (+ - * /): ");

function calculadora(num1, num2, operacao) {
    switch (operacao) {
    case '+':
        const soma = num1 + num2;
        console.log(`A soma de ${num1} e ${num2} é: ${soma}`);
        break;
    case '-':
        const subtracao = num1 - num2;
        console.log(`A subtração de ${num1} e ${num2} é: ${subtracao}`);
        break;
    case '*':
        const multiplicacao = num1 * num2;
        console.log(`A multiplicação de ${num1} e ${num2} é: ${multiplicacao}`);
        break;
    case '/':
        if (num2 === 0) {
        console.log("Não pode dividir número por zero");
        } else {
            const divisao = num1 / num2;
            console.log(`A divisão de ${num1} e ${num2} é: ${divisao}`);
        }
        break;
    default:
        console.log("Operação inválida!");
        break;
    }
}
calculadora(num1, num2, operacao);

//3°
function contagemRegressiva(inicio = 10) {
    for (let i = inicio; i >= 1; i--) {
        console.log(i);
    }
}
contagemRegressiva();

//4°
const nome = readLine.question("Qual seu nome? ");
const idade = readLine.question("Quantos anos você tem? ");
const profissao = readLine.question("Qual sua profissão? ");

function apresentacao(nome, idade, profissao) {
    console.log(`Olá, eu sou ${nome}, tenho ${idade} anos e sou ${profissao}`);
};
apresentacao(nome, idade, profissao);

//5°
const texto = readLine.question("Digite um texto: ");
const estilo = readLine.question("Digite qual o estilo: ");

function mensagemPersonalizada(texto, estilo) {
    switch (estilo) {
        case 'normal':
            console.log(texto);
            break;
        case 'negrito':
            console.log(texto.bold());
            break;
        case 'italico':
            console.log(texto.italics());
            break;
        case 'blink':
            console.log(texto.blink());
            break;
        case 'strike':
            console.log(texto.strike());
            break;
        default:
            console.log("Estilo inválido!");
    };
}
mensagemPersonalizada(texto, estilo);