// Access DOM elements
const clickButton = document.getElementById("clickButton");
const textInput = document.getElementById("textInput");
const selectOption = document.getElementById("selectOption");
const demoForm = document.getElementById("demoForm");
const formInput = document.getElementById("formInput");
const hoverBox = document.getElementById("hoverBox");
const output = document.getElementById("output");

// Click event
clickButton.addEventListener("click", function () {
    output.textContent = "Button was clicked!";
});

// Input event
textInput.addEventListener("input", function () {
    output.textContent = "Typing: " + textInput.value;
});

// Change event
selectOption.addEventListener("change", function () {
    output.textContent = "Selected: " + selectOption.value;
});

// Submit event
demoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    output.textContent = "Form submitted: " + formInput.value;
});

// Keyup event
textInput.addEventListener("keyup", function (event) {
    output.textContent = "Last key typed: " + event.key;
});

// Mouseover event
hoverBox.addEventListener("mouseover", function () {
    hoverBox.style.backgroundColor = "lightgreen";
    output.textContent = "Mouse entered the box";
});

// Mouseout event
hoverBox.addEventListener("mouseout", function () {
    hoverBox.style.backgroundColor = "lightgray";
    output.textContent = "Mouse left the box";
});

// Focus event
textInput.addEventListener("focus", function () {
    textInput.style.backgroundColor = "#e6f7ff";
});

// Blur event
textInput.addEventListener("blur", function () {
    textInput.style.backgroundColor = "white";
});