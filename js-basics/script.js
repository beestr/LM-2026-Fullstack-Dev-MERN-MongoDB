// VARIABEL
// var bisa diubah dan bisa dideklarasikan ulang
var city = "Jakarta";
// let bisa diubah tapi tidak bisa dideklarasikan ulang
let age = 19;
// const tidak bisa diubah sama sekali setelah dideklarasikan
const PI = 3.14;

// TIPE DATA
// number = tipe data angka
let num = 10;
// string = tipe data teks
let str = "Hello";
// boolean = hanya true atau false
let bool = true;
// array = kumpulan data dalam satu variabel
let arr = [1, 2, 3];
// object = kumpulan data dengan key-value pair
let obj = { name: "Belva", age: 20, student: true };

// typeof digunakan untuk mengecek tipe data sebuah variabel
console.log(typeof num);    // "number"
console.log(typeof str);    // "string"
console.log(typeof bool);   // "boolean"
console.log(typeof arr);    // "object" (array dianggap object di JS)
console.log(typeof obj);    // "object"

// OPERATOR ARITMATIKA
let a = 10;
let b = 7;
console.log(a + b); // Penjumlahan = 17
console.log(a - b); // Pengurangan = 3
console.log(a * b); // Perkalian   = 70
console.log(a / b); // Pembagian   = 1.428...
console.log(a % b); // Modulus (sisa bagi) = 3

// OPERATOR PERBANDINGAN
console.log(a > b);    // true  - a lebih besar dari b
console.log(a < b);    // false - a tidak lebih kecil dari b
console.log(a === 10); // true  - a sama persis dengan 10
console.log(a !== b);  // true  - a tidak sama dengan b

// OPERATOR LOGIKA
console.log(a > 5 && b < 5); // false - && = kedua kondisi harus true
console.log(a > 20 || b < 5); // false - || = salah satu harus true
console.log(!(a === b));       // true  - ! = membalik nilai boolean