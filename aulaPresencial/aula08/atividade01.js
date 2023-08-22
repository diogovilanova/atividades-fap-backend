// //1°
// const numeros = [3, 7, 2, 9, 5];
// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i]);
// }

// //----- OU com For...in-----

// const numeros = [3, 7, 2, 9, 5];
// for (let i in numeros) {
//     console.log(numeros[i])
// }

// //----- OU com For...of-----

// const numeros = [3, 7, 2, 9, 5];
// for (const numero of numeros) {
//     console.log(numero);
// }



// //2°
// const objeto = {
//     a: 10,
//     b: 20,
//     c: 30,
//     d: 40
// }
// let soma = 0;
// for (let i in objeto) {
//     if (objeto.hasOwnProperty(i)) {
//         soma += objeto[i];
//     }
// }
// console.log(`A soma dos valores é ${soma}`);

//----- OU com For...Of -----

// const objeto = {
//     a: 10,
//     b: 20,
//     c: 30,
//     d: 40
// }
// let soma = 0;
// for (let valor of Object.values(objeto)) {
//         soma += valor;
// }
// console.log(`A soma dos valores é ${soma}`);

// //3°
// const numeros = [12, 5, 8, 21, 16, 7];
// const numeroPar = [];
// for (let i = 0; i < numeros.length; i++) {
//   if (numeros[i] % 2 === 0) {
//     numeroPar.push(numeros[i]); 
//   }
// }
// console.log(numeroPar);

// // ----- OU com For...Of -----

// const numeros = [12, 5, 8, 21, 16, 7];
// const numeroPar = [];
// for (const numero of numeros) {
//     if (numero % 2 === 0) {
//         numeroPar.push(numero);
//     }
// }
// console.log(numeroPar);



// //4°
// const estudantes = {
//     alice: 18,
//     bob: 20,
//     carol: 19,
//     david: 21
// }
// for (const idade19 in estudantes) {
//     if (estudantes[idade19] === 19) {
//         console.log(`${idade19}: ${estudantes[idade19]}`);
//     }
// }

// //5°
// const pontos = [
//     [2, 5, 8], 
//     [3, 9, 12], 
//     [4, 6, 10]
// ];
// let soma = 0;
// for (let linha = 0; linha < pontos.length; linha++) {
//     for( let elemento = 0; elemento < pontos[linha].length; elemento++){
//         soma += pontos[linha][elemento];
//     }
// }
// console.log(`A soma de todos os elementos da matriz bidimensional é: ${soma}`);

// //----- OU com For...Of -----

// const pontos = [
//     [2, 5, 8], 
//     [3, 9, 12], 
//     [4, 6, 10]
// ];
// let soma = 0;

// for (const linha of pontos) {
//     for(const elemento of linha) {
//         soma += elemento;
//     }
// }

// console.log(`A soma total dos elementos da matriz é ${soma}`);