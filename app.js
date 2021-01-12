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

    if (userGuess < randomNumberSelector) {
        resultsMessageText.textContent = tooLowMessage;
    }
    else if (userGuess > randomNumberSelector) {
        resultsMessageText.textContent = tooHighMessage;
    }
    else if (userGuess == randomNumberSelector) {
        resultsMessageText.textContent = correctAnswerMessage;
    };

    remainingGuessesText.textContent = guessesRemain--;

    console.log(randomNumberSelector);
})

//     - addEventListener to the submit button

        // remaining guesses decrease by 1 (--)

        // update view
           // if guess is < n display 'too high' in results span
            // if guess is > n display 'too low' in results span
            // if guess is correct party!
                // disable input
        // disable input if run out of guesses + loser message.