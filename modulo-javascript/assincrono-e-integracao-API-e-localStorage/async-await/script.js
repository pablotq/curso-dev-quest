const orderPizza = () => {
    return new Promise((resolve) => {
        console.log("Pedido da pizza enviado para a cozinha...");
        setTimeout(() => {
            resolve("Pizza pronta!");
        }, 3000);
    }   
)
};

//simular API que entrega pizza
const deliverPizza = () => {
    return new Promise((resolve) => {
        console.log("A pizza está a caminho...");
        setTimeout(() => { 
            resolve("Pizza entregue!");
        }, 3000);
    });
};

// orderPizza().then(message => {
//     console.log(message);

//     //não é bom umsar uma promisse dentro de outra promise
//     deliverPizza().then(message => {
//         console.log(message);
//     });
// });

//uma operação assincrona é qualquer tarefa que demora um tempo para ser concluida e não trava o resto do código enquanto espera
const makeOrder = async () => {
    const pizzaMessage = await orderPizza(); //await só pode ser usado dentro de uma função async
    console.log(pizzaMessage);// uma função async retorna automaticamente uma promise

    const deliverPizzaMessage = await deliverPizza();
    console.log(deliverPizzaMessage);
};

makeOrder();