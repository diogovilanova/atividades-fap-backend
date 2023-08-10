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

//6°
const lista1 = [1, 2, 3, 4, 5];
const lista2 = [1, 2, 3, 4, 5];

const novaLista = lista1.concat(lista2);

//7°
const numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPares = numeros1.filter(numeros => numeros % 2 === 0);

//8°
const numeros2 = [3, 1, 4 , 1, 5, 9, 2, 6, 5, 3, 5];

numeros2.sort((a, b) => a - b);
console.log(numeros2)

//9°
const frutas1 = ['maça', 'banana', 'laranja', 'uva', 'manga'];

const searchFruit = frutas1.indexOf('laranja');

console.log(`O indice da fruta laranja é: ${searchFruit}`);

//10°
const parametro = ['maça', 'banana', 'laranja', 'uva', 'manga'];
console.log(arrayTest(parametro));

function arrayTest(parametro) {
        return Array.isArray(parametro)
}