const orderPizza = async (hasIngredients) => {

    console.log("Pedido da pizza enviado para a cozinha...");

    if (!hasIngredients) {
        throw new Error("Ingredientes insuficientes para fazer a pizza.");
    }

    await new Promise((resolve, reject) =>
        setTimeout(() => {

            // simula uma chance de 20% de erro no pedido
            const hasErros = Math.random() < 0.2;
            if (hasErros) {
                return reject("Erro ao fazer o pedido da pizza.");
            } else {

                resolve("Pizza pronta!");
            }
        }, 1000)
    );

    return "Pizza pronta!";
};

const deliverPizza = () => {
    return new Promise((resolve) => {
        console.log("A pizza está a caminho...");
        setTimeout(() => {
            resolve("Pizza entregue!");
        }, 2000);
    });
};
const makeOrder = async () => {

    try {
        const pizzaMessage = await orderPizza(true);
        console.log(pizzaMessage);

        const deliverPizzaMessage = await deliverPizza();
        console.log(deliverPizzaMessage);
    } catch (error) {
        console.log("Ocorreu um erro: ", error);
    } finally {
        console.log("Obrigado por pedir na nossa pizzaria!");
    }
};

makeOrder();