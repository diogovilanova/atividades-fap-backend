import * as readlineSync from 'readline-sync';

class SistemaSeguranca {
  private static instancia: SistemaSeguranca | null = null;
  private senhaBaseSecreta: string = "softexBackEnd2023";

  private constructor() {}

  public static getInstance(): SistemaSeguranca {
    if (!SistemaSeguranca.instancia) {
      SistemaSeguranca.instancia = new SistemaSeguranca();
    }
    return SistemaSeguranca.instancia;
  }

  public acessarBaseSecreta(senha: string): void {
    if (senha === this.senhaBaseSecreta) {
      console.log("Acesso liberado. Bem-vindo, agente!");
    } else {
      console.log("Acesso negado. Senha incorreta, intruso detectado!");
    }
  }

  public obterSenhaDoUsuario(): string {
    return readlineSync.question("Digite a senha para acessar a base secreta: ");
  }
}

const sistemaSeguranca = SistemaSeguranca.getInstance();

const senhaUsuario = sistemaSeguranca.obterSenhaDoUsuario();
sistemaSeguranca.acessarBaseSecreta(senhaUsuario);

