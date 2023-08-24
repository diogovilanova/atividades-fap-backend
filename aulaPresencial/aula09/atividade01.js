// //---- Objeto ----
// //1°
// const pessoa = {};

// //2°
// pessoa.nome = "Diogo";

// //3°
// const usuario = {idade: 29};
// let idadeUsuario = usuario.idade;
// //---- OU ----
// let idadeUsuario = usuario["idade"];
// console.log(usuario.idade);

// //4°
// const produto = {preco: 50};
// produto.preco = 75;
// console.log(produto.preco);

// //5°
// const contato = {
//     email: "exemplo@email.com"
// };
// delete contato.email;
// console.log(contato);

// //6°
// const cliente = {
// };
// console.log(cliente.endereco = "Rua A, 123");

// //7°
// const empresa = {
//     departamentos: ["Vendas", "Administração"],
// }
// console.log(empresa.departamentos[0]);

// //8°
// const aluno = {
//     notas: [85, 90, 78]
// };
// aluno.notas[1] = 95;
// console.log(aluno.notas);

// //9°
// const dados = {
//     valores: [10, 20, 30]
// }
// dados.valores.splice(1, 1);
// console.log(dados.valores);

// //10°
// const livraria = {
// }
// livraria.titulo = "Livro";
// livraria.autor = "Maria";
// console.log(livraria);



// //---- Enumerates ----
// //1°
// const diasSemana = {
//     SEGUNDA: "segunda-feira",
//     TERCA: "terça-feira",
//     QUARTA: "quarta-feira",
//     QUINTA: "quinta-feira",
//     SEXTA: "sexta-feira",
//     SABADO: "sabado",
//     DOMINGO: "domingo"
// };
// const diaHoje = diasSemana.QUINTA;
// console.log(`Hoje é ${diaHoje}`);

// //2°
// const tipoInimigos = {
//     DIABRETE: "Diabrete",
//     ACROMANTULA: "Acromantula",
// }
// const inimigo1 = {
//     tipo: tipoInimigos.DIABRETE, 
//     vida: 100,
//     level: 10
// }
// const inimigo2 = {
//     tipo: tipoInimigos.ACROMANTULA,
//     vida: 500,
//     level: 20
// }
// console.log("--- Lista de Inimigos ---");
// console.log(inimigo1,\n,inimigo2);

// //3°
// const tiposClasses = {
//     ECONOMICA: "Econômica",
//     EXECUTIVA: "Executiva",
//     PRIMEIRACLASSE: "Primeira Classe"
// }
// const classe1 = {
//     cliente: "Diogo",
//     tipo_passagem: tiposClasses.PRIMEIRACLASSE
// }
// console.log(classe1);

// //4°
// const categoriasTarefas = {
//     TRABALHO: "Trabalho",
//     ESTUDO: "Estudo",
//     LAZER: "Lazer"
// };
// const categoria1 = {
//     nome: "Estudar NodeJS",
//     categoria: categoriasTarefas.ESTUDO
// };
// const categoria2 = {
//     nome: "Assistir filme na Netflix",
//     categoria: categoriasTarefas.LAZER
// };
// const categoria3 = {
//     nome: "Criar uma Landing Page para o cliente X",
//     categoria: categoriasTarefas.TRABALHO
// };
// console.log("---- Lista de Tarefas ----");
// console.log(categoria1,"\n",categoria2,"\n",categoria3);

// //5°
// const statusPedido = {
//     PROCESSAMENTO: "Em processamento",
//     ENVIADO: "Enviado",
//     ENTREGUE: "Entregue"
// }
// const status1 = {
//     numero_pedido: 1,
//     status_pedido: statusPedido.ENTREGUE,
// }
// const status2 = {
//     numero_pedido: 2,
//     status_pedido: statusPedido.ENVIADO
// }
// const status3 = {
//     numero_pedido: 3,
//     status_pedido: statusPedido.PROCESSAMENTO
// }
// console.log("---- Pedidos ----");
// console.log(status1,"\n",status2,"\n",status3);