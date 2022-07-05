let num1 = "";
let num2 = "";
let operator = "";
let total = 0;
let display = document.querySelector("#display");
let miniDisplay = document.querySelector("#miniDisplay");
let sign = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if(num1 != "" && display.textContent != "" && button.className === "opButton"){
            num2 = Number(display.textContent)
            operate(num1, num2, operator);
            display.textContent = total;
            num1 = total;
            operator = button.textContent;
            total = 0;
            miniDisplay.textContent = display.textContent + " " + operator + " ";
            display.textContent = "";
        } else if(display.textContent != "" && miniDisplay.textContent != "" && button.className === "opButton"){
            operator = button.textContent;
            num1 = Number(miniDisplay.textContent);
            num2 = Number(display.textContent);
            operate(num1, num2, operator);
            miniDisplay.textContent = total;
            display.textContent = "";
        } else if(display.textContent === "" && miniDisplay.textContent != "" && button.className === "opButton"){
            operator = button.textContent;
            num1 = Number(miniDisplay.textContent);
            miniDisplay.textContent = num1 + " " + operator + " "; 
        } else if(display.textContent != "" && button.className === "opButton"){
            operator = button.textContent;
            num1 = Number(display.textContent);
            console.log("num1: " + num1);
            miniDisplay.textContent = display.textContent + " " + operator + " ";
            display.textContent = "";
        } else if (num1 != "" && display.textContent === "" && button.id === "equalsButton"){

        } else if(num1 != "" && display.textContent != "" && button.id === "equalsButton"){
            num2 = Number(display.textContent)
            console.log("num2: " + num2);
            operate(num1, num2, operator);
            console.log("total: " + total);
            miniDisplay.textContent = total;
            display.textContent = "";
        // if (a){
        // } else if (num1 != "" && display.textContent != "" && button.className === "opButton"){
        //     num2 = Number(display.textContent);
        //     operate(num1, num2, operator);
        //     operator = button.textContent;
        //     num1 = total;
        //     miniDisplay.textContent = total + " " + operator;
        //     display.textContent = "";
        // } else if (display.textContent != "" && button.className === "opButton"){
        //     num1 = Number(display.textContent);
        //     operator = button.textContent;
        //     miniDisplay.textContent = display.textContent + " " + operator;
        //     display.textContent = "";
        } else if(display.textContent.length >= 16){

        } else if(button.textContent === "±"){
            if (display.textContent != ""){
            sign = Number(display.textContent)
            if(Math.sign(sign) === -1){
                display.textContent = Math.abs(sign)
            } else
                display.textContent = -Math.abs(sign)
            }
        } else if(display === ""){
            display.textContent = button.textContent;
        } else if(display != "") {
            display.textContent = display.textContent + button.textContent;
        }
    });
});

function operate(num1, num2, operator) {
    switch (operator) {
        case "+":
            add(num1, num2);
            break;
        case "-":
            subtract(num1, num2);
            break;
        case "*":
            multiply(num1, num2);
            break;
        case "/":
            divide(num1, num2);
            break;
    }
    return total;
}

function add(num1, num2) {
    total = num1 + num2;
    return total;
}

function subtract(num1, num2) {
    total = num1 - num2;
    return total;
}

function multiply(num1, num2) {
    total = num1 * num2;
    return total;
}

function divide(num1, num2) {
    total = num1 / num2;
    return total;
}