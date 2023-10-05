// //1° Crie uma classe Pessoa com os atributos nome, idade e email.

// class Pessoa{
//     nome: String;
//     idade: Number;
//     email: String;

//     constructor(nome: String, idade: Number, email: String) {
//         this.nome = nome;
//         this.idade = idade;
//         this.email = email;
//     }
// };

// //2° Crie uma classe Aluno que herda da classe Pessoa e tenha um atributo adicional matricula.

// class Aluno extends Pessoa{
//     matricula: String;

//     constructor(public nome: String, idade: Number, email: String, matricula: String){
//         super(nome, idade, email);
//         this.matricula = matricula;
//     }
// };

// const meusDados = new Aluno("Diogo", 29, "diogo.vila27@gmail.com", "01126460");

// console.log(`Meu nome é ${meusDados.nome} tenho ${meusDados.idade} anos, meu email é: ${meusDados.email} e matricula: ${meusDados.matricula}`);

//3° Crie uma classe Retangulo com os atributos largura e altura e métodos para calcular a área e o perímetro.

// class Retangulo {
//     constructor(public largura: Number, public altura: Number) {}

//     calcularArea(): Number {
//         return this.largura * this.altura;
//     }

//     calcularPerimetro(): Number {
//         return 2 * (this.largura + this.altura);
//     }
// }

// const dados = new Retangulo(10, 10);
// console.log(dados);


// //4° Crie uma classe Círculo com o atributo raio e métodos para calcular a área e a circunferência.

// class Circulo{
//     constructor(public raio: Number) {}

//     calcularArea(): Number {
//         return Math.PI * Math.pow(this.raio, 2);
//     }

//     calcularCircunferencia(): Number {
//         return 2 * Math.PI * this.raio;
//     }
// }

// //5° Crie uma classe ContaBancaria com os atributos saldo e numeroConta e métodos para depositar, sacar e verificar o saldo.

// class ContaBancaria{
//     constructor(public saldo: Number, public numeroConta: Number) {}

//     depositar(valor: Number): void {
//         this.saldo += valor;
//     };

//     sacar(valor: Number): void {
//         if(valor <= this.saldo) {
//             this.saldo -= valor;
//         } else {
//             console.log("Saldo insuficiente.");
//         }
//     }

//     verificarSaldo(): Number {
//         return this.saldo;
//     }
// }