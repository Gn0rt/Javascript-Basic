const value1 = document.getElementById('number1');
const value2 = document.getElementById('number2');
const rs = document.getElementById('result');
function multiply() {
    let num1 = parseInt(value1.value);
    let num2 = parseInt(value2.value);
    let total = num1 * num2;
    if (isNaN(num1) || isNaN(num2)) {
        rs.innerHTML = "Error: Invalid input";
        return;
    }
    rs.innerHTML = "The result is: " + total;
}

function divide() {
    num1 = parseInt(value1.value);
    num2 = parseInt(value2.value);
    if (num1 === 0 || num2 === 0) {
        rs.innerHTML = "Error: Division by zero or Invalid Number";
        return;
    } else if (isNaN(num1) || isNaN(num2)) {
        rs.innerHTML = "Error: Invalid Number";
        return;
    }
    rs.innerHTML = "The result is: " + (num1 / num2);
}
