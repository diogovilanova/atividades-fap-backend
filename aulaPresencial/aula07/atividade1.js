// //1° Crie um programa que recebe do teclado um número e tenta dividir por zero dentro de um bloco try... catch. capture o erro e o exiba "Erro: Divisão por zero" no console.
const readLine = require('readline-sync');

// try {
//     const numero = parseFloat(readLine.question("Digite um número: "));
//     const zero = 0;
//     if (isNaN(numero)) {
//         throw new Error ("Entrada inválida!");
//     } if (zero === 0) {
//         throw new Error ("Valor zero!");
//     }
//     const resultado = numero / zero;

//     console.log (`Resultado: ${resultado}`);
// } catch (erro) {
//     console.error(`Erro: ${erro.message}`);
// }

// //2° Crie um programa que recebe do teclado uma string não númerica em um número utilizando parseInt dentro de um bloco try... catch. Capture o erro e o exiba "Erro: conversão inválida" no console.

// try {
//     const numero = parseInt(readLine.question("Digite um número: "));
//     const zero = 0;
//     if (isNaN(numero)) {
//         throw new Error ("Erro: Conversão inválida");
//     }
//     const resultado = numero / zero;

//     console.log (`Resultado: ${resultado}`);
// } catch (erro) {
//     console.error(`Erro: ${erro.message}`);
// }

//3° Crie um programa que tenha uma lista, como exemplo, e recebe do teclado um objeto e tente acessar uma propriedade inexistente desse objeto dentro de um bloco trt..catch. capture o erro e o exiba: "Erro: Propriedade não encontrada" no console. --------------REVISAR---------------

try {
    const listaObjetos = { nome: "Carro", quantidade: 10, cor: "Vermelho" };
    
  } catch (erro) {
    console.log("Erro: Propriedade não encontrada");
  }
