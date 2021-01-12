// import functions and grab DOM elements
const numberInput = document.getElementById('numberInput');
const remainingGuessesText = document.getElementById('remainingGuesses');
const guessButton = document.getElementById('guessButton');
const resultsMessageText = document.getElementById('resultsMessage');

// initialize state
let randomNumberSelector = Math.ceil(Math.random() * 20);

let guessesRemain = 4;

console.log(guessesRemain);

// set event listeners to update state and DOM