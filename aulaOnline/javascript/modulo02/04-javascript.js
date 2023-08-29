const readLine = require("readline-sync");

function calculadora() {
  const num1 = parseFloat(
    readLine.question("Digite o valor do primeiro número: ")
  );
  const num2 = parseFloat(
    readLine.question("Digite o valor do segundo número: ")
  );
  const operador = readLine.question(`Digite o operador:
  -Soma ' + '
  -Subtração ' - '
  -Multiplicação ' * '
  -Divisão ' / '
  -Potenciação ' ** '
  `);

  function operacao() {
    switch (operador) {
      case '+':
        const soma = num1 + num2;
        console.log(`A soma de ${num1} e ${num2} é: ${soma.toFixed(2)}`);
        break;
      case '-':
        const subtracao = num1 - num2;
        console.log(`A subtração de ${num1} e ${num2} é: ${subtracao.toFixed(2)}`);
        break;
      case '*': 
        const multiplicacao = num1 * num2;
        console.log(`A multiplicação de ${num1} e ${num2} é: ${multiplicacao.toFixed(2)}`);
        break;
      case '/':
        if (num2 === 0) {
          console.log(`Não pode dividir o ${num1} por zero`);
          return calculadora();
        } else {
          const divisao = num1 / num2;
          const restoDivisao = num1 % num2;
          console.log(`A divisão de ${num1} e ${num2} é: ${divisao.toFixed(2)} e o resto da divisão é: ${restoDivisao}`);
        }
        break;
      case '**':
        const potenciacao = Math.pow(num1, num2);
        console.log(`A potenciação de base: ${num1} e expoente: ${num2} é: ${potenciacao.toFixed(2)}`);
        break;
      default:
        console.log("Operação inválida! Tente novamente.");
        return calculadora();
    }
  }
  operacao();
}
calculadora();