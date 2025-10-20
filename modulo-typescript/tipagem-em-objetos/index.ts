type Customer = {
    name: string;
    age: number;
}

function showCustomerInfo(customer: Customer) {
    console.log(`O nome do cliente é ${customer.name}`);
    console.log(`A idade do cliente é: ${customer.age}`);
    
}

const customer1: Customer = {
    name: "Pablo",
    age: 30
};

showCustomerInfo(customer1);

// npx tsx tipagem-em-objetos/index.ts