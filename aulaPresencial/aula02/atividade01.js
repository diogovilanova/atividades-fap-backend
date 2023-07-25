//Questão 1 - Verifique o dia da semna com base em um numero de 1 a 7.

function diaDaSemana (dia) {
    switch (dia) {
        case 1: 
            return "Domingo";
        case 2:
            return "Segunda";
        case 3:
            return "Terça";
        case 4:
            return "Quarta";
        case 5:
            return "Quinta";
        case 6:
            return "Sexta";
        case 7:
            return "Sabado";
        default:
            return `O número ${dia} é inválido! Insira um valor de 1 a 7`;
    }
}
console.log(diaDaSemana(1));

//Questão 2 - Converta um numero de mes em seu nome correspondente.

function numeroDoMes (numero) {
    switch (numero) {
        case 1:
            return "Janeiro";
        case 2:
            return "Fevereiro";
        case 3:
            return "Março";
        case 4:
            return "Abril";
        case 5:
            return "Maio";
        case 6:
            return "Junho";
        case 7:
            return "Julho";
        case 8:
            return "Agosto";
        case 9:
            return "Setembro";
        case 10:
            return "Outubro";
        case 11:
            return "Novembro";
        case 12:
            return "Dezembro";
        default:
            return `O número ${numero} é inválido! Insira um valor de 1 a 12`;
    }
}
console.log(numeroDoMes(2));

//Questão 3 - Exiba uma mensagem de acordo com o estado civil: "Solteiro", "Casado", "Divorciado" ou "Outro".

function estadoCivil (opcao) {
    switch (opcao) {
        case "Solteiro":
            console.log("Estado civil: Solteiro");
            break;
        case "Casado":
            console.log("Estado civil: Casado");
            break;
        case "Divorciado":
            console.log("Estado civil: Divorciado");
            break;
        case "Outro":
            console.log("Estado civil: Outro");
            break;
        default:
            console.log("Estado civil inválido!");
            break;
    }  
}
estadoCivil("Solteiro");

//Questão 4 - Exiba uma mensagem dependendo do tipo do animal: Cachorro, Gato, Passaro ou Outro.

function animalTipo (animal) {
    switch (animal) {
        case "Cachorro":
            console.log("O animal é um Cachorro");
            break;
        case "Gato":
            console.log("O animal é um Gato");
            break;
        case "Passaro":
            console.log("O animal é um Pássaro");
            break;
        default:
            console.log("Animal inválido!");
            break;
    }
} 
animalTipo("Cachorro");

//Questão 5 - Calcule o valor de uma operação matematica com base em um operador: soma, subtração, multriplicação ou divisão.

function operacaoMatematica (operacao) {
    switch (operacao) {
        case "Soma":
            console.log("10 + 5 = " + 10 + 5);
            break;
        case "Subtração":
            console.log("10 - 5 = " + 10 - 5);
            break;
        case "Multiplicação":
            console.log("10 * 5 = " + 10 * 5);
            break;
        case "Divisão":
            console.log("10 / 5 = " + 10 / 5);
            break;
        default:
            console.log("Operação inválida!");
            break;
    }
}
operacaoMatematica("Multiplicação");