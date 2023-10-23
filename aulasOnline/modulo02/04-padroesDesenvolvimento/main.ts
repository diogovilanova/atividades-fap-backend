// Interface para Galinha
interface Galinha {
  cacarejar(): void;
  bicar(): void;
}

// Classe Pato
class Pato {
  grasnar() {
    console.log("O pato está grasnando.");
  }
  nadar() {
    console.log("O pato está nadando.");
  }
}

// Classe AdaptadorPato que permite que o Pato seja usado como Galinha
class AdaptadorPato implements Galinha {
  constructor(private pato: Pato) {}

  cacarejar() {
    this.pato.grasnar();
  }

  bicar() {
    this.pato.nadar();
  }
}

// Classe AdaptadorPatoDemo para demonstrar o uso do AdaptadorPato
class AdaptadorPatoDemo {
  static demonstrar(pato: Galinha) {
    pato.cacarejar();
    pato.bicar();
  }
}

// Criar um objeto Pato
const pato = new Pato();

// Criar um AdaptadorPato para o Pato
const adaptador = new AdaptadorPato(pato);

// Usar o Pato como se fosse uma Galinha usando o adaptador
AdaptadorPatoDemo.demonstrar(adaptador);
