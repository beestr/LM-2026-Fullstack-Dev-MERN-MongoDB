// Step 2: Variables
var studentName = "Belva";
let studentAge = 20;
const isStudent = true;

// Display variable values
console.log("Student Name:", studentName);
console.log("Student Age:", studentAge);
console.log("Is Student:", isStudent);

// Step 3: Data Types
let numberExample = 100;
let stringExample = "JavaScript Basics";
let booleanExample = false;
let arrayExample = ["HTML", "CSS", "JavaScript"];
let objectExample = {
    firstName: "Belva",
    major: "Informatics Engineering"
};

// Display data values
console.log("Number:", numberExample);
console.log("String:", stringExample);
console.log("Boolean:", booleanExample);
console.log("Array:", arrayExample);
console.log("Object:", objectExample);

// Check data types using typeof
console.log("Type of numberExample:", typeof numberExample);
console.log("Type of stringExample:", typeof stringExample);
console.log("Type of booleanExample:", typeof booleanExample);
console.log("Type of arrayExample:", typeof arrayExample); // object in JS
console.log("Type of objectExample:", typeof objectExample);

// Step 4: Arithmetic Operators
let num1 = 10;
let num2 = 5;

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);

// Comparison Operators
console.log("num1 > num2:", num1 > num2);
console.log("num1 < num2:", num1 < num2);
console.log("num1 == num2:", num1 == num2);
console.log("num1 != num2:", num1 != num2);

// Logical Operators
let x = true;
let y = false;

console.log("x && y:", x && y);
console.log("x || y:", x || y);
console.log("!x:", !x);

// Conditional example
if (num1 > num2 && isStudent) {
    console.log("Condition is true");
} else {
    console.log("Condition is false");
}