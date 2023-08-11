/*
Estrutura de dados Lista (Inserção e remoção em qualquer posição).
Logo a sequencia, com base exemplo do codigo abaixo, ficaria assim:
[3, 7, 9, 0];
remove o elemento 7 (posição 1).
seguindo, sucessivamente ate o elemento 0 (último elemento a entrar e último a sair).
*/
const lista = [3, 7, 9, 0];

function remover() {
  while (lista.length > 0) {
    let indiceRemover = lista[1];
    let indice = lista.indexOf(indiceRemover);
    console.log(lista);
      lista.splice(indice, 1);
  }
  console.log(lista);
}
remover();