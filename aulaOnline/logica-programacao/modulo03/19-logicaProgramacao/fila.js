/*
Estrutura de dados Fila (Primeiro a entrar é o primeiro a sair).
Logo a sequencia ficaria assim:
[3, 7, 9, 0];
remove o elemento 3 (primeiro a entrar e primeiro a sair).
seguindo, sucessivamente, até o elemento 0 (último elemento a entrar e último a sair).
*/
const fila = [3, 7, 9, 0];

function desenfileirar() {
  while (fila.length > 0) {
    console.log(fila);
    fila.shift();
  }
}
desenfileirar();