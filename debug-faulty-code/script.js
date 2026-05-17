// ===============================
// SYNTAX ERROR EXAMPLE (FIXED)
// ===============================

// Faulty:
// let name = "Belva

// Fixed:
let name = "Belva";
console.log("Name:", name);

// ===============================
// RUNTIME ERROR EXAMPLE (FIXED)
// ===============================

// Faulty:
// console.log(user.age);

// Fixed:
const user = {
  username: "developer01",
  age: 20
};

console.log("User Age:", user.age);

// ===============================
// LOGICAL ERROR EXAMPLE (FIXED)
// ===============================

// Faulty:
// function add(a, b) {
//   return a - b;
// }

// Fixed:
function add(a, b) {
  return a + b;
}

console.log("Addition Result:", add(5, 3));

// ===============================
// DEBUGGING WITH CONSOLE
// ===============================

function calculateDiscount(price, discount) {
  console.log("Original Price:", price);
  console.log("Discount:", discount);

  const finalPrice = price - (price * discount / 100);

  console.log("Final Price:", finalPrice);
  return finalPrice;
}

calculateDiscount(100, 20);

// ===============================
// FINAL TEST
// ===============================

console.log("All debugging tests completed successfully.");