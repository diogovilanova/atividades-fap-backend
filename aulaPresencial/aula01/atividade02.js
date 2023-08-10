    let num1 = prompt("Digite um número: ");
    if (num1 >=0) {
        alert(`O número ${num1} é positivo`);
    } else {
        alert(`O número é negativo.`);
    }

    let num2 = prompt("Digite um número: ");
    if (num2 % 2 === 0) {
        console.log(`O número ${num1} é par`);
    } else {
        alert(`O número é impar`);
    }

    let num3 = prompt("Digite um número: ");
    if (num3 > 10) {
        console.log(`O número ${num3} é maior que 10`);
    } else {
        console.log(`O número é menor ou igual a 10`);
    }

    //FALTAM DOIS

//instalar modo sync
/*
const readLine = require('readline-sync);

var nome = readline.question("Digite o seu nome: ");
console.log(`O nome digitado foi: ${nome}`);

*/