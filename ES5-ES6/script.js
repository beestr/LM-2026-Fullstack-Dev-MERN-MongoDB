// Rewrite ES5 to ES6 Lab

// STEP 2: Convert Variables (var -> let/const)

// ES5
var oldName = "Belva";
var oldAge = 20;

// ES6
const name = "Belva";
let age = 20;
age = 21;

console.log("Name:", name);
console.log("Age:", age);

// STEP 3: Convert Functions to Arrow Functions

// ES5 function
function greetUser(user) {
    return "Hello " + user;
}

// ES6 arrow function
const greetUserES6 = (user) => {
    return `Hello ${user}`;
};

console.log(greetUser("Belva"));
console.log(greetUserES6("Belva"));

// ES5 function expression
var multiplyOld = function(a, b) {
    return a * b;
};

// ES6 arrow function
const multiplyNew = (a, b) => a * b;

console.log("Multiply Old:", multiplyOld(2, 3));
console.log("Multiply New:", multiplyNew(2, 3));

// STEP 4: Template Literals

// ES5 string concatenation
var oldMessage = "My name is " + name + " and I am " + age + " years old.";

// ES6 template literal
const newMessage = `My name is ${name} and I am ${age} years old.`;

console.log(oldMessage);
console.log(newMessage);

// STEP 5: Modern ES6 Features

// Object destructuring
const student = {
    firstName: "Belva",
    major: "Informatics Engineering"
};

const { firstName, major } = student;

console.log(firstName);
console.log(major);

// Array destructuring
const fruits = ["Apple", "Banana", "Orange"];
const [fruit1, fruit2, fruit3] = fruits;

console.log(fruit1, fruit2, fruit3);

// Spread operator for arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];

console.log(combinedArray);

// Spread operator for objects
const object1 = { a: 1, b: 2 };
const object2 = { c: 3, d: 4 };

const combinedObject = { ...object1, ...object2 };

console.log(combinedObject);

// Default parameters
const calculate = (x = 10, y = 5) => {
    return x + y;
};

console.log(calculate());
console.log(calculate(20, 10));