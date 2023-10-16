interface Computador {
  pegarRAM(): string;
  pegarHDD(): string;
  pegarCPU(): string;
  pegarType(): string;
  toString(): string;
}

class Desktop implements Computador {
  constructor(private ram: string, private hdd: string, private cpu: string) {}

  pegarRAM() {
      return this.ram;
  }

  pegarHDD() {
      return this.hdd;
  }

  pegarCPU() {
      return this.cpu;
  }

  pegarType() {
      return "Desktop";
  }

  toString() {
      return `Desktop - RAM: ${this.ram} GB, HDD: ${this.hdd} GB, CPU: ${this.cpu} GHz`;
  }
}

class Servidor implements Computador {
  constructor(private ram: string, private hdd: string, private cpu: string) {}

  pegarRAM() {
      return this.ram;
  }

  pegarHDD() {
      return this.hdd;
  }

  pegarCPU() {
      return this.cpu; 
  }

  pegarType() {
      return "Servidor";
  }

  toString() {
      return `Servidor - RAM: ${this.ram} GB, HDD: ${this.hdd} GB, CPU: ${this.cpu} GHz`;
  }
}

class ComputadorFabricado {
  criarComputador(type: "Desktop" | "Servidor", ram: string, hdd: string, cpu: string): Computador {
    if (type === "Desktop") {
      return new Desktop(ram, hdd, cpu);
    } else if (type === "Servidor") {
      return new Servidor(ram, hdd, cpu);
    } else {
      throw new Error("Não existe esse tipo de computador!");
    }
  }
}

const fabricando = new ComputadorFabricado();
const meuDesktop = fabricando.criarComputador("Desktop", "16", "500", "i7 - 4.80");
const meuServidor = fabricando.criarComputador("Servidor", "32", "1000", "Xeon Gold - 3.60");

console.log(meuDesktop.toString());
console.log(meuServidor.toString());

