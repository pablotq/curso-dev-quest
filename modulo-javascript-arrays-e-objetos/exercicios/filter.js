//Crie um array chamado `produtos`, onde cada item é um objeto com as propriedades `nome` e `preco`. Adicione pelo menos 4 produtos diferentes. Depois, use o método `filter()` para criar um novo array chamado `produtosCaros`, contendo apenas os produtos com preço maior que 50. Por fim, exiba os dois arrays (`produtos` e `produtosCaros`) no console.

const produtos = [
    {id: 1, nome: 'Camiseta', preco: 70 },
    {id: 2, nome: 'Caderno', preco: 20 },
    {id: 3, nome: 'Lápis', preco: 2 },
    {id: 4, nome: 'Caneta', preco: 3 },
    {id: 5, nome: 'Borracha', preco: 100 }];

const produtosCaros = produtos.filter(produto => produto.preco >= 50);

console.log(produtos);
console.log(produtosCaros);