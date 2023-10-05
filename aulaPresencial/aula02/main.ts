// //1° Funções sem parametro e sem retorno
// function fun01(): void {
//     console.log("Primeira função em typescript!");
// }
// fun01();
// //2° Funções com parametro e sem retorno
// function fun02(nome: string): void {
//     console.log(`Segunda função em typescript retornando: ${nome}`);
// }
// fun02("Isso");
// //3° Funções sem parametro e com retorno
// function fun03(): number | undefined {    
//     return 27;
// }
// console.log(fun03());

// //4° Funções com parametro e com retorno
// function fun04(num1: number, num2: number): number {
//     return num1 + num2;
// }
// console.log(fun04(27, 10));



//Exercicios função sem retorno

// Crie uma função chamada saudacao que exiba a mensagem "Olá, mundo!" no console quando for chamada.
function saudacao(): void {
    console.log("Olá, mundo!");
}
saudacao();
// Escreva uma função chamada dobro que aceite um parâmetro num e exiba o dobro desse número no console.
function dobro(num: number): number {
    return num * 2;
}
console.log(dobro(2));
//Crie uma função chamada mostrarNumeros que receba dois parâmetros, inicio e fim. Essa função deve exibir todos os números inteiros no intervalo de inicio a fim (inclusive) no console.

function mostrarNumeros()