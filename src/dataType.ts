// Infer types
let sales = 123_456_789;
let course = 'TypeScript';
let is_published = true;

// Avoid any type as much as possible
let level;
level = 1;
level = 'a';

function render(document: any) {
    console.log(document);
}

// Arrays
let numbers = [1, 2, 3];
numbers.forEach(n => console.log(n));

// Tuples
let user: [number, string] = [1, 'John'];

// Enums
const enum Size{ Small = 1, Medium = 2, Large = 3 };
let mySize: Size = Size.Medium;
console.log(mySize);

// Literal types
type Quantity = 50 | 100;
let quantity: Quantity = 100;
