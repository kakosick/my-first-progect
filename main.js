const display = document.querySelector('.display');
const nums = document.querySelectorAll('.num');
const clearBtn = document.querySelector('.clear');
const operators = document.querySelectorAll('.op');
const equalsBtn = document.querySelector('.equals');

let firstNumber = '';
let operator = '';

nums.forEach((nBtn) => {
    nBtn.addEventListener('click', () => {
        display.textContent = nBtn.textContent;
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
    let result;
    switch (operator) {
        case '+':
            result = Number(firstNumber) + Number(display.textContent);
            break;
        case '-':
            result = Number(firstNumber) - Number(display.textContent);
            break;
        case '/':
            result = Number(firstNumber) / Number(display.textContent);
            break;
        case '*':
            result = Number(firstNumber) * Number(display.textContent);
            break;
        default:
            result = 'Значения не опозднано';
            break;
        
    
    }
    display.textContent = result;
});
