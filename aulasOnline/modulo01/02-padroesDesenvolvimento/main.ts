abstract class Veiculo {
  constructor(
      public modelo: string,
      public marca: string,
      public cor: string,
      public numeroRodas: number
  ) {}

  abstract clone(): Veiculo;
  abstract represent(): string;
}

class Carro extends Veiculo {
  constructor(
      public modelo: string,
      public marca: string,
      public cor: string,
      public numeroRodas: number,
      public numeroPortas: number
  ) {
      super(modelo, marca, cor, numeroRodas);
  }

  clone(): Veiculo {
      return new Carro(this.modelo, this.marca, this.cor, this.numeroRodas, this.numeroPortas);
  }

  represent(): string {
      return `Carro: Modelo - ${this.modelo}, Marca - ${this.marca}, Cor - ${this.cor}, Rodas - ${this.numeroRodas}, Portas - ${this.numeroPortas}`;
  }
}

class Moto extends Veiculo {
  constructor(
      modelo: string,
      marca: string,
      cor: string,
      numeroRodas: number,
      public cilindradas: number
  ) {
      super(modelo, marca, cor, numeroRodas);
  }

  clone(): Veiculo {
      return new Moto(this.modelo, this.marca, this.cor, this.numeroRodas, this.cilindradas);
  }

  represent(): string {
      return `Moto: Modelo - ${this.modelo}, Marca - ${this.marca}, Cor - ${this.cor}, Rodas - ${this.numeroRodas}, Cilindradas - ${this.cilindradas}`;
  }
}

class Aplicacao {
  criarVeiculos(): Veiculo[] {
      const veiculos: Veiculo[] = [];

      const carro1 = new Carro("Sedan", "Toyota", "Prata", 4, 4);
      const carro2 = new Carro("SUV", "Honda", "Preto", 4, 5);
      const moto1 = new Moto("Sport", "Yamaha", "Azul", 2, 600);
      const moto2 = new Moto("Cruiser", "Harley-Davidson", "Vermelho", 2, 1200);

      veiculos.push(carro1, carro2, moto1, moto2);

      return veiculos;
  }

  clonarVeiculos(veiculos: Veiculo[]): Veiculo[] {
      const clones: Veiculo[] = [];

      for (const veiculo of veiculos) {
          clones.push(veiculo.clone());
      }

      return clones;
  }

  imprimirVeiculos(veiculos: Veiculo[]): void {
      for (const veiculo of veiculos) {
          console.log(veiculo.represent());
      }
  }
}

const app = new Aplicacao();
const veiculosOriginais = app.criarVeiculos();
const veiculosClonados = app.clonarVeiculos(veiculosOriginais);

console.log("Veículos Originais:");
app.imprimirVeiculos(veiculosOriginais);

console.log("\nVeículos Clonados:");
app.imprimirVeiculos(veiculosClonados);
