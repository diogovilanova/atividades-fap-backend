const readLine = require('readline-sync');

const num1 = parseFloat(readLine.question("Digite o primeiro número: "));
const num2 = parseFloat(readLine.question("Digite o segundo número: "));
const operacaoTipo = parseInt(readLine.question("Digite qual é a operação: "));
operacao(num1, num2, operacaoTipo);


function operacao(num1, num2, operacaoTipo) {
    switch (operacaoTipo) {
        case 1:
            let soma = num1 + num2;
            console.log(`A soma dos dois números é: ${soma}`);
            break;
        case 2:
            let subtracao = num1 = num2;
            console.log(`A subtração dos dois números é ${subtracao}`);
            break;
        case 3:
            let multiplicacao = num1 * num2;
            console.log(`A multiplicação dos dois números é: ${multiplicacao}`);
            break;
        case 4:
            if(num2 === 0){
                console.log("Não é possível dividir por zero")
            } else{
                let divisao = num1 / num2;
                console.log(`A divisão dos dois números é: ${divisao}`);
            }
            break;
        default:
            return 0;
    }
}