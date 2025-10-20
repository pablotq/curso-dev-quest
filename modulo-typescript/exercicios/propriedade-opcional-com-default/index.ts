interface Usuario{
    name: string;
    idade: number;
    genero?: string;
}

function printUsuario({name, idade, genero = "masculino"}: Usuario){
    console.log(`Nome: ${name}`);
    console.log(`Idade: ${idade}`);
    console.log(`Gênero: ${genero}`);
}

printUsuario({name: "Lucas", idade: 22, genero: "não-binário"});
printUsuario({name: "Carlos", idade: 28});

// npx tsx exercicios/propriedade-opcional-com-default/index.ts