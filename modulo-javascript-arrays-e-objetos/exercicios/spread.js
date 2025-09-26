

const numeros1 = [1, 2, 3];
const numeros2 = [4, 5, 6];

const todosNumeros = [...numeros1, ...numeros2];

console.log(numeros1);
console.log(numeros2);
console.log(todosNumeros);


const pessoa = {
    nome: 'Pablo',
    idade: 35
};

const pessoaAtualizada = {
    ...pessoa,
    cidade: 'João Pesoa'
};

console.log(pessoa);
console.log(pessoaAtualizada);
