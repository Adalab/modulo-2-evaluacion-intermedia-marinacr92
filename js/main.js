'use strict';

const inputNumber = document.querySelector('.js-input-number');
const btn = document.querySelector('.js-btn');
const clue = document.querySelector('.js-clue');
const attemptCounter = document.querySelector('.js-attempt-counter');


function getRandomNumber(max) {
    const randomNumber = Math.ceil(Math.random() * max);
    return randomNumber;
}
const randomNumber = getRandomNumber(100);
console.log(randomNumber);

let counterNumber = 0;
attemptCounter.innerHTML = `Número de intentos: ${counterNumber}`;

clue.innerHTML = 'Pista: Escribe el número y dale a Prueba';

function updateCounter(){
    counterNumber++;
    attemptCounter.innerHTML = `Número de intentos: ${counterNumber}`;
}

function comparisonNumber(){
    const userNumber = parseInt(inputNumber.value);
    if(userNumber > randomNumber){
        clue.innerHTML = 'Demasiado alto';
        console.log 
    } else if (userNumber < randomNumber){
       clue.innerHTML = 'Demasiado bajo' 
    } else if (userNumber === randomNumber){
        clue.innerHTML = 'Has ganado campeona!!!'
    } else if (1<randomNumber<100){
        clue.innerHTML = 'El número debe estar entre 1 y 100'
    }
}


function handleClickBtn(event){
    event.preventDefault();

    updateCounter();

    getRandomNumber(100);

    comparisonNumber();


}

btn.addEventListener('click', handleClickBtn);

