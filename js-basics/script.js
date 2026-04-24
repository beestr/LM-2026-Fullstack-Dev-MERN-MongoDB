var name = "Belva";
let age = 20;
const isStudent = true;

// tampilkan
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);


// DATA TYPES
let number = 10;
let text = "Hello";
let boolean = false;
let array = [1, 2, 3];
let object = { nama: "Belva", umur: 20 };

// typeof
console.log(typeof number);
console.log(typeof text);
console.log(typeof boolean);
console.log(typeof array);
console.log(typeof object);


//OPERATORS
// arithmetic
let a = 10;
let b = 5;

let tambah = a + b;
let kurang = a - b;
let kali = a * b;
let bagi = a / b;

console.log("Tambah:", tambah);
console.log("Kurang:", kurang);
console.log("Kali:", kali);
console.log("Bagi:", bagi);

// comparison
console.log(a > b);
console.log(a == b);

// logical
console.log(a > 5 && b < 10);
console.log(a < 5 || b < 10);


// OUTPUT KE WEB
document.getElementById("output").innerHTML = `
Name: ${name} <br>
Age: ${age} <br>
Addition: ${tambah} <br>
Type of text: ${typeof text}
`;