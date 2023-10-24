class Smartphone {
  constructor(public marca: string, public modelo: string) {}

  fazerChamada(numero: string): void {
    console.log(`Realizando uma chamada para ${numero}`);
  }

  enviarMensagem(numero: string, mensagem: string): void {
    console.log(`Enviando mensagem para ${numero}: ${mensagem}`);
  }
}

class SmartphoneComCamera extends Smartphone {
  constructor(marca: string, modelo: string, public megapixels: number) {
    super(marca, modelo);
  }

  tirarFoto(): void {
    console.log(`Tirando uma foto com ${this.megapixels} megapixels`);
  }
}

class SmartphoneMain {
  constructor() {
    const smartphone = new Smartphone("Xiaomi", "Poco X3 Pro");
    const smartphoneComCamera = new SmartphoneComCamera(
      "Apple",
      "iPhone 12",
      12
    );

    smartphone.fazerChamada("081-912-3456");
    smartphoneComCamera.tirarFoto();
  }
}

const main = new SmartphoneMain();
