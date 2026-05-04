// ==========================
// Step 1: Synchronous Execution
// Expected Output: A B C
// ==========================
console.log("A");
console.log("B");
console.log("C");

// ==========================
// Step 2: setTimeout (Macrotask)
// Expected Output: Start End Timeout
// ==========================
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

console.log("End");

// ==========================
// Step 3: Promise (Microtask)
// Expected Output: Start End Promise
// ==========================
console.log("Start");

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");

// ==========================
// Step 4: Microtask vs Macrotask
// Expected Output: Start End Promise Timeout
// ==========================
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");

// ==========================
// Step 5: Async / Await
// Expected Output: 3 1 4 2
// ==========================
async function test() {
    console.log("1");
    await Promise.resolve();
    console.log("2");
}

console.log("3");
test();
console.log("4");

// ==========================
// Step 6: Advanced Flow Challenge
// Expected Output: A D C B
// ==========================
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");