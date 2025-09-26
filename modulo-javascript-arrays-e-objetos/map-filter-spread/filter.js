//filter - vai filtraros elementos do array com base em uma condição

const produtos = [
    {id: 1, nome: 'Camiseta', preco: 30 },
    {id: 2, nome: 'Caderno', preco: 20 },
    {id: 3, nome: 'Lápis', preco: 2 },
    {id: 4, nome: 'Caneta', preco: 3 },
    {id: 5, nome: 'Borracha', preco: 1 }];

const produtosMaiorQueDez = produtos.filter(produto => produto.preco >= 10);

console.log(produtos);
console.log(produtosMaiorQueDez);