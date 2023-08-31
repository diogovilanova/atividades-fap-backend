const readLine = require('readline-sync');
// //1°
// function dados() {
//     const nome = readLine.question("Digite o nome do aluno: ");
//     const nota1 = parseFloat(readLine.question("Digite a primeira nota: "));
//     const nota2 = parseFloat(readLine.question("Digite a segunda nota: "));
//     const nota3 = parseFloat(readLine.question("Digite a terceira nota: "));
//     const mediaAritmetica = (nota1 + nota2 + nota3) / 3;
//     console.log(`Aluno: ${nome} 
//     Média: ${mediaAritmetica.toFixed(2)}
//     `);    
// }
// dados();

// //2°
// function anoBissexto() {
//     const anoEntrada = parseInt(readLine.question("Digite o ano: "));
//     if (anoEntrada % 4 === 0 && anoEntrada % 100 !== 0) {
//         console.log(`O ano de ${anoEntrada} é bissexto`);
//     } else {
//         console.log(`O ano de ${anoEntrada} não é Bissexto`);
//     }
// }
// anoBissexto();

// //3°
// function estado() {
//     let valor = parseFloat(readLine.question("Digite o valor do produto: "));
//     const estadoDestino = readLine.question("Digite qual estado(MG, SP, RJ ou MS): ").toUpperCase();
//     switch (estadoDestino) {
//         case 'MG':
//             valor *= (1 + 0.07);
//             console.log(`O valor do produto para o estado de MG é: ${valor.toFixed(2)}`);
//             break;
//          case 'SP':
//             valor *= (1 + 0.12);
//             console.log(`O valor do produto para o estado de SP é: ${valor.toFixed(2)}`); 
//             break;
//          case 'RJ':
//             valor *= (1 + 0.15);
//             console.log(`O valor do produto para o estado de RJ é: ${valor.toFixed(2)}`);
//             break;
//          case 'MS':
//             valor *= (1 + 0.08);
//             console.log(`O valor do produto para o estado de MS é: ${valor.toFixed(2)}`);
//             break;
//          default:
//             console.error(`O estado ${estadoDestino} não listado`);
//             return estado();           
//     }
// }
// estado();

// //4°
// //com For
// let soma = 0;
// for (let i = 2; i <= 100; i += 2) {
//   soma += i;
// }
// console.log(`A soma dos 50 primeiros números pares é: ${soma}`);
// //Com While
// let soma = 0;
// let i = 2;
// while (i <= 100) {
//   soma += i;
//   i += 2;
// }
// console.log(`A soma dos 50 primeiros números pares é: ${soma}`);
// //Com Do-While
// let soma = 0;
// let i = 2;
// do {
//   soma += i;
//   i += 2;
// } while (i <= 100);
// console.log(`A soma dos 50 primeiros números pares é: ${soma}`);

// //5°
// const n = parseInt(readLine.question("Digite um número N: "));

// if (!isNaN(n)) {
//   let count = 1;
//   let oddNumber = 1;

//   console.log(`Os primeiros ${n} números naturais ímpares são:`);

//   while (count <= n) {
//     console.log(oddNumber);
//     oddNumber += 2;
//     count++;
//   }
// } else {
//   console.log("Por favor, digite um número válido.");
// }

// //6°
// var diasTrabalhados = parseInt(readLine.question("Digite o número de dias trabalhados:"));
// var valorDia = 30;
// var valorBruto = diasTrabalhados * valorDia;
// var desconto = valorBruto * 0.08;
// var valorLiquido = valorBruto - desconto;
// console.log(`O valor líquido a ser pago é: R$ ${valorLiquido.toFixed(2)}`);

//7°