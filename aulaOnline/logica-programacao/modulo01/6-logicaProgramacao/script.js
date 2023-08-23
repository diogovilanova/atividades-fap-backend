/*
função para fazer pergunta e vai obter resposta, alem de estringir a resposta,
caso seja divergente vai pedi uma resposta válida.
*/
function fazerPergunta(questao) {
    let resposta = prompt(questao);
    resposta = resposta.toLowerCase(); //converter resposta para minuscula, para ser estrito
    if (resposta === "sim" || resposta === "não") {
        return resposta;
    } else {
        alert("Resposta inválida, responda com 'Sim' ou 'Não'!");
        return fazerPergunta(questao);
    }
}

alert("Qual é seu Meio de transporte?")

let terrestre = fazerPergunta("É terrestre? Sim ou Não.");
    if(terrestre === "sim") {
        let pessoaQnt = fazerPergunta("Cabe apenas uma pessoa? Sim ou Não.");
        if(pessoaQnt === "sim") {
            let pesado = fazerPergunta("É pesado? Sim ou Não.");
            if(pesado === "sim") {
                alert("Você utiliza TRATOR como meio de transporte!");
            } else if (pesado === "não"){ 
                let pedal = fazerPergunta("Tem pedal? Sim ou Não.");
                if(pedal === "sim") {
                    alert("Voce utiliza BICICLETA como meio de transporte!");
                } else {
                    alert("Seu meio de transporte não está listado");
                }              
            }
        } else{
            let capacete = fazerPergunta("Usa capacete? Sim ou Não.");
            if(capacete === "sim") {
                alert("Você utiliza MOTO como meio de transporte!");
            } else {
                alert("Seu meio de transporte não está listado");
            }
        }

        } else {
        alert("Seu meio de transporte não está listado");
    }