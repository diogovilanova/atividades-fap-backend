const readLine = require('readline-sync');

const timeDaBomba = parseInt(readLine.question("Digite quantos segundos: "));
contagemRegressiva(timeDaBomba)

function contagemRegressiva(timeDaBomba) {
    console.log("Iniciando a contagem regressiva...");

    for (let i = timeDaBomba; i >= 0; i--) {
        console.log(`Time: ${i} segundos`);
        cooldown(1000); //cooldown de 1 segundo para imprimir o valor
    }
    console.log("BUM!")
}

//função para realizar um frame de 1 segundo no contagemRegressiva, utilizando arrow function para redução
function cooldown(milisegundos){
    return new Promise(resolve => setTimeout(resolve, milisegundos));
}

