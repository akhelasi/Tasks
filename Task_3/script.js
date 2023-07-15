// JavaScript

function add() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const result = num1 + num2;
    document.getElementById("result").textContent = "Result: " + result;
}

function subtract() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const result = num1 - num2;
    document.getElementById("result").textContent = "Result: " + result;
}

function multiply() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const result = num1 * num2;
    document.getElementById("result").textContent = "Result: " + result;
}

function divide() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const result = num1 / num2;
    document.getElementById("result").textContent = "Result: " + result;
}
