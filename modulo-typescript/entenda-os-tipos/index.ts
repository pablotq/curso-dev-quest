//declaração de variáveis primtivas
let age: number = 30 ;
let nome: string = "Pablo";
let ligado: boolean = true;

let verdade = false; //inferência de tipo
verdade = "sim"; //erro

//declaração de array
let idades: number[] = [30, 20, 12] ;
let nomes: string[] = ['Pablo','Carlos','Mai'];

//declaração de array com generics
let idades2: Array<number> = [13, 45, 27];

//declaração de any
let obj: any = {x: 0};

//declaração de objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {nome: "Pablo", idade: 30};
pessoa.adulto = true;

//declaração de union type
let id: number | string = 10;
id = "10";