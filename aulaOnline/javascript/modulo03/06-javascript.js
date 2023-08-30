const readLine = require('readline-sync');
//Função tradicional sem parametro
function exibirOpcoes() {
  console.log(`
  ---> Calculadora <---
  1. Soma
  2. Subtração
  3. Multiplicação
  4. Divisão
  5. Potenciação
  6. Sair
  `);
}

//Função tradicional com parâmetro e retorno de valor
function calculadora(operacao, num1, num2) {
  switch (operacao) {
    case 1:
      return num1 + num2;
    case 2:
      return num1 - num2;
    case 3:
      return num1 * num2;
    case 4:
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        return console.error(`O divisor não pode ser igual a ${num2}`);
      }
    case 5:
      return Math.pow(base, expoente);
    case 6:
      console.log("Saindo da calculadora");
      break;
    default:
      return "Operação inválida";
  }
}

//Arrow function com parâmetros e que retorne um valor
const potenciacao = (base, expoente) => {
  return Math.pow(base, expoente);
} 

exibirOpcoes();

const operacao = parseInt(readLine.question("Digite um operação (1 a 6): "));
if (operacao >= 1 && operacao <= 4) {
  const num1 = parseFloat(readLine.question("Digite o primeiro número: "));
  const num2 = parseFloat(readLine.question("Digite o segundo número: "));
  const resultado = calculadora(operacao, num1, num2);
  console.log(`Resultado: ${resultado}`);
} else if (operacao === 5) {
  const base = parseFloat(readLine.question("Digite a base: "));
  const expoente = parseFloat(readLine.question("Digite o expoente: "));
  const resultadoPontencia = potenciacao(base, expoente);
  console.log(`Resultado: ${resultadoPontencia.toFixed(1)}`);
} else if (operacao === 6) {
  console.log("Saindo da calculadora...");
} else {
  console.log("Operação inválida, escolha uma das opções:");
  return exibirOpcoes();
}
