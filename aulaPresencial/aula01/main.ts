let numero: number = 27;
let texto: null = null;
let nome: string = " Diogo ";
let sobrenome: string = "Vila Nova"
let logico: boolean = false;
let lista: Array<string> = ["maçã", "pera"];
let lista2: Array<any> = [1, "banana", 2, "uva"];
let objeto: Object = { nome: "Diogo", idade: 27 };

let numero2: number = 27.62345;
let teste: string = "Ads";

// //Métodos de Number

// console.log(numero2.toFixed(2));
// console.log(numero2.toPrecision(1));
// console.log(numero2.toString());
// console.log(parseInt("27"));
// console.log(parseFloat("27.12"));
// console.log(isNaN(numero2));
// console.log(isFinite(numero2));
// console.log(numero2.toExponential());
// console.log(Math.abs(numero));
// console.log(Math.round(numero2));
// console.log(Math.floor(numero2));
// console.log(Math.ceil(numero2));
// console.log(Math.max(numero, numero2));
// console.log(Math.min(numero, numero2));

// //Métodos de String

// console.log(nome);
// console.log(nome.trim());
// console.log(nome.charAt(1));
// console.log(nome.concat(sobrenome));
// console.log(sobrenome.indexOf("o"));
// console.log(sobrenome.lastIndexOf("a"));
// console.log(sobrenome.slice(0,4));
// console.log(numero.toString());
// console.log(sobrenome.substring(0, 3));
// console.log(sobrenome.toUpperCase());
// console.log(nome.toLowerCase());

//Métodos de Array

const animais: Array<string> = ["Cachorro", "Gato", "Vaca"];
const animais2: Array<string> = ["Cobra", "Falcão"];
const mes: Array<string> = ["Jan", "Fev", "Abr"]
console.log(animais.push("Leão"));
console.log(animais.pop());
console.log(animais.shift());
console.log(animais.unshift("Tigre"));
console.log(animais2.concat(animais));
console.log(animais2.join());
console.log(animais.concat(animais2).slice(0, 2));
console.log(mes.splice(2, 1, "Mar")); //trocar
console.log(mes.splice(3, 0, "Abr")); //inserir
console.log(mes.splice(0, 1)); //deletar
console.log(mes);




