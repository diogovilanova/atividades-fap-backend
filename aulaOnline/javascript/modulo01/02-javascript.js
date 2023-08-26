const readLine = require('readline-sync');

const nome = String(readLine.question("Digite o seu nome: ")); //nome é do tipo String
const salario = parseFloat(readLine.question("Digite o seu salário: ")); //salário é do tipo Number(Float)
const idade = parseInt(readLine.question("Digite a sua idade: ")); //idade é do tipo Number(Int)
const possuiDiploma = Boolean(readLine.question("Possui diploma? true ou false: ")); //possuiDiploma é do tipo boolean

console.log("---> Dados do Cadastro <---");
console.log(`
Nome: ${nome}.
Salário: ${salario}.
Idade: ${idade}.
Possui Diploma: ${possuiDiploma}.
`);