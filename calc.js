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
    return num2 !== 0 ? num1 / num2 : alert('Cannot divide by zero');
}



function operate(a, c, b) {
    switch (c) {
        case '+':
            return addition(a, b);
        case '-':
            return subtraction(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
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
        // If the number is 0 or the user has clicked an operator button, set the display field to be whatever the user enters next
        if (calcDisplay.textContent === '0' || newNumber == true) {
            calcDisplay.textContent = this.textContent;
            newNumber = false;
            // If the number is not zero and the user hasn't clicked an operator button, append the number they clicked to the display field
        } else {
            calcDisplay.textContent += this.textContent;
        }
        if (calculationOperator === 'waitingForOperatorSymbol') {
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
            calcDisplay.textContent += ` ${this.textContent}`;
            calculationOperator = `${this.textContent}`;
            newNumber = true;
        }
    })
})


const equalButton = document.querySelector('#equals-button')

equalButton.addEventListener('click', function () {
    if (calculationOperator !== 'waitingForOperatorSymbol') {
        let result = operate(beginningNumber, calculationOperator, secondNumber);
        calcDisplay.textContent = result;
        beginningNumber = result;
    } else {
        console.log('Operation not set or incomplete input.');
    }
})

const clearButton = document.querySelector('#clear-button')

clearButton.addEventListener('click', function () {
    beginningNumber = 0;
    calculationOperator = 'waitingForOperatorSymbol';
    secondNumber = 0;
    calcDisplay.textContent = 0;
})

