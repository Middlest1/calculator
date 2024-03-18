function addition(num1, num2) {
    return num1 + num2;
}

function subtraction(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
}



function operate(beginningNumber, calculationOperator, secondNumber) {
    switch (calculationOperator) {
        case '+':
            return addition(beginningNumber, secondNumber);
        case '-':
            return subtraction(beginningNumber, secondNumber);
        case '*':
            return multiply(beginningNumber, secondNumber);
        case '/':
            return divide(beginningNumber, secondNumber);
        default:
            return 'Invalid operator';
    }
}

let beginningNumber = 0;
let calculationOperator = 'waitingForOperatorSymbol';
let secondNumber = 0;
let newNumber = false;

const numberButtons = document.querySelectorAll('#number-buttons button');
const operatorButtons = document.querySelectorAll('#operator-buttons button');
const calcDisplay = document.querySelector('#display-value p')


numberButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        if (calcDisplay.textContent === '0' || newNumber) {
            calcDisplay.textContent = this.textContent;
            newNumber = false;
        } else {
            calcDisplay.textContent += this.textContent;
        }
        if (calculationOperator === 'waitingForOperatorSymbol' || !calculationOperator) {
            beginningNumber = parseFloat(calcDisplay.textContent);
        } else {
            secondNumber = parseFloat(calcDisplay.textContent);
        }
    });
});

operatorButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        if (calcDisplay.textContent === '0') {
            calcDisplay.textContent = 0;
            calculationOperator = 'waitingForOperatorSymbol';
        } else {
            calcDisplay.textContent += this.textContent;
            calculationOperator = this.textContent;
            newNumber = true;
        }
    })
})