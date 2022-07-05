let num1 = 0;
let num2 = 0;
let operator = "";
let total = 0;

function operate(a, b, c) {
    operator = c;
    switch (operator) {
        case "+":
            add(a, b);
            break;
        case "-":
            subtract(a, b);
            break;
        case "*":
            multiply(a, b);
            break;
        case "/":
            divide(a, b);
            break;
    }
    return total;
}

function add(a, b) {
    num1 = a;
    num2 = b;
    total = num1 + num2;
    return total;
}

function subtract(a, b) {
    num1 = a;
    num2 = b;
    total = num1 - num2;
    return total;
}

function multiply(a, b) {
    num1 = a;
    num2 = b;
    total = num1 * num2;
    return total;
}

function divide(a, b) {
    num1 = a;
    num2 = b;
    total = num1 / num2;
    return total;
}