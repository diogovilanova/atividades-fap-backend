
// 5. Classe ContaBancaria
class ContaBancaria {
    constructor(public saldo: number, public numeroConta: string) {}

    depositar(valor: number): void {
        this.saldo += valor;
    }

    sacar(valor: number): void {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente.");
        }
    }

    verificarSaldo(): number {
        return this.saldo;
    }
}
