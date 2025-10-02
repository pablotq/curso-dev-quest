const baseURL = "https://ghibliapi.vercel.app";

const loadSingleMovie = async (id) => {
    try {
        const response = await fetch(`${baseURL}/films/${id}`);

        const movie = await response.json();
        console.log(movie.title);
    } catch (error) {
        console.log("Erro ao carregar o filme: ", error);
    }
}

const movieIds = [
    "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    "id inválido",
    "cd3d059c-09f4-4ff3-8d63-bc765a5184fa",
    "ff24da26-a969-4f0e-ba1e-a122ead6c6e3"
];

const loadMultipleMoviesAll = async (movieIds) => {
    try {
        const promises = movieIds.map(async (id) => {
            const response = await fetch(`${baseURL}/films/${id}`);

            if (!response.ok) {
                throw new Error(`Erro ao carregar o filme com id: ${id}`);
            }

            return response.json();
        });

        const movies = await Promise.all(promises);
        console.log(movies);

    } catch (error) {
        console.log("Erro ao carregar o filme: ", error);
    }


}


const loadMultipleMoviesAllSettled = async (movieIds) => {
    try {
        const promises = movieIds.map(async (id) => {
            const response = await fetch(`${baseURL}/films/${id}`);

            if (!response.ok) {
                throw new Error(`Erro ao carregar o filme com id: ${id}`);
            }

            return response.json();
        });

        const movies = await Promise.allSettled(promises);
        console.log("Relatório Final:");

        movies.forEach((movies, index) => {
            if (movies.status === "fulfilled") {
                console.log("Ok: ", movies.value.title);
            } else {
                console.log(`Erro no o filme: ${movieIds[index]} `, movies.reason.message);
            }
        });

    } catch (error) {
        console.log("Erro ao carregar o filme: ", error);


    }
};


// loadSingleMovie("58611129-2dbc-4a81-a72f-77ddfc1b1b49");

//se houver um erro em qualquer uma das promises, o Promise.all rejeita toda a operação
//usa quando todos os resultados são necessários para continuar a operação
// loadMultipleMoviesAll(movieIds);

//se houver um erro em qualquer uma das promises, o Promise.allSettled não rejeita toda a operação
//usa quando quer aproveitar o que deu certo e lidar individualmente com os erros
loadMultipleMoviesAllSettled(movieIds);