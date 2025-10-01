//getElementById - busca elemento pelo atributo id

const button = document.getElementById('button');
console.log(button);

//getElementsByClassName - busca elementos pelo nome da classe (retorna uma HTMLCollection)
const h1 = document.getElementsByClassName('title');
//console.log(h1);

//querySelectorAll - busca todos os elementos que correspondem ao seletor CSS (retorna uma NodeList)
//melhor para iterações em laço. possui o foreach
const titles = document.querySelectorAll('.title');
console.log(titles);

//querySelector - busca o primeiro elemento que corresponde ao seletor CSS
const firstTitle = document.querySelector('.title');
console.log(firstTitle);

firstTitle.style.color = 'blue';
firstTitle.textContent = 'Texto alterado via JavaScript';