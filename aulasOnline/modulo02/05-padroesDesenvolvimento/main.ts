import * as readline from "readline-sync";

// Definindo a interface Strategy
interface Strategy {
  execute(a: number, b: number): number;
}

// Implementando classes concretas para as operações
class SomaStrategy implements Strategy {
  execute(a: number, b: number): number {
    return a + b;
  }
}

class SubtracaoStrategy implements Strategy {
  execute(a: number, b: number): number {
    return a - b;
  }
}

class MultiplicacaoStrategy implements Strategy {
  execute(a: number, b: number): number {
    return a * b;
  }
}

// Classe que irá executar a calculadora
class Calculadora {
  private strategy: Strategy;

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  calcular(a: number, b: number): number {
    if (this.strategy) {
      return this.strategy.execute(a, b);
    } else {
      throw new Error("Estratégia não definida");
    }
  }
}

// Função para ler a operação do usuário
function lerOperacao(): Strategy {
  const operacao = prompt(
    "Digite a operação (soma, subtracao, multiplicacao):"
  );

  switch (operacao) {
    case "soma":
      return new SomaStrategy();
    case "subtracao":
      return new SubtracaoStrategy();
    case "multiplicacao":
      return new MultiplicacaoStrategy();
    default:
      throw new Error("Operação inválida");
  }
}

// Função principal
function main() {
  const calculadora = new Calculadora();
  const valor1 = readline.questionInt("Digite o primeiro valor: ");
  const valor2 = readline.questionInt("Digite o segundo valor: ");
  const operacao = lerOperacao();
  calculadora.setStrategy(operacao);
  const resultado = calculadora.calcular(valor1, valor2);
  console.log(`Resultado: ${resultado}`);
}

main();
