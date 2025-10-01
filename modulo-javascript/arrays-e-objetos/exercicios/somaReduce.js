//Crie um array chamado `numeros` contendo os valores [10, 20, 30, 40]. Depois, use o método `reduce()` para somar todos os valores do array e armazene o resultado em uma variável chamada `soma`. Exiba o valor da soma no console.

const numeros = [10, 20, 30, 40];
const soma = numeros.reduce((acumulador, numero) => acumulador + numero,0);

console.log(soma);