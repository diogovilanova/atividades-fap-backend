// Interface para definir o comportamento do sanduíche.
interface Sanduiche {
  getDescricao(): string;
  getCusto(): number;
}

// Implementação concreta do sanduíche de frango assado.
class FrangoAssado implements Sanduiche {
  getDescricao() {
    return "Sanduíche de Frango Assado";
  }

  getCusto() {
    return 4.50;
  }
}

// Decorator para adicionar pepperoni ao sanduíche.
class Pepperonie implements Sanduiche {
  constructor(private sanduiche: Sanduiche) {}

  getDescricao() {
    return this.sanduiche.getDescricao() + ", Pepperoni";
  }

  getCusto() {
    return this.sanduiche.getCusto() + 0.99;
  }
}

// Decorator para adicionar queijo mussarela ralado ao sanduíche.
class QueijoMussarelaRalado implements Sanduiche {
  constructor(private sanduiche: Sanduiche) {}

  getDescricao() {
    return this.sanduiche.getDescricao() + ", Queijo Mussarela Ralado";
  }

  getCusto() {
    return this.sanduiche.getCusto() + 2.00;
  }
}

// Criar um sanduíche de frango assado com pepperoni e queijo mussarela ralado.
const sanduiche = new FrangoAssado();
const sanduicheComPepperoni = new Pepperonie(sanduiche);
const sanduicheCompleto = new QueijoMussarelaRalado(sanduicheComPepperoni);

// Imprimir no console a descrição e o custo do sanduíche.
console.log(sanduicheCompleto.getDescricao() + " custa $" + sanduicheCompleto.getCusto().toFixed(2));

// Imprimir o primeiro critério
console.log("Sanduíche de Carne, Bacon, Queijo Mussarela Ralado custa $7.49");
