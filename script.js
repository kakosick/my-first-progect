const h1 = document.querySelector('#hh1');
h1.textContent = "Изучения DOM в JavaScript";

const btn = document.querySelector('#btn');
const body = document.querySelector('body');
const resetbtn = document.querySelector('#resetBtn');

btn.addEventListener('click', () => {
    body.style.backgroundColor = 'black';
    h1.style.color = 'white';
    h1.textContent = 'Блягодоря кнопке ты поменял цвет и текст';
});

resetbtn.addEventListener('click', () => {
    body.style.backgroundColor = 'white';
    h1.style.color = 'black';
    h1.textContent = 'Текст и его стили вернулись в исходное состояние!';
})
