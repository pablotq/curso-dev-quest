const frutas = ['Banana', 'Maçã', 'Laranja', 'Uva', 'Abacaxi'];
const listaFrutas = document.getElementById('frutas');
console.log(frutas);

frutas.forEach((fruta) => {
    const item = document.createElement('li');
    item.textContent = fruta;

    listaFrutas.appendChild(item);
    // document.getElementById('frutas').appendChild(item);
})

const products = [
 {
   id: 1,
   name: "Camiseta Dev em Dobro Preta",
   image: "./assets/camiseta-1.png",
   price: 3500,
   color: "Preto",
   size: "M",
 },
 {
   id: 2,
   name: "Camiseta Dev em Dobro Roxa",
   image: "./assets/camiseta-2.png",
   price: 2500,
   color: "Roxa",
   size: "G",
 },
 {
   id: 3,
   name: "Camiseta Dev em Dobro Preta - Costas",
   image: "./assets/camiseta-1-costas.png",
   price: 1500,
   color: "Preto",
   size: "G",
 },
 {
   id: 4,
   name: "Camiseta Dev em Dobro Roxa - Costas",
   image: "./assets/camiseta-2-costas.png",
   price: 6000,
   color: "Roxa",
   size: "M",
 },
 {
   id: 5,
   name: "Caneca Dev em Dobro",
   image: "./assets/caneca.png",
   price: 500,
   color: "Branca",
   size: 'M',
 },
]


const listaProdutos = document.getElementById('produtos');

const renderizarProdutos = () => {
    listaProdutos.innerHTML = products.map((product) =>  {
        return `
            <li>
                <img src="${product.image}" alt="${product.name}" />
                <p>${product.name}</p>
                <p>Cor: ${product.color}</p>
                <p>Tamanho: ${product.size}</p>
                <p>R$ ${(product.price / 100).toFixed(2).replace('.', ',')}</p>
                <button type="button">Comprar</button>
            </li>
        `
    }).join('');// o join é para tirar as vírgulas que aparecem entre os itens por ser um array
};

renderizarProdutos();