//1°
function primeiraQst() {
    let num = 1;

    while (num <= 10) {
        console.log(num);
        num++
    }
    
}
primeiraQst();

//2°

function segundaQst() {
    let soma = 0;
    let num = 1;

    while (num <= 100) {
        soma += num; //soma = soma + num
        num++;
        console.log(soma);
    }
}
segundaQst();

//3°
function terceiraQst() {
    let num = 1;
    let contadorPar = 0;

    while (num <= 50) {
        if (num % 2 === 0) {
            contadorPar++;
            console.log(`A quantidade de números pares de 1 a 50 é: ${contadorPar}`);
        }
        num++
    }
}
terceiraQst();

//4°
// Multiplique um numero por 2 ate que o resultado seja maior que 1000.

function quartaQst() {
    let num = 1;
    
    while (num <= 1000) {
        num *= 2; //num = num * 2
        console.log(num);
    }
}
quartaQst();

//5°

function quintaQst(numPrimo) {
    if (numPrimo <= 1) {
        return "Número menor ou igual a 1 não é primo";
    } 

    let divisor = 2;

    while (divisor < numPrimo) {
        if (numPrimo % divisor === 0) {
            return "Número é divisivel por outro número que não é 1 nem ele mesmo, não é primo";
        }
        divisor++;
    }
    return "O número é primo."; //loop não encontrou nenhum divisor, o número é primo
}

console.log(quintaQst(11));  // true, pois 11 é primo
console.log(quintaQst(20)); // false, pois 20 não é primo
console.log(quintaQst(1));  // false, pois 1 não é primo
console.log(quintaQst(0)); // false, pois 0 não é primo
  
//6°
const readLine = require('readline-sync');

const senhaCorreta = 'senha123';

function lerSenhaUsuario() {
  return readLine.question('Digite sua senha:');
}

let senhaDigitada = lerSenhaUsuario();

while (senhaDigitada !== senhaCorreta) {
  console.log('Senha incorreta! Tente novamente.');
  senhaDigitada = lerSenhaUsuario();
}
console.log('Senha correta! Bem-vindo!');

//7°
function multiploTres() {
    let num = 1;

    while (num <= 30) {
        if(num % 3 === 0){
            console.log(num);
        }
        num++;
    }
}