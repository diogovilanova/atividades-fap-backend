const readLine = require('readline-sync');

let candidato_x = 0, candidato_y = 0, candidato_z = 0, branco = 0, nulo = 0;

//verificar se o valor é um número
function isNumber(value) {
  return !isNaN(parseFloat(value) && isFinite(value));
}

//votação
function votacao(candidato) {
  switch (candidato) {
    case 889:
      candidato_x++;
      break;
    case 847:
      candidato_y++;
      break;
    case 515:
      candidato_z++;
      break;
    case 0:
      branco++;
      break;
    default:
      nulo++;
  }
}

while (true) {
  let votoEntrada = readLine.question("Digite o número do candidato, 0 para branco ou 'fim' para finalizar a votação: ");

  if (votoEntrada === 'fim') {
    break;
  } 
  
  if (!isNumber(votoEntrada)) {
    console.log("Voto inválido, tente novamente!");
    continue;
  }

  votoEntrada = parseInt(votoEntrada);
  votacao(votoEntrada);
}

let candidatoVencedor = "";
let maisVotos = 0;

if (candidato_x > maisVotos) {
  candidatoVencedor = "candidato_x";
  maisVotos = candidato_x;
}
if (candidato_y > maisVotos) {
  candidatoVencedor = "candidato_y";
  maisVotos = candidato_y;
}
if (candidato_z > maisVotos) {
  candidatoVencedor = "candidato_z";
  maisVotos = candidato_z;
}

console.log("===== Resultado da eleição =====");
console.log("Votos candidato_x: ", candidato_x);
console.log("Votos candidato_y: ", candidato_y);
console.log("Votos candidato_z: ", candidato_z);
console.log("Votos em branco: ", branco);
console.log("Votos nulos: ", nulo);
console.log(`Vencedor: ${candidatoVencedor} com ${maisVotos} votos`);