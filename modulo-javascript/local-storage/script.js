// local storage armazena apenas strings
localStorage.setItem("nome", "Pablo");
localStorage.setItem("idade", "35");

//---------------- JSON no localStorage ---------------------//

const usuario = {
    nome: "Pablo",
    idade: 35,
    emprego: "Developer"
}
localStorage.setItem("usuario", JSON.stringify(usuario));

//--------------- array no localStorage ---------------------//


const produtos = [
    {id: 1, nome: "Camiseta", preco: 50},
    {id: 2, nome: "Calça", preco: 90},
    {id: 3, nome: "Bermuda", preco: 40},
    {id: 4, nome: "Gravata", preco: 70},
    {id: 5, nome: "Casaco", preco: 100}
];
localStorage.setItem("produtos", JSON.stringify(produtos));

//-------------- pegando item no localStorage ---------------//

const nomeUsuario = localStorage.getItem("nome"); // "Pablo"
console.log(nomeUsuario);

//----- pegando JSON ou array e transformando em objeto -----//

const usuarioJson = localStorage.getItem("usuario");
console.log(usuarioJson);
console.log(typeof usuarioJson);

const usuarioObj = JSON.parse(usuarioJson);
console.log(usuarioObj);
console.log(typeof usuarioObj);

const produtosJson = localStorage.getItem("produtos");
const produtosArray = JSON.parse(produtosJson);
console.log(produtosArray[0]);
console.log(typeof produtosArray);

//------------- removendo item no localStorage --------------//

//removeItem remove o item pela chave
localStorage.removeItem("age");

// limpa todo o localStorage
localStorage.clear(); 