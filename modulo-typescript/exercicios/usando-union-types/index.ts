function tipoValor(value: string | number | boolean) {
    console.log(`O valor ${value} é do tipo ${typeof value}`);
}

tipoValor(42);
tipoValor("Olá");
tipoValor(true);
//npx tsx exercicios/usando-union-types/index.ts