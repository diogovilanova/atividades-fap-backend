//1°
const meuArray = [10, 20, 30, 40, 50];
const segundoElemento = meuArray[1];

//2°
const frutas = ['maçã', 'banana', 'laranja', 'uva', 'manga'];
const tamanhoArray = frutas.length;
console.log(`O tamanho do array é: ${tamanhoArray}`);

//3°
frutas.push('pera');

//4°
frutas.splice(0,1);

//5°
const numeros = [10, 20, 30, 40, 50];
const searchNumber = 25;

if (numeros.includes(searchNumber)) {
    console.log("O número 25 foi encontrado!");
} else {
    console.log("O número 25 não foi encontrado!");
}