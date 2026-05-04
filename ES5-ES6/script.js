// Step 2: Convert var to let and const
let age = 20;
age = 21; // let allows reassignment

const name = "Belva"; // const cannot be reassigned

console.log("Age:", age);
console.log("Name:", name);

// Step 3: Convert function to arrow function
const greet = (userName) => {
    return `Hello, ${userName}!`;
};

console.log(greet(name));

// Another arrow function
const addNumbers = (a, b) => a + b;
console.log("Addition:", addNumbers(5, 3));

// Step 4: Template literals
const course = "JavaScript";
const message = `I am learning ${course} in this lab.`;

console.log(message);

// Step 5: Destructuring
const student = {
    firstName: "Belva",
    major: "Informatics Engineering"
};

const { firstName, major } = student;

console.log("First Name:", firstName);
console.log("Major:", major);

// Array destructuring
const colors = ["Red", "Blue", "Green"];
const [color1, color2, color3] = colors;

console.log(color1, color2, color3);

// Spread operator with arrays
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const mergedNumbers = [...numbers1, ...numbers2];

console.log("Merged Array:", mergedNumbers);

// Spread operator with objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const mergedObject = { ...obj1, ...obj2 };
console.log("Merged Object:", mergedObject);

// Default parameters
const multiply = (x = 2, y = 3) => x * y;

console.log("Multiply default:", multiply());
console.log("Multiply custom:", multiply(4, 5));