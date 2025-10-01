// Alterando classes
const   quadrado = document.querySelector(".quadrado");

quadrado.classList.remove("azul"); // remove a classe azul
quadrado.classList.add("preto"); // adiciona a classe preto

quadrado.classList.toggle("preto"); // remove a classe preto se ela existir, ou adiciona se ela não existir

const temAzul = quadrado.classList.contains("azul"); // verifica se o elemento tem a classe azul
if(temAzul) {
    console.log("quadrado tem a classe azul");
} else {
    console.log("quadrado não tem a classe azul");
}






// Alterando atributos
const inputCor = document.getElementById("cor");

inputCor.setAttribute("placeholder", "Digite uma cor"); // altera o atributo placeholder para Digite uma cor

const valorPlaceholder = inputCor.getAttribute("placeholder"); // pega o valor do atributo placeholder
console.log(valorPlaceholder);
inputCor.removeAttribute("placeholder"); // remove o atributo placeholder