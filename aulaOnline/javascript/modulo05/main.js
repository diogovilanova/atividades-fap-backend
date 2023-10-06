try {
  let numero1 = parseFloat(prompt("Digite o primeiro número:"));
  let numero2 = parseFloat(prompt("Digite o segundo número:"));

  if (numero2 === 0) {
    throw new Error("Não é possível dividir por zero.");
  }

  let resultado = numero1 / numero2;
  console.log("O resultado da divisão é: " + resultado);

} catch (erro) {
  console.error("Ocorreu um erro: " + erro.message);

} finally {
  console.log("O programa foi encerrado.");
}
