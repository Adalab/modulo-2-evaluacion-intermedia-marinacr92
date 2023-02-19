'use strict';

const inputNumber = document.querySelector('.js-input-number');
const btn = document.querySelector('.js-btn');
const clue = document.querySelector('.js-clue');
const attemptCounter = document.querySelector('.js-attempt-counter');

let counterNumber = 0;
const defaultAttempt = `Número de intentos: ${counterNumber}`;
const defaultClue = 'Pista: Escribe el número y dale a Prueba';

attemptCounter.innerHTML = defaultAttempt;
clue.innerHTML = defaultClue;


function getRandomNumber(max) {
    const randomNumber = Math.ceil(Math.random() * max);
    return randomNumber;
}

const randomNumber = getRandomNumber(100);
console.log('Número aleatorio: ' + randomNumber);


function updateCounter(){
    counterNumber++;
    attemptCounter.innerHTML = `Número de intentos: ${counterNumber}`;
}

function writeMessage(msg){
    clue.innerHTML = msg;
}

function comparisonNumber(){
    const userNumber = parseInt(inputNumber.value);

    console.log('Número recogido en el input: ' + userNumber);

    if(isNaN(userNumber)){
        writeMessage('Debe escribir un número entre el 1 y el 100');
    } else if (userNumber < 1 || userNumber > 100){
        writeMessage('El número debe estar entre 1 y 100'); 
    } else if(userNumber > randomNumber){
        writeMessage('Demasiado alto');
    } else if (userNumber < randomNumber){
        writeMessage('Demasiado bajo');
    } else if (userNumber === randomNumber){
        writeMessage('Has ganado campeona!!!'); 
    }    
}

function handleClickBtn(event){
    event.preventDefault();

    updateCounter();

    comparisonNumber();
}

btn.addEventListener('click', handleClickBtn);

