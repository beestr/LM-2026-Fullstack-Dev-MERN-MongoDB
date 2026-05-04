// ============================================================
// LAB JAVASCRIPT - KONDISI, PERULANGAN, DAN FUNGSI
// ============================================================

// ============================================================
// LANGKAH 2: CONDITIONAL STATEMENTS (Pernyataan Kondisi)
// ============================================================

// if        = dijalankan jika kondisi bernilai true
// else if   = kondisi alternatif jika kondisi sebelumnya false
// else      = dijalankan jika semua kondisi di atas false

let score = 78;

if (score >= 90) {
  console.log("Nilai: A - Sangat Baik");
} else if (score >= 80) {
  console.log("Nilai: B - Baik");
} else if (score >= 70) {
  console.log("Nilai: C - Cukup");
} else if (score >= 60) {
  console.log("Nilai: D - Kurang");
} else {
  console.log("Nilai: E - Tidak Lulus");
}
// Output: "Nilai: C - Cukup" karena score=78 memenuhi kondisi >= 70

// Contoh kondisi lain: cek apakah seseorang sudah dewasa
let age = 19;

if (age >= 18) {
  console.log("Status: Sudah dewasa, boleh membuat KTP.");
} else {
  console.log("Status: Belum dewasa, belum bisa membuat KTP.");
}
// Output: "Sudah dewasa" karena age=19 >= 18

// ============================================================
// LANGKAH 3: LOOPS (Perulangan)
// ============================================================

// --- FOR LOOP ---
// for loop digunakan saat kita tahu berapa kali perulangan terjadi
// Struktur: for (inisialisasi; kondisi; update)

console.log("\n--- For Loop: Angka 1 sampai 5 ---");
for (let i = 1; i <= 5; i++) {
  console.log("Angka ke-" + i + " : " + i);
}
// i mulai dari 1, terus bertambah (+1) selama i <= 5

// Contoh for loop dengan array
let fruits = ["Apel", "Mangga", "Jeruk", "Pisang"];
console.log("\n--- For Loop: Daftar Buah ---");
for (let i = 0; i < fruits.length; i++) {
  console.log("Buah ke-" + (i + 1) + ": " + fruits[i]);
}

// --- WHILE LOOP ---
// while loop digunakan saat perulangan bergantung pada kondisi tertentu
// Perulangan terus berjalan SELAMA kondisi masih true

console.log("\n--- While Loop: Hitung Mundur ---");
let countdown = 5;
while (countdown > 0) {
  console.log("Hitung mundur: " + countdown);
  countdown--; // kurangi 1 setiap iterasi agar tidak infinite loop
}
console.log("Selesai!");

// ============================================================
// LANGKAH 4: FUNCTIONS (Fungsi)
// ============================================================

// Fungsi adalah blok kode yang bisa dipanggil berkali-kali
// Kegunaan: menghindari penulisan kode yang berulang (reusable)

// --- Fungsi tanpa parameter ---
function greet() {
  console.log("\nHalo! Selamat datang di program JavaScript.");
}
greet();

// --- Fungsi dengan parameter ---
// Parameter memungkinkan fungsi menerima input yang berbeda-beda
function greetUser(name) {
  console.log("Halo, " + name + "! Selamat belajar JavaScript.");
}
greetUser("Belva");
greetUser("Andi");

// --- Fungsi dengan return value ---
// return digunakan agar fungsi mengembalikan hasil yang bisa disimpan
function add(a, b) {
  return a + b;
}
let result = add(10, 5);
console.log("\nHasil penjumlahan 10 + 5 =", result);

// --- Fungsi untuk mengecek nilai kelulusan ---
// Fungsi ini menggabungkan kondisi (if/else) di dalam fungsi
function checkGrade(score) {
  if (score >= 90) {
    return "A - Sangat Baik";
  } else if (score >= 80) {
    return "B - Baik";
  } else if (score >= 70) {
    return "C - Cukup";
  } else if (score >= 60) {
    return "D - Kurang";
  } else {
    return "E - Tidak Lulus";
  }
}

console.log("\n--- Cek Nilai dengan Fungsi ---");
console.log("Score 95 ->", checkGrade(95));
console.log("Score 82 ->", checkGrade(82));
console.log("Score 73 ->", checkGrade(73));
console.log("Score 55 ->", checkGrade(55));

// --- Fungsi dengan loop di dalamnya ---
// Fungsi bisa berisi perulangan untuk menghasilkan output berulang
function printMultiplication(num) {
  console.log("\n--- Tabel Perkalian " + num + " ---");
  for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
  }
}
printMultiplication(3);