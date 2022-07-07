let num1 = "";
let num2 = "";
let operator = "";
let total = 0;
let display = document.querySelector("#display");
let miniDisplay = document.querySelector("#miniDisplay");
let sign = 0;

const mainButtons = document.querySelectorAll(".mainButton");
const endButtons = document.querySelectorAll(".endButton");

mainButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.classList.contains("numButton")) {
            displayNum(button);
        } else if (display.textContent === "" && num2 === "") {

        } else if (button.classList.contains("opButton") && display.textContent != ""){
            operator = button.textContent;
            inputNum1(button);
            console.log("operator: " + operator);
        } else if(button.classList.contains("opButton") && num1 === "") {
            operator = button.textContent;
            inputNum1(button);
            console.log("operator: " + operator);
        } else if(button.classList.contains("opButton") && num1 != "") {
            inputNum2(button);
            operate(num1, num2, operator);
            roundTotal(total);
            console.log("total: " + total);
            operator = button.textContent;
            console.log("operator: " + operator);
            num1 = total;
            num2 = "";
            total = 0;
            miniDisplay.textContent = num1 + " " + operator;
            display.textContent = "";
        }
    })
})

endButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id === "clearButton"){
            num1 = "";
            num2 = "";
            operator = "";
            total = 0;
            sign = 0;
            display.textContent = "";
            miniDisplay.textContent = "";
            document.getElementById("display").style.fontSize = "";
            document.getElementById("miniDisplay").style.fontSize = "";
        } else if (display.textContent.length >= 16 && button.id === "equalsButton" && num1 != ""){
            inputNum2(button);
            operate(num1, num2, operator);
            roundTotal(total);
            total = total.toExponential();
            console.log("total: " + total);
            document.getElementById("display").style.fontSize = "20px";
            document.getElementById("miniDisplay").style.fontSize = "20px";
            miniDisplay.textContent = num1 + " " + operator + " " + num2 + " =";
            display.textContent = total;
        } else if(button.id === "equalsButton" && num1 != ""){
            inputNum2(button);
            operate(num1, num2, operator);
            roundTotal(total);
            console.log("total: " + total);
            miniDisplay.textContent = num1 + " " + operator + " " + num2 + " =";
            display.textContent = total;
        }
    })
})

function displayNum(button) {
    if(display.textContent.length >= 16){

    }
    else if (display.textContent === "") {
      display.textContent = button.textContent;
  } else if (display.textContent != ""){
    display.textContent = display.textContent + button.textContent;
  }
}

function inputNum1(button) {
        num1 = Number(display.textContent);
        console.log("num1: " + num1);
        miniDisplay.textContent = num1 + " " + operator;
        display.textContent = "";
}

function inputNum2(button) {
        num2 = Number(display.textContent);
        console.log("num2: " + num2);
        miniDisplay.textContent = total;
        display.textContent = "";
}

function changeSign(button) {
    if (display.textContent != ""){
        sign = Number(display.textContent);
        if(Math.sign(sign) === -1){
            display.textContent = Math.abs(sign);
        } else
        display.textContent = -Math.abs(sign);
    }
}

function roundTotal(num) {
    num = Math.round((num * 100) / 100);
    return num;
}

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