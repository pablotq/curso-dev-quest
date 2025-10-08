//  Instruções do Exercício
// Crie uma função assíncrona que receba manualmente um ID de usuário (1 a 10) como parâmetro e faça uma requisição à API https://jsonplaceholder.typicode.com/users/{id} usando fetch com async/await. Depois, exiba no console o nome, e-mail e endereço (rua e cidade) do usuário retornado.

const baseURL = "https://jsonplaceholder.typicode.com/users";

const getUser = async (id) => {

    if (id < 1 || id > 10) {
        throw new Error("Id de usuário inválido.");
    }

    try {
        const response = await fetch(`${baseURL}/${id}`);

        const user = await response.json();
        console.log(`Nome: ${user.name}`);
        console.log(`Email: ${user.email}`);
        console.log(`Rua: ${user.address.street}`);
        console.log(`Cidade: ${user.address.city}`);

    } catch (error) {
        console.log("Erro ao carregar o usuário: ", error);
    }
};

getUser(1);
