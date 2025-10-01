//Crie um array chamado `alunos`, onde cada item é um objeto com as propriedades `nome` e `nota`. Adicione pelo menos 3 alunos diferentes. Depois, use o método `map()` para criar um novo array chamado `alunosAtualizados`, onde cada aluno terá a mesma estrutura, mas a propriedade `nota` deve ser aumentada em 1 ponto. Por fim, exiba os dois arrays (`alunos` e `alunosAtualizados`) no console para comparar. 

const alunos = [
    {nome: 'Carlos', nota: 4},
    {nome: 'Ana', nota: 7},
    {nome: 'Pablo', nota: 9},
    {nome: 'Maira', nota: 10},
    { nome: 'Daniel', nota: 5 }];

const alunosAtualizados = alunos.map(aluno => (
    {
    nome: aluno.nome,
    nota: aluno.nota + 1
}
));

console.log(alunos);
console.log(alunosAtualizados);