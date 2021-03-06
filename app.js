// import functions and grab DOM elements
const numberInput = document.getElementById('numberInput');
const remainingGuessesText = document.getElementById('remainingGuesses');
const guessButton = document.getElementById('guessButton');
const resultsMessageText = document.getElementById('resultsMessage');

// initialize state
let randomNumberSelector = Math.ceil(Math.random() * 20);
let guessesRemain = 4;

// set event listeners to update state and DOM
guessButton.addEventListener('click', () => {

    const userGuess = numberInput.value;
    const tooHighMessage = `too high, try again!`;
    const tooLowMessage = `too low, try again!`;
    const correctAnswerMessage = `that's the number!`;
    const lostMessage = `sorry the answer was ${randomNumberSelector}, please try again.`;

    --guessesRemain
    remainingGuessesText.textContent = `Trys left: ${guessesRemain}`;

    if (userGuess < randomNumberSelector) {
        resultsMessageText.textContent = tooLowMessage;
    }
    else if (userGuess > randomNumberSelector) {
        resultsMessageText.textContent = tooHighMessage;
    }
    else if (userGuess == randomNumberSelector) {
        resultsMessageText.textContent = correctAnswerMessage;
        remainingGuessesText.hidden = true;
        guessButton.disabled = true;
    }
    else {
        guessesRemain === 0
        guessButton.disabled = true;
        resultsMessageText.textContent = lostMessage;
    };

    console.log(randomNumberSelector);
});
