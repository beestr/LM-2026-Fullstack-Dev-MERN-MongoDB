// STEP 2: let & const
const name = "Belva";
let age = 20;

// STEP 3: Arrow Function
const greet = (name) => `Hello ${name}`;

// STEP 4: Template Literal
const message = `Nama saya ${name}, umur saya ${age}`;

// STEP 5: ES6 Features

// Destructuring
const person = { nama: "Belva", umur: 20 };
const { nama, umur } = person;

// Spread
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

// Default parameter
const sayHello = (user = "Guest") => `Hello ${user}`;

// OUTPUT
document.getElementById("output").innerHTML = `
${greet(name)} <br>
${message} <br><br>

Destructuring: ${nama}, ${umur} <br>
Spread: ${newNumbers} <br>
Default Param: ${sayHello()}
`;