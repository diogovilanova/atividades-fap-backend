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

// //3° Crie uma classe Retangulo com os atributos largura e altura e métodos para calcular a área e o perímetro.

// class Retangulo { 
//   public largura: number;
//   public altura: number;

//   constructor(largura:number, altura: number) {
//     this.largura = largura;
//     this.altura = altura;
//   }

//   calcularArea() {
//     return this.largura * this.altura;
//   }

//   calcularPerimetro() {
//     return 2 * (this.largura + this.altura);
//   }

//   pegarAltura() {
//     return this.altura;
//   }
//   pegarLargura() {
//     return this.largura;
//   }
// }

// const retangulo = new Retangulo(30, 50);
// console.log(`A área de um retangulo com largura ${retangulo.pegarLargura()} e altura ${retangulo.pegarAltura()} é: ${retangulo.calcularArea()}`);
// console.log(`O perímetro de um retangulo com largura ${retangulo.pegarLargura()} e altura ${retangulo.pegarAltura()} é: ${retangulo.calcularPerimetro()}`);

// //4° Crie uma classe Círculo com o atributo raio e métodos para calcular a área e a circunferência.

// class Circulo {
//   public raio: number;

//   constructor(raio: number) {
//     this.raio = raio;
//   }

//   calcularArea(): number {
//     return Math.PI * Math.pow(this.raio, 2);
//   }

//   calcularCircunferencia(): number {
//     return 2 * Math.PI * this.raio;
//   }

//   pegarRaio(): number {
//     return this.raio;
//   }
// }

// const circulo = new Circulo(5);
// console.log(`A área do circulo com o raio ${circulo.pegarRaio()} é: ${circulo.calcularArea()}`);
// console.log(`A circunferencia do circulo com o raio ${circulo.pegarRaio()} é: ${circulo.calcularCircunferencia()}`);

// //5° Crie uma classe ContaBancaria com os atributos saldo e numeroConta e métodos para depositar, sacar e verificar o saldo.

// class ContaBancaria {
//   private saldo: number;
//   public numeroConta: string;

//   constructor(saldo: number, numeroConta: string) {
//     this.saldo = saldo;
//     this.numeroConta = numeroConta;
//   }

//   depositar(valor: number): void {
//     this.saldo += valor;
//     console.log(`R$${valor} foi depositado com sucesso!`);
//   }

//   sacar(valor: number): void {
//     if(valor <= this.saldo) {
//       this.saldo -= valor;
//       console.log(`R$${valor} foi sacado com sucesso!`);
//     } else {
//       console.log("Saldo insuficiente!");
//     }
//   } 

//   verificarSaldo(): number {
//     return this.saldo;
//   }
// }

// const conta = new ContaBancaria(200, "123-1");
// console.log(`Seu saldo é de R$${conta.verificarSaldo()}`);
// conta.depositar(30);
// conta.sacar(50);
// console.log(`Saldo atual é de R$${conta.verificarSaldo()}`);

// //6° Crie uma classe Produto com os atributos nome, preco e quantidade e métodos para calcular o valor total (preço * quantidade).
// class Produto {
//   public nome: string;
//   public preco: number;
//   public quantidade: number;

//   constructor(nome: string, preco: number, quantidade: number) {
//     this.nome = nome;
//     this.preco = preco;
//     this.quantidade = quantidade;
//   }

//   calcularValorTotal(): number {
//     return this.preco * this.quantidade;
//   }

//   pegarNome() {
//     return this.nome;
//   }

//   pegarPreco() {
//     return this.preco;
//   }

//   pegarQuantidade() {
//     return this.quantidade;
//   }
// }

// const produto = new Produto("Pneu Aro 14", 400, 4);
// console.log(`Produto: ${produto.pegarNome()}`);
// console.log(`Preço: R$${produto.pegarPreco()}`);
// console.log(`Quantidade: ${produto.pegarQuantidade()} Und`);
// console.log(`Valor total: R$${produto.calcularValorTotal()}`);


// // 7°	Crie uma classe Triangulo com os atributos lado1, lado2 e lado3 e um método para verificar se é um triângulo válido.

// class Triangulo{
//   public lado1: number;
//   public lado2: number;
//   public lado3: number;

//   constructor(lado1: number, lado2: number, lado3: number){
//     this.lado1 = lado1;
//     this.lado2 = lado2;
//     this.lado3 = lado3;
//   }

//   verificarTriangulo(): boolean {
//     if (
//       this.lado1 + this.lado2 > this.lado3 &&
//       this.lado1 + this.lado3 > this.lado2 &&
//       this.lado2 + this.lado3 > this.lado1
//     ) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// const triangulo = new Triangulo(10, 10, 30);
// if(triangulo.verificarTriangulo()) {
//   console.log(`É um triângulo!`);
// } else {
//   console.log(`Não é um triângulo!`); 
// }

// // 8°	Crie uma classe Livro com os atributos titulo, autor e anoPublicacao e um método para exibir informações do livro.

// class Livro {
//   public titulo: string;
//   public autor: string;
//   public anoPublicacao: number;

//   constructor(titulo: string, autor: string, anoPublicacao: number) {
//     this.titulo = titulo;
//     this.autor = autor;
//     this.anoPublicacao = anoPublicacao;
//   }

//   exibirInfoLivro() {
//     console.log(`
//     --- Informações do Livro ---
//     Título: ${this.titulo}.
//     Autor: ${this.autor}.
//     Ano de Publicação: ${this.anoPublicacao}.
//     `);
//   }
// }

// const livro = new Livro("Harry Potter e o cálice de fogo", "J.K. Rowling", 2000)
// livro.exibirInfoLivro();
// // 9°	Crie uma classe Agenda que permite adicionar, listar e remover contatos (nomes e números de telefone).

// class Contato {
//   public nome: string;
//   public numeroTelefone: string;

//   constructor(nome: string, numeroTelefone: string) {
//     this.nome = nome;
//     this.numeroTelefone = numeroTelefone;    
//   }
// }

// class Agenda {
//   public contatos: Contato[] = [];
  
//   adicionar(nome: string, numeroTelefone: string): void {
//     const novoContato = new Contato(nome, numeroTelefone)
//     this.contatos.push(novoContato);
//   }

//   listar(): void {
//     if(this.contatos.length === 0) {
//       console.log("A agenda está vazia.");      
//     } else {
//       console.log("Contatos na agenda: ");
//       this.contatos.forEach((contato, index) => {
//         console.log(`${index + 1}. Nome: ${contato.nome}, Telefone: ${contato.numeroTelefone}`);
        
//       });
//     }
//   }

//   remover(nome: string): void {
//     const indice = this.contatos.findIndex((contato) => contato.nome === nome);
//     if (indice !== -1) {
//       this.contatos.splice(indice, 1);
//       console.log(`Contato ${nome} removido com sucesso.`);      
//     } else {
//       console.log(`Contato ${nome} não encontrado na agenda.`);
//     }
//   }
// }

// const agenda = new Agenda();

// agenda.adicionar("Diogo", "81 98365....");
// agenda.adicionar("Polly", "81 98416....")
// agenda.listar();
// agenda.remover("Diogo");
// agenda.listar();


// // 10°	Crie uma classe CarroEsportivo que herda da classe Carro (usada no exemplo anterior) e tenha métodos adicionais para acelerar rapidamente e produzir um som esportivo.

// class Carro {
//   // Atributos
//   marca: string;
//   modelo: string;
//   ano: number;
//   // Método construtor
//   constructor(marca: string, modelo: string, ano: number) {
//     this.marca = marca;
//     this.modelo = modelo;
//     this.ano = ano;
//   }
//   // Método
//   acelerar(): void {
//     console.log("Acelerando o carro...");
//   }
// }
// const meuCarro = new Carro("Toyota", "Corolla", 2022);
// console.log(`Meu carro é um ${meuCarro.marca} ${meuCarro.modelo} 
// fabricado em ${meuCarro.ano}.`);
// meuCarro.acelerar(); // Chamando o método acelerar

// class CarroEsportivo extends Carro {
  
//   constructor(marca: string, modelo: string, ano: number) {
//     super(marca, modelo, ano);
//   }
  
//   acelerarRapidamente(): void {
//     console.log("Acelerando o carro esportivo rapidamente!");
//   }

//   produzirSomEsportivo(): void {
//     console.log("Produzindo um som esportivo!");
//   }
// }

// const meuCarroEsportivo = new CarroEsportivo("BMW", "M3", 1998);
// console.log(`Meu carro esportivo é uma ${meuCarroEsportivo.marca} ${meuCarroEsportivo.modelo} 
// fabricado em ${meuCarroEsportivo.ano}.`);

// meuCarroEsportivo.acelerarRapidamente();
// meuCarroEsportivo.produzirSomEsportivo();

// //1° Desafio

// class Invoice {
//   public numItemFaturado: number;
//   public descricaoItem: string;
//   public quantidadeComprada: number;
//   public precoUnidade: number;

//   constructor(numItemFaturado: number, descricaoItem: string, quantidadeComprada: number, precoUnidade: number) {
//     this.numItemFaturado = numItemFaturado;
//     this.descricaoItem = descricaoItem;
//     this.quantidadeComprada = quantidadeComprada > 0 ? quantidadeComprada : 0;
//     this.precoUnidade = precoUnidade > 0 ? precoUnidade : 0.0;
//   }

//   get numItem(): number {
//     return this.numItemFaturado;
//   }
//   set numItem(numItem: number) {
//     this.numItemFaturado = numItem;
//   }

//   get descItem(): string {
//     return this.descricaoItem;
//   }
//   set descItem(descItem: string) {
//     this.descricaoItem = descItem;
//   }

//   get qntComprada(): number {
//     return this.quantidadeComprada;
//   }
//   set qntComprada(qntComprada: number) {
//     this.quantidadeComprada = qntComprada > 0 ? qntComprada : 0;
//   }

//   get precoUnd(): number {
//     return this.precoUnidade;
//   }
//   set precoUnd(precoUnd: number) {
//     this.precoUnidade = precoUnd > 0 ? precoUnd : 0.0
//   }

//   getInvoiceAmount() {
//     return this.quantidadeComprada * this.precoUnidade;
//   }
// }

// const invoice = new Invoice(1, "Teclado HyperX", 10, 179.90);

// console.log(`
// --- Produtos ---
// Número do Item: ${invoice.numItem}.
// Descrição do Item: ${invoice.descItem}.
// Quantidade Comprada: ${invoice.qntComprada}.
// Preço Unitário: ${invoice.precoUnd}.
// Valor da Fatura: ${invoice.getInvoiceAmount()}.
// `);

//2° Desafio

class Empregado {
  public primeiroNome: string;
  public sobrenome: string;
  public salarioMensal: number;

  constructor(primeiroNome: string, sobrenome: string, salarioMensal: number) {
    this.primeiroNome = primeiroNome;
    this.sobrenome = sobrenome;
    this.salarioMensal = salarioMensal > 0 ? salarioMensal : 0.0;
  }

  get nome(): string {
    return this.primeiroNome;
  }
  set nome(nome: string) {
    this.primeiroNome = nome;
  }

  get sobreNome(): string {
    return this.sobrenome;
  }
  set sobreNome(sobreNome: string) {
    this.sobrenome = sobreNome;
  }

  get salMensal(): number {
    return this.salarioMensal;
  }
  set salMensal(salMensal: number) {
    this.salarioMensal = salMensal > 0 ? salMensal : 0;
  }

  get salAnual(): number {
    return this.salarioMensal * 12;
  }
  
  salAumento(salPercentual: number) {
    this.salarioMensal += (this.salarioMensal * salPercentual) /100;
  }
}

const empregado1 = new Empregado("Diogo", "Vila Nova", 5000);
const empregado2 = new Empregado("Pollyanna", "Almeida", 7000);

console.log(`
--- Lista de Empregados ---
Salário anual do empregado 1: R$${empregado1.salAnual}.
Salário anual do empregado 2: R$${empregado2.salAnual}.`);

empregado1.salAumento(15);
empregado2.salAumento(15);

console.log(`
\nApós o aumento de 15%
Novo salário do empregado 1: R$${empregado1.salAnual}.
Novo salário do empregado 2: R$${empregado2.salAnual}.`);
