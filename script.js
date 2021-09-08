let prevNumber = '';
let calculatorOperator = '';
let currentNumber = '0';

const numbers = document.querySelectorAll(".number");
const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
};
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })    
});

const calculatorScreen = document.querySelector('.calculator-screen');
const updateScreen = (number) => {
    calculatorScreen.value = number
};

const operators = document.querySelectorAll(".operator");
const inputOperator = (operator) => {
    if (calculatorOperator === '') {
        prevNumber = currentNumber
    }
    calculatorOperator = operator
    currentNumber = '0'
};
operators.forEach((operator) => {
    operator.addEventListener("click", (event) =>{
        inputOperator(event.target.value)
    })
});

const equalSign = document.querySelector('.equal-sign');
equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
});

const calculate = () => {
    let result = ''
    switch(calculatorOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
    }
    currentNumber = result
    calculatorOperator = ''
};

const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
});
const clearAll = () => {
    prevNumber = ''
    calculatorOperator = ''
    currentNumber = '0'
};

const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
});
inputDecimal = (dot) => {
    currentNumber += dot
};

const percenter = document.querySelector('.percenter')
percenter.addEventListener('click', () => {
    inputPercenter()
    updateScreen(currentNumber)
});
const inputPercenter = () => {
    result = parseFloat(currentNumber) / 100
    currentNumber = result
};