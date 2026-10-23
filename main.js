const display = document.querySelector('.display');
const nums = document.querySelectorAll('.num');
const clearBtn = document.querySelector('.clear');
const operators = document.querySelectorAll('.op');
const equalsBtn = document.querySelector('.equals');

let firstNumber = '';
let operator = '';

nums.forEach((nBtn) => {
    nBtn.addEventListener('click', () => {
        display.textContent += nBtn.textContent;
    });
});

clearBtn.addEventListener('click', () => {
    display.textContent = '';
    firstNumber = '';
    operator = '';
});

operators.forEach((btn) => {
    btn.addEventListener('click', () => {
        firstNumber = display.textContent;
        operator = btn.textContent;
        display.textContent = '';
    })
});

equalsBtn.addEventListener('click', () => {
    const secondNumber = display.textContent;
    let result;
    switch (operator) {
        case '+':
            result = Number(firstNumber) + Number(secondNumber);
            break;
        case '-':
            result = Number(firstNumber) - Number(secondNumber);
            break;
        case '/':
            result = Number(firstNumber) / Number(secondNumber);
            if (secondNumber === '0') {
                result = 'На ноль делить нельзя';
            };
            break;
        case '*':
            result = Number(firstNumber) * Number(secondNumber);
            break;
        default:
            result = 'Значения не распознано';
            break;
        
    
    }
    display.textContent = result;
});
