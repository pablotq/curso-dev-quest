function  makeArray<T>(item: T): T[] {
    return [item];
}

const number = makeArray(5);
console.log(number);

const text = makeArray("Hello");
console.log(text);


// npx tsx generics/index.ts