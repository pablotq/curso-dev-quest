function showArrayItems<T>(arr: T[]): void {
    console.log(`Esse array é do tipo ${typeof(arr[0])} e possui os seguintes valores:`);
    
    arr.forEach((item, i) => {
        console.log(`ITEM ${i+1}: ${item}`);
    });
}

const numberArray = [1, 2, 3, 4, 5];
const stringArray = ["A", "B", "C", "D", "E"];

showArrayItems(numberArray);
showArrayItems(stringArray);

// npx tsx exercicios/trabalhando-com-generics/index.ts