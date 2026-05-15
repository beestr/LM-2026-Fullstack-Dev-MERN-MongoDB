// =====================================
// STEP 2: ARRAY DESTRUCTURING
// =====================================

const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

// Extract first, skip second, extract third and fourth
const [firstFruit, , thirdFruit, fourthFruit] = fruits;

console.log("First Fruit:", firstFruit);
console.log("Third Fruit:", thirdFruit);
console.log("Fourth Fruit:", fourthFruit);

// =====================================
// STEP 3: OBJECT DESTRUCTURING
// =====================================

const student = {
  name: "Belva",
  age: 20,
  major: "Informatics Engineering"
};

const { name, age, major } = student;

console.log("Student Name:", name);
console.log("Age:", age);
console.log("Major:", major);

// =====================================
// STEP 4: ADVANCED DESTRUCTURING
// =====================================

const user = {
  id: 101,
  username: "developer01",
  profile: {
    city: "Bandung",
    country: "Indonesia"
  }
};

// Nested destructuring + variable renaming + default value
const {
  username: userName,
  profile: { city, country },
  status = "Active"
} = user;

console.log("Username:", userName);
console.log("City:", city);
console.log("Country:", country);
console.log("Status:", status);

// =====================================
// STEP 5: FUNCTION PARAMETER DESTRUCTURING
// =====================================

function displayProduct({ productName, price, stock = 0 }) {
  console.log(`Product: ${productName}`);
  console.log(`Price: $${price}`);
  console.log(`Stock: ${stock}`);
}

const product = {
  productName: "Laptop",
  price: 800
};

displayProduct(product);