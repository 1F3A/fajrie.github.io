const numbers = document.querySelectorAll(".number");
const calculatorScreen = document.querySelectorAll(".calculator-screen");
const operators = document.querySelectorAll(".operator");
const inputOperator = (operator) => {
    if(calculatorOperator === ''){
        prevNumber = currentNumber 
    }
    calculatorOperator = operator
    currentNumber = ''
}
const equalSign = document.querySelector(".equal-sign")
const calculate = () => {
    let result = ''
    switch(calculatorOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break;
        default:
            return;
    }
    currentNumber = result;
    calculatorOperator = ''
}
const clearBtn = document.querySelector(".all-clear");
const clearAll = () => {
    prevNumber = ''
    calculatorOperator = ''
    currentNumber = '0'
}
const decimal = document.querySelector('.decimal');
const inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return
    }
    currentNumber =+ dot;
}
let prevNumber = '';
let calculatorOperator = '';
let currentNumber = '0';

const updateScreen = (number) => {
    calculatorScreen.value = number;
}
const inputNumber = (number) => {
    if(currentNumber == '0'){
        currentNumber = number;
    }else {
        currentNumber += number;
    }
    
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        updateScreen(event.target.value);
        updateScreen(currentNumber);
    })
});

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    });
});
equalSign.addEventListener("click", () => {
    calculate();
    updateScreen(currentNumber);
})
clearBtn.addEventListener("click", () => {
    clearAll()
    updateScreen(currentNumber)
});
decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
})

