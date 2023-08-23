const readLine = require('readline-sync');

function  calculadora() {
    console.log(`
    1: Soma,
    2: Subtração,
    3: Multiplicação,
    4: Divisão,
    0: Sair
    `);

    const operacaoTipo = parseInt(readLine.question("Digite o número da operação: "));
    
    if (operacaoTipo === 0) {
        console.log("Saindo!");
        return;
    } else if (operacaoTipo < 1 || operacaoTipo > 4 || isNaN(operacaoTipo)) {
        console.log("Opção não definida.");
    } else {
        const num1 = parseFloat(readLine.question("Insira o primeiro valor: "));
        const num2 = parseFloat(readLine.question("Insira o segundo valor: "));
    
        switch (operacaoTipo) {
            case 1:
                console.log(`O resultado da soma é: ${num1 + num2}`);
                break;
            case 2:
                console.log(`O resultado da subtração é: ${num1 - num2}`);
                break;
            case 3:
                console.log(`O resultado da multiplicação é: ${num1 * num2}`);
                break;
            case 4:
                if (num2 === 0) {
                    console.log("Não é possivel dividir por 0");
                    break;
                } else {
                    console.log(`O resultado da divisão é: ${num1 / num2}`);
                    break;
                }                
            default:
                console.log("Operação inválida.");
        }
    }
}
calculadora();