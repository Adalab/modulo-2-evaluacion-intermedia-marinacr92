'use strict';

const inputNumber = document.querySelector('.js-input-number');
const btn = document.querySelector('.js-btn');
const reset = document.querySelector('.js-reset');
const clue = document.querySelector('.js-clue');
const attemptCounter = document.querySelector('.js-attempt-counter');
const body = document.querySelector('body');

let counterNumber = 0;
const defaultAttempt = `Número de intentos: ${counterNumber}`;
const defaultClue = 'Pista: Escribe el número y dale a Prueba';

function getRandomNumber(max) {
  const randomNumber = Math.ceil(Math.random() * max);
  return randomNumber;
}

let randomNumber = getRandomNumber(100);
console.log('Número aleatorio: ' + randomNumber);

function updateCounter() {
  counterNumber++;
  writeMessage(attemptCounter, `Número de intentos: ${counterNumber}`);
}

function writeMessage(positionMsg, msg) {
  positionMsg.innerHTML = msg;
}

function comparisonNumber() {
  const userNumber = parseInt(inputNumber.value);

  console.log('Número recogido en el input: ' + userNumber);

  if (isNaN(userNumber)) {
    writeMessage(clue, 'Debe escribir un número entre el 1 y el 100');
  } else if (userNumber < 1 || userNumber > 100) {
    writeMessage(clue, 'El número debe estar entre 1 y 100');
  } else if (userNumber > randomNumber) {
    writeMessage(clue, 'Demasiado alto');
  } else if (userNumber < randomNumber) {
    writeMessage(clue, 'Demasiado bajo');
  } else if (userNumber === randomNumber) {
    writeMessage(clue, 'Has ganado campeona!!!');
  }
}

function handleEnterKey(event) {
  if (event.keyCode === 13) {
    handleClickBtn(event);
  }
}

function handleClickBtn(event) {
  event.preventDefault();
  updateCounter();
  comparisonNumber();
}

function resetCounter() {
  counterNumber = 0;
  writeMessage(attemptCounter, `Número de intentos: ${counterNumber}`);
}

function handleClickReset() {
  inputNumber.value = '';
  writeMessage(clue, defaultClue);
  randomNumber = getRandomNumber(100);
  console.log('Número aleatorio: ' + randomNumber);
  resetCounter();
}

writeMessage(attemptCounter, defaultAttempt);
writeMessage(clue, defaultClue);

btn.addEventListener('click', handleClickBtn);

reset.addEventListener('click', handleClickReset);
document.addEventListener('keypress', handleEnterKey);
