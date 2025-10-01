//Crie um array chamado `usuarios`, onde cada item é um objeto com as propriedades `id` e `nome`. Adicione pelo menos 4 usuários diferentes. Depois, use o método `find()` para procurar o usuário que tenha `id` igual a 3. Armazene o resultado em uma variável chamada `usuarioEncontrado` e exiba no console o objeto retornado. 

const usuarios = [{
    id: 1,
    nome: 'Diego',
    idade: 23
},
{
    id: 2,
    nome: 'Pablo',
    idade: 35
    },
{
    id: 3,
    nome: 'Carlos',
    idade: 46
    },
{
    id: 4,
    nome: 'Antonio',
    idade: 23
    },
{
    id: 5,
    nome: 'Ana',
    idade: 21
    }
];

const usuarioEncontrado = usuarios.find(usuario => usuario.id === 3);
console.log(usuarioEncontrado);