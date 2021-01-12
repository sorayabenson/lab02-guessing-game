# Guess a Number App

## html
    //- Number input
        so a user can enter their guesses

    //- Button
        to submit the guess and trigger state changes

    //- Text Div
        to display remaining guesses and 

    //- Results span: Too high/too low span/you guessed correct!
        to tell the user what is wrong

stretch
    - Reset Button
        to reset the game

## java
    //- Grab dom elements
        //add ids

    - Initialized state (global lets)
        pick the random number the user needs to guess

        Math.ceil(Math.random() * 20)

        guesses remaining, start at 4

    - addEventListener to the submit button
        click should submit their answer
        remaining guesses decrease by 1 (--)
        store guess in a variable (`Number(someInput.value)`)
        compare user guess with random number
        update view
            if guess is < n display 'too high' in results span
            if guess is > n display 'too low' in results span
            if guess is correct party!
                disable input
        disable input if run out of guesses + loser message.
    
stretch
    - addEventListener to reset button
        on click reset remaining guesses to 4
        regenerate random number
        reenable input if disabled
        clear game text


