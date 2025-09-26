const numeros = [1, 2, 3, 4, 5];
//find - retorna o PRIMEIRO elemento que satisfaz a condição
const resultado = numeros.find(numero => numero > 3);
// console.log(resultado); //4

const resultadoReduce = numeros.reduce((acumulador, item) => {
    return acumulador + item;
});

console.log(resultadoReduce); //15