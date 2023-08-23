const nomePessoas = ["Diogo", "Pollyanna", "Suelene", "Ladijane", "José Edson", "Antonieta", "Matheus", "Fulano", "Sicrano", "Beltrano"];
const idadePessoas = [29, 28, 58, 59, 70, 88, 26, 40, 30, 20];
const corFavorita = ["azul", "rosa", "vermelho", "amarelo", "marrom", "branca", "verde", "preta", "cinza", "lilás"];

console.log(`
===> Listas <===
Nomes: ${nomePessoas}
Idades: ${idadePessoas}
Cores favoritas: ${corFavorita}
`);

corFavorita.splice(5, 2, "ciano", "rubro");
idadePessoas.splice(3, 1, 58);

console.log(`
===> Listas Modificadas <===
Nomes: ${nomePessoas}
Idades:${idadePessoas}
Cores favoritas: ${corFavorita} 
`);
