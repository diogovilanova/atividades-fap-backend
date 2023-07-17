## Levando em consideração os aprendizados sobre as estruturas condicionais, elabore um algoritmo que possa descobrir, através de perguntas e respostas, qual é o meio de transporte que o usuário está considerando. O usuário deverá escolher uma das seguintes opções:

- trator; 
- moto; 
- bicicleta. 

Para chegar ao resultado, as perguntas precisam ser respondidas apenas com "Sim" ou "Não".

Exemplo:
É terrestre? Sim.
Cabe apenas uma pessoa? Sim.
É pesado? Não.
Tem pedal? Sim.
Então, o transporte escolhido foi a bicicleta.



# Resposta:

    Escreva "Qual é seu Meio de transporte?"

    Declare terrestre, pessoaQnt, pesado, pedal, capacete como string

    terrestre <- fazerPergunta("É terrestre? Sim ou Não.")
    Se terrestre = "sim" então
        pessoaQnt <- fazerPergunta("Cabe apenas uma pessoa? Sim ou Não.")
        Se pessoaQnt = "sim" então
            pesado <- fazerPergunta("É pesado? Sim ou Não.")
            Se pesado = "sim" então
                Escreva "Você utiliza TRATOR como meio de transporte!"
            Senão se pesado = "não" então
                pedal <- fazerPergunta("Tem pedal? Sim ou Não.")
                Se pedal = "sim" então
                    Escreva "Você utiliza BICICLETA como meio de transporte!"
                Senão
                    Escreva "Seu meio de transporte não está listado"
                FimSe
            FimSe
        Senão
            capacete <- fazerPergunta("Usa capacete? Sim ou Não.")
            Se capacete = "sim" então
                Escreva "Você utiliza MOTO como meio de transporte!"
            Senão
                Escreva "Seu meio de transporte não está listado"
            FimSe
        FimSe
    Senão
        Escreva "Seu meio de transporte não está listado"
    FimSe

    FimAlgoritmo