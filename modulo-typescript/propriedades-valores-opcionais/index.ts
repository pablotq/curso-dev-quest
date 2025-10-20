type Cliente = {
    fisrtName: string;
    lastName?: string; // ? - propriedade opcional
    age: number;
}

const cliente1: Cliente = {
    fisrtName: "Ana",
    age: 25
};

console.log(cliente1);

function printName(firstName: string, lastName?: string) {
    console.log(`O primeiro nome é: ${firstName}`);
    if (lastName) {
        console.log(`O último nome é: ${lastName}`);
    }
}

printName("Mariana");
printName("Carlos","Silva");

// npx tsx propriedades-valores-opcionais/index.ts
