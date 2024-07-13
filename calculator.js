// JavaScript Task Instructions
/*
Objective: Implement the JavaScript to make the calculator operational. Each button should perform its respective arithmetic operation on the two input numbers and display the result.

JavaScript Implementation:

Implement Arithmetic Functions: Each arithmetic operation (add, subtract, multiply, divide) should have its own function. For example:
function add(number1, number2) {
    return number1 + number2;
}
Implement similar functions for subtraction, multiplication, and division.

Attach Event Listeners: For each operation button, add an event listener that calls the corresponding arithmetic function when clicked. Use the input values from the number fields as arguments for these functions. Display the result in the #calculation-result span.
Example for the addition button:

document.getElementById('add').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});
Repeat similar steps to attach event listeners for the subtract, multiply, and divide buttons.

Ensure Input Validation: Convert input values to numbers (using parseFloat) to ensure the calculations are correct. Provide default values to handle empty inputs.
*/


const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const resultSpan = document.getElementById("calculation-result");

// Implement Arithmetic Functions
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num2 !== 0 ? num1 / num2 : console.log("Cannot divide by zero");

// Attach Event Listeners
addButton.addEventListener("click", () => {
    const num1 = parseFloat(number1.value) || 0;
    const num2 = parseFloat(number2.value) || 0;

    const result = add(num1, num2);
    resultSpan.textContent = result;
})
subtractButton.addEventListener("click", () => {
    const num1 = parseFloat(number1.value) || 0;
    const num2 = parseFloat(number2.value) || 0;

    const result = subtract(num1, num2);
    resultSpan.textContent = result;
})
multiplyButton.addEventListener("click", () => {
    const num1 = parseFloat(number1.value) || 0;
    const num2 = parseFloat(number2.value) || 0;

    const result = multiply(num1, num2);
    resultSpan.textContent = result;
})
divideButton.addEventListener("click", () => {
    const num1 = parseFloat(number1.value) || 0;
    const num2 = parseFloat(number2.value) || 0;

    const result = divide(num1, num2);
    resultSpan.textContent = result;
})