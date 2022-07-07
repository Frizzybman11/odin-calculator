let num1 = null;
let num2 = null;
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
        } else if(display.textContent != "" && num1 != null && num2 != null) {
            operator = button.textContent;
            inputNum1(button);
            console.log("operator: " + operator);
            num2 = null;
        } else if (display.textContent === "" && num2 === null) {

        } else if(button.classList.contains("opButton") && num1 === null) {
            operator = button.textContent;
            inputNum1(button);
            console.log("operator: " + operator);
        } else if(button.classList.contains("opButton") && num1 != null) {
            inputNum2(button);
            operate(num1, num2, operator);
            roundTotal(total);
            console.log("total: " + total);
            operator = button.textContent;
            console.log("operator: " + operator);
            num1 = total;
            num2 = null;
            total = 0;
            miniDisplay.textContent = num1 + " " + operator;
            display.textContent = "";
        }
    })
})

endButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id === "clearButton"){
            num1 = null;
            num2 = null;
            operator = "";
            total = 0;
            sign = 0;
            display.textContent = "";
            miniDisplay.textContent = "";
            document.getElementById("display").style.fontSize = "";
            document.getElementById("miniDisplay").style.fontSize = "";
        } else if (num1 != null && num2 != null) {
            operate(num1, num2, operator);
            roundTotal(total);
            if (display.textContent.length >= 14){
                total = total.toExponential();
                document.getElementById("display").style.fontSize = "20px";
                document.getElementById("miniDisplay").style.fontSize = "20px";
            }
            console.log("total: " + total);
            miniDisplay.textContent = num1 + " " + operator + " " + num2 + " =";
            display.textContent = total;
            num1 = total;
        } else if(button.id === "equalsButton" && num1 != null){
            inputNum2(button);
            if (num2 === 0 && operator === "/"){
                display.textContent = "Cannot divide by zero";
                return;
            }
            operate(num1, num2, operator);
            roundTotal(total);
            console.log("total: " + total);
            miniDisplay.textContent = num1 + " " + operator + " " + num2 + " =";
            display.textContent = total;
            num1 = total;
        }
    })
})

function displayNum(button) {
    if(display.textContent.length >= 16 && display.textContent != "Cannot divide by zero"){

    }
    else if (display.textContent === "" || display.textContent === "Cannot divide by zero") {
      display.textContent = button.textContent;
  } else if (display.textContent == total) {
        display.textContent = button.textContent;
        total = 0;
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
    num = Number(num);
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