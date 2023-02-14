'use strict';

const inputNumber = document.querySelector('.js-input-number');
const btn = document.querySelector('.js-btn');
const clue = document.querySelector('.js-clue');
const attemptCounter = document.querySelector('.js-attempt-counter');


function getRandomNumber(max) {
    const randomNumber = Math.ceil(Math.random() * max);
    return randomNumber;
}
console.log(getRandomNumber(100));

let counterNumber = 0;


function updateCounter(){
    let counterText = attemptCounter.innerHTML =`Número de intentos: ${counterNumber++}`;
    return counterText;
}
console.log(updateCounter());

function handleClickBtn(event){
    event.preventDefault();

    updateCounter()


}

btn.addEventListener('click', handleClickBtn);

