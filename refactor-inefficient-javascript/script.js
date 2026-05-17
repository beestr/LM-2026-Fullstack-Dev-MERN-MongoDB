// =======================================
// STEP 1: Refactor Old Loop to ES6 filter()
// =======================================

// Inefficient version
function getEvenNumbersOld(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }

  return result;
}

// Optimized version
function getEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

console.log("Old Even Numbers:", getEvenNumbersOld([1, 2, 3, 4, 5, 6]));
console.log("New Even Numbers:", getEvenNumbers([1, 2, 3, 4, 5, 6]));

// =======================================
// STEP 2: Optimize DOM Manipulation
// =======================================

const list = document.getElementById("list");
let items = "";

for (let i = 0; i < 100; i++) {
  items += `<li>Item ${i}</li>`;
}

list.innerHTML = items;

// =======================================
// STEP 3: Optimize Nested Loop
// =======================================

// Inefficient O(n²)
function findDuplicatesOld(arr) {
  let duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        duplicates.push(arr[i]);
      }
    }
  }

  return duplicates;
}

// Optimized with Set
function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = new Set();

  arr.forEach((item) => {
    if (seen.has(item)) {
      duplicates.add(item);
    } else {
      seen.add(item);
    }
  });

  return [...duplicates];
}

const sampleArray = [1, 2, 3, 4, 2, 5, 6, 3, 7];

console.log("Old Duplicates:", findDuplicatesOld(sampleArray));
console.log("New Duplicates:", findDuplicates(sampleArray));