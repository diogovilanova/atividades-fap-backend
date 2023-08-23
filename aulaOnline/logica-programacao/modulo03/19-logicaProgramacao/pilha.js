/*
Estrutura de dados Pilha (Último a entrar é o primeiro a sair).
Logo a sequencia ficaria assim:
[3, 7, 9, 0];
remove o elemento 0 (último a entrar e primeiro a sair).
seguindo, sucessivamente, até o elemento 3 (primeiro elemento a entrar e último a sair).
*/

const pilha = [3, 7, 9, 0];

function desempilhar() {
  while (pilha.length > 0) {
    console.log(pilha);
    pilha.pop();
  }
}
desempilhar();