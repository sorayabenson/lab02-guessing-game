// import functions and grab DOM elements
const numberInput = document.getElementById('numberInput');
const remainingGuessesText = document.getElementById('remainingGuesses');
const guessButton = document.getElementById('guessButton');
const resultsMessageText = document.getElementById('resultsMessage');
const resetButton = document.getElementById('resetButton');

// initialize state
let randomNumberSelector = Math.ceil(Math.random() * 20);
let guessesRemain = 4;

// set event listeners to update state and DOM
guessButton.addEventListener('click', () => {

    const userGuess = Number(numberInput.value);
    const tooHighMessage = `too high, try again!`;
    const tooLowMessage = `too low, try again!`;
    const correctAnswerMessage = `that's the number!`;
    const lostMessage = `sorry the answer was ${randomNumberSelector}, please try again.`;


    if (userGuess === randomNumberSelector) {
        resultsMessageText.textContent = correctAnswerMessage;
        remainingGuessesText.hidden = true;
        guessButton.disabled = true;
    }
    else if (userGuess < randomNumberSelector) {
        guessesRemain--;
        resultsMessageText.textContent = tooLowMessage;
    }
    else if (userGuess > randomNumberSelector) {
        guessesRemain--;
        resultsMessageText.textContent = tooHighMessage;

    }
    remainingGuessesText.textContent = `Trys left: ${guessesRemain}`;
    if (guessesRemain === 0) {
        resultsMessageText.textContent = lostMessage;
        guessButton.disabled = true;
    }


    resetButton.style.display = 'block';
});

resetButton.addEventListener('click', () => {
    guessesRemain = 4;
    remainingGuessesText.textContent = `Trys left: ${guessesRemain}`;
    resultsMessageText.textContent = '';
    randomNumberSelector = Math.ceil(Math.random() * 20);
    numberInput.value = '';
});
console.log(randomNumberSelector);