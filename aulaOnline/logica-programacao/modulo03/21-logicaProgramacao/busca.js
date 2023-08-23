/*Para solucionar essa questão, já que o array não está ordenado, onde o valor alvo a busca binária seria mais eficiente, 
porém devemos ordenar a lista primeiro e depois realizar a busca binária.*/

function buscaBinaria(lista, alvo) {
  let esquerda = 0;
  let direita = lista.length - 1;
  
  while (esquerda <= direita) {
    const meio = Math.floor((esquerda + direita) / 2);

    if (lista[meio] === alvo) {
      return meio;
    } else if (lista[meio] < alvo) {
      esquerda = meio + 1;
    } else {
      direita = meio - 1;
    }
  }
  return -1;
}

const array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
array.sort((a, b) => a - b);

const valorAlvo = 20;

const indice = buscaBinaria(array, valorAlvo);

if (indice !== -1) {
  console.log(`O valor ${valorAlvo} foi encontrado no índice ${indice}`);
} else {
  console.log(`O valor ${valorAlvo} não foi encontrado no array`);
}