const readLine = require("readline-sync");

// function fatorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * fatorial(n - 1);
//   }
// }
// const numero = readLine.question("Digite um número: ");
// console.log(`O fatorial de ${numero} é ${fatorial(numero)}`);

// 1° Crie uma função recursiva chamada somaRecursiva que recebe um numero inteiro N, como argumento, e calcule a soma de todos os números inteiros
// de 1 ate N.
function somaRecursiva(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + somaRecursiva(n - 1);
  }
}
const numero = readLine.question("Digite um número inteiro: ");
const resultado = somaRecursiva(numero);
console.log(`A soma dos números de 1 ate ${numero} é: ${resultado}`);

//2° Escreva uma função chamada fibonacci que receba um numero n como parametro e retorne o n-ésimo termo da sequencia de fibonacci. Lembre-se de implementar essa função de forma recursiva.
function fibonacci(n) {
  if (n === 0) { 
    return 0;
  }
  if (n === 1) {
    return 1;
  } 
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const numero = readLine.question("Digite um número: ");
const resultado = fibonacci(numero);
console.log(`O ${numero} termo da função é :${resultado}`);

