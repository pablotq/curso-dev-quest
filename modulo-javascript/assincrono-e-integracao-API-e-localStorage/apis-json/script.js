const heroObject = {
    name: "Batman",
    age: 35,
    hasPowers: false
};

console.log(heroObject.name);
console.log(typeof heroObject);


//JSON
const heroJSON = `{
    "name": "Homem de Ferro",
    "age": 35,
    "hasPowers": false
}`;

//transformar JSON em objeto
const hero = JSON.parse(heroJSON);
console.log(hero.name);

//transformar objeto em JSON(string)
const heroString = JSON.stringify(heroObject);
console.log(heroString);
console.log(typeof heroString);