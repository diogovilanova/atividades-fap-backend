const readLine = require('readline-sync');

const qntRodas = parseInt(readLine.question("Digite a quantidade de rodas: "));
const pesoBruto = parseFloat(readLine.question("Digite o peso bruto (kg): "));
const qntPessoas = parseInt(readLine.question("Digite a quantidade de pessoas: "));
categoriaHabilitacao();

//poderia utilizar switch case no lugar do if else
function categoriaHabilitacao () {
    if (qntRodas == 2 || qntRodas == 3){
        console.log("Melhor categoria de habilitação é A.");
    } else if (qntRodas == 4 && qntPessoas <= 8 && pesoBruto <= 3500){
        console.log("Melhor categoria de habilitação é B.");
    } else if (qntRodas >= 4 && (pesoBruto > 3500 && pesoBruto <= 6000)){
        console.log("Melhor categoria de habilitação é C.");
    } else if (qntRodas >=4 && qntPessoas > 8){
        console.log("Melhor categoria de habilitação é D.");
    } else if (qntRodas >= 4 && pesoBruto > 6000) {
        console.log("Melhor categoria de habilitação é E.")
    } else {
        console.log("Categoria não enquadrada.");
    }
}