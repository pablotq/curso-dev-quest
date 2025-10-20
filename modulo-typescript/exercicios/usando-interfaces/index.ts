interface User{
    id: number | string;
    name: string;
    email: string;
}

const user1: User = {
    id: 1,
    name: "Alice",
    email: "alice@email.com"
};
console.log(user1);

// npx tsx exercicios/usando-interfaces/index.ts