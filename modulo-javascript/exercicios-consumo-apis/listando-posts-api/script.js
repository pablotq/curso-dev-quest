const baseURL = "https://jsonplaceholder.typicode.com/posts";

const getPosts = async () => {
    try {
        const response = await fetch(baseURL);

        const posts = await response.json();
        for (let i = 0; i < 5; i++) {
             console.log(`Título ${i+1}: ${posts[i].title}`);
            console.log(`Post: ${posts[i].body}`);
        }

    } catch (error) {
        console.log("Erro ao carregar os posts: ", error);
    }
};

getPosts();