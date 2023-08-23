const animais = [
  ["Cachorro", "Canino", 13],
  ["Cavalo", "Equino", 30],
  ["Coruja", "Ave", 20],
  ["Gato", "Felino", 20],
  ["Girafa", "Artiodactyla", 7]
];

function infoAnimais() {
  console.log("===> Animais <===");
  for (let i = 0; i < animais.length; i++) {
    const [nomeAnimal, especieAnimal, idadeMax] = animais[i];
    console.log(`Nome: ${nomeAnimal}  Espécie: ${especieAnimal}  Idade Máxima: ${idadeMax}`);
  }
}
infoAnimais();