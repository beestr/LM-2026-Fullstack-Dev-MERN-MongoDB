// ============================================================
// LAB JAVASCRIPT - ARRAYS DAN OBJECTS
// ============================================================

// ============================================================
// LANGKAH 2: ARRAYS (Larik)
// ============================================================

// Array adalah variabel yang bisa menyimpan banyak nilai sekaligus
// Setiap nilai punya index, dimulai dari 0

// 2.1 Membuat Array
let fruits = ["Apel", "Mangga", "Jeruk", "Pisang", "Anggur"];
let numbers = [10, 20, 30, 40, 50];
let mixed = ["Halo", 99, true, null]; // array bisa berisi tipe data berbeda

console.log("=== DATA ARRAY AWAL ===");
console.log("fruits  :", fruits);
console.log("numbers :", numbers);
console.log("mixed   :", mixed);

// Mengakses elemen array menggunakan index
console.log("\nAkses elemen:");
console.log("fruits[0] :", fruits[0]); // "Apel"
console.log("fruits[2] :", fruits[2]); // "Jeruk"
console.log("fruits[fruits.length - 1] :", fruits[fruits.length - 1]); // elemen terakhir

// 2.2 Array Methods (Metode Array)
console.log("\n=== ARRAY METHODS ===");

// length = mengetahui jumlah elemen dalam array
console.log("Jumlah buah (length):", fruits.length); // 5

// push = menambah elemen di AKHIR array
fruits.push("Semangka");
console.log("Setelah push 'Semangka' :", fruits);

// pop = menghapus elemen di AKHIR array, dan mengembalikan elemen yang dihapus
let removed = fruits.pop();
console.log("Elemen yang di-pop     :", removed);
console.log("Setelah pop            :", fruits);

// unshift = menambah elemen di AWAL array
fruits.unshift("Durian");
console.log("Setelah unshift 'Durian':", fruits);

// shift = menghapus elemen di AWAL array, dan mengembalikan elemen yang dihapus
let shifted = fruits.shift();
console.log("Elemen yang di-shift   :", shifted);
console.log("Setelah shift          :", fruits);

// ============================================================
// LANGKAH 3: OBJECTS (Objek)
// ============================================================

// Object menyimpan data dalam pasangan key: value
// Cocok untuk merepresentasikan sebuah entitas (misal: mahasiswa, produk)

// 3.1 Membuat Object
let student = {
  name: "Belva",
  age: 19,
  major: "Teknik Informatika",
  gpa: 3.75,
  isActive: true
};

console.log("\n=== OBJECT STUDENT ===");
console.log(student);

// 3.2 Mengakses Properti Object

// Dot notation (notasi titik) - cara paling umum
console.log("\nAkses dengan dot notation:");
console.log("Nama   :", student.name);
console.log("Jurusan:", student.major);
console.log("IPK    :", student.gpa);

// Bracket notation (notasi kurung) - berguna jika key berupa variabel
console.log("\nAkses dengan bracket notation:");
console.log("Umur   :", student["age"]);
console.log("Status :", student["isActive"]);

// Mengubah nilai properti
student.gpa = 3.90;
console.log("\nSetelah mengubah GPA:", student.gpa);

// Menambah properti baru
student.city = "Jakarta";
console.log("Setelah tambah properti city:", student.city);

// Menghapus properti
delete student.isActive;
console.log("Setelah hapus isActive:", student);

// ============================================================
// LANGKAH 4: BUILT-IN METHODS
// ============================================================

let scores = [85, 92, 70, 60, 88, 55, 95];

// 4.1 Array Processing Methods

// forEach = mengulang setiap elemen (tidak menghasilkan array baru)
console.log("\n=== forEach: Tampilkan Semua Nilai ===");
scores.forEach(function(score, index) {
  console.log("Mahasiswa ke-" + (index + 1) + " : " + score);
});

// map = membuat array BARU hasil transformasi setiap elemen
console.log("\n=== map: Nilai + 5 (bonus poin) ===");
let boostedScores = scores.map(function(score) {
  return score + 5;
});
console.log("Nilai asli  :", scores);
console.log("Nilai bonus :", boostedScores);

// filter = membuat array BARU hanya berisi elemen yang memenuhi kondisi
console.log("\n=== filter: Hanya Nilai >= 80 ===");
let passingScores = scores.filter(function(score) {
  return score >= 80;
});
console.log("Semua nilai  :", scores);
console.log("Nilai lulus  :", passingScores);

// 4.2 Menggabungkan Objects di dalam Array
// Ini adalah pola yang sangat umum digunakan, seperti data dari database

console.log("\n=== Array of Objects: Data Mahasiswa ===");
let students = [
  { name: "Belva",   age: 19, gpa: 3.75 },
  { name: "Andi",    age: 20, gpa: 3.20 },
  { name: "Siti",    age: 18, gpa: 3.90 },
  { name: "Reza",    age: 21, gpa: 2.85 },
  { name: "Dewi",    age: 19, gpa: 3.50 }
];

// Tampilkan semua mahasiswa dengan forEach
console.log("Daftar semua mahasiswa:");
students.forEach(function(s) {
  console.log("- " + s.name + " | Umur: " + s.age + " | IPK: " + s.gpa);
});

// filter: hanya mahasiswa dengan IPK >= 3.5
let honorStudents = students.filter(function(s) {
  return s.gpa >= 3.5;
});
console.log("\nMahasiswa IPK >= 3.5:");
honorStudents.forEach(function(s) {
  console.log("- " + s.name + " (IPK: " + s.gpa + ")");
});

// map: ambil hanya nama mahasiswa dari array of objects
let names = students.map(function(s) {
  return s.name;
});
console.log("\nDaftar nama mahasiswa:", names);