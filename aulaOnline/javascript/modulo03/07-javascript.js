const readLine = require('readline-sync');

const banco = {
  conta: "27092021",
  saldo: 2000,
  tipoConta: "poupança",
  agencia: "123",
  buscarSaldo: function() {
    return this.saldo;
  },
  deposito: function(valor) {
    this.saldo += valor = parseFloat(readLine.question("Digite o valor de deposito: "));
    return "Valor depósitado com sucesso! Saldo atual: R$" + this.saldo;
  },
  saque: function(valor) {
    valor = parseFloat(readLine.question("Digite o valor de saque: "));
    if (valor <= this.saldo) {
      this.saldo -= valor;
      return "Sacado com sucesso! Saldo atual: R$" + this.saldo;
    } else {
      return "Saldo insuficiente!";
    }
  },
  numeroConta: function() {
    return this.conta;
  }
};

console.log("Saldo atual: " + banco.buscarSaldo());
console.log(banco.deposito());
console.log(banco.saque());
console.log("Número da conta: " + banco.numeroConta());
