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

let beginningNumber = 0;
let calculationOperator = 'operatorSymbol';
let secondNumber = 0;

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

console.log(operate(2, '/', 0));