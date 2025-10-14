type Produto = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }
}

async function fetchProducts(): Promise<Produto[]>{
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
}

async function renderProducts(){
    try{
        const products = await fetchProducts();
        products.forEach((product) => {
            console.log(`ID: ${product.id}`);
            console.log(`Title: ${product.title}`);
            console.log(`Price: $${product.price}`);
            console.log(`Description: ${product.description}`);
            console.log(`Category: ${product.category}`);
            console.log(`Image: ${product.image}`);
            console.log(`Rating: ${product.rating.rate} (${product.rating.count} reviews)`);
            console.log('---------------------------');
        });
    } catch (error) {
        console.error('Error ao carregar produtos:', error);
    }
}

renderProducts();
//npx tsx exercicios/consumindo-api-fakestore/index.ts