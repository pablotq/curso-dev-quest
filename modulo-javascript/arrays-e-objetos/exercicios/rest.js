//Crie um objeto chamado `usuario` com as propriedades `nome` e `idade`. Depois, faça a desestruturação desse objeto em variáveis separadas: `nome`, `idade` e `cidade`. Caso `cidade` não exista no objeto, atribua o valor padrão `'Desconhecida'`. Use também o rest operator para capturar as demais propriedades do objeto em uma variável chamada `resto`. Em seguida, crie um novo objeto chamado `novoUsuario`, juntando `nome`, `cidade` e todas as propriedades capturadas em `resto`. Exiba no console o objeto `novoUsuario`.
const usuario = {
    nome: 'Pablo',
    idade: 35
};
const {nome, idade, cidade = 'Desconhecida', ...resto} = usuario;

const novoUsuario = {
    nome,
    cidade,
    ...resto
};
console.log(novoUsuario);