// 1° Uma exemplo de inteface com duas classes extends dela.
interface Veiculo {
  modelo: string;
  tipo: string;
  acelerar(velocidade: number): void;
}

class Carro implements Veiculo {
  modelo: string;
  tipo: string;
  ano: number;

  constructor(modelo: string, ano: number) {
    this.modelo = modelo;
    this.tipo = "Carro";
    this.ano = ano;
  }

  acelerar(velocidade: number): void {
    console.log(
      `modelo:${this.modelo} Ano:${this.ano} (Tipo:${this.tipo}) está acelerando a ${velocidade} km/h.`
    );
  }
}

class Moto implements Veiculo {
  modelo: string;
  tipo: string;
  ano: number;

  constructor(modelo: string, ano: number) {
    this.modelo = modelo;
    this.tipo = "Moto";
    this.ano = ano;
  }

  acelerar(velocidade: number): void {
    console.log(
      `modelo:${this.modelo} ano:${this.ano} (Tipo:${this.tipo}) está acelerando a ${velocidade} km/h.`
    );
  }
}

const meuCarro = new Carro("BMW M3 GTR", 2003);
meuCarro.acelerar(210);

const minhaMoto = new Moto("Suzuki Hayabusa GSX-1300R", 1999);
minhaMoto.acelerar(232);

//2°

interface VeiculoEletrico extends Veiculo {
  carregarBateria(): void;
}

class PatineteEletrico implements VeiculoEletrico {
  modelo: string;
  tipo: string;

  constructor(nome: string) {
    this.modelo = nome;
    this.tipo = "Patinete Elétrico";
  }

  acelerar(velocidade: number): void {
    console.log(
      `modelo:${this.modelo} (Tipo:${this.tipo}) está acelerando a ${velocidade} km/h`
    );
  }

  carregarBateria(): void {
    console.log(
      `modelo:${this.modelo} (${this.tipo}) está carregando a bateria.`
    );
  }
}

const meuPatineteEletrico = new PatineteEletrico("Foston S09 PRO");

meuPatineteEletrico.acelerar(30);
meuPatineteEletrico.carregarBateria();
