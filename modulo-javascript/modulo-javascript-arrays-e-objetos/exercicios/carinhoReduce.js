//Crie um array chamado `carrinho`, onde cada item é um objeto com as propriedades `produto` e `preco`. Adicione pelo menos 3 itens diferentes no array. Depois, use o método `reduce()` para calcular o valor total de todos os preços e armazene o resultado em uma variável chamada `total`. Exiba o valor total no console.

const carrinho = [
    {produto: 'Camiseta', preco: 50 },
    {produto: 'Caderno', preco: 20 },
    {produto: 'Lápis', preco: 2 }
];
const total = carrinho.reduce((acumulador, item) => acumulador + item.preco, 0);

console.log(total);