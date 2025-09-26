//desestruturação de objetos
const usuarios = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'João Pessoa',
        estado: 'PB',
    },
};

// const nome = usuarios.nome;
// const idade = usuarios.idade;
// const cidade = usuarios.endereco.cidade;
// const estado = usuarios.endereco.estado;

// console.log(nome, idade, cidade, estado);

const { 
    nome, 
    idade, 
    endereco: { 
        cidade, 
        estado }, 
    telefone = 999999999 // valor padrão
} = usuarios;
console.log(nome, idade, cidade, estado);