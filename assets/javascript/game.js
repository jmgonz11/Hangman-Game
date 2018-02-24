var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var animals = ["Dolphin", "Shark", "Turtle", "Jellyfish", "Eel", "Coral", "Barnacle", "Fish", "Mermaid"]
var restartBtn = document.getElementById("restart"); // Button to restart game
var chosenWord = []; // Animal selected to be guessed
var guessedLetter; // Currently guessed letter
var hideWord = []; // Used to hide the animal chosen
var lettersGuessed = []; // Array to store letters that have been guessed by user
var losses = 0;
var wins = 0;
var startingGuesses;

// Variables to manipulate the DOM
var guesses = document.getElementById("guessesRemaining"); // Used to show remaining guesses
var hidden = document.getElementById("guessedWord"); // Used to hide chosen animal

// When page loads, run function to start game
window.onload = function () {
    gameInitalLoad();
}

// Event handler for key press triggers
document.onkeyup = function (event) {
    // If the key pushed is not a letter, prompt user to choose another letter
    if (!alphabet.includes(event.key)) {
        alert("Please select only letters A-Z");
    }

    // If the letter pushed was already guessed, prompt user to choose another letter
    if (lettersGuessed.includes(event.key)) {
        alert("You already guessed that letter!");
    }

    // Else, add the letter to the lettersGuessed[]
    else {
        console.log(event.key);
        lettersGuessed.push(event.key);
        guessedLetter.innerText = lettersGuessed;
    }
    // Check to see if letter exist in current word
    showWord(event.key);
}

// Button to restart game;
restartBtn.onclick = function () {
    wins = 0;
    losses = 0;
    gameInitalLoad();
}

// Start of game
function gameInitalLoad() {

    // Generate a random number between 0 and length of animals[]
    var index = Math.floor(Math.random() * animals.length);

    startingGuesses = 12;
    guesses.innerHTML = startingGuesses;

    // set chosenWord to randomly selected animal
    chosenWord = animals[index];
    // console.log(chosenWord);

    // Initialize arrays to be used for manipulating the DOM
    hideWord = [];
    lettersGuessed = [];

    // get the id "guessedLetters from the index.html to display guessedLetter"
    guessedLetter = document.getElementById("guessedLetters");

    // Creating a loop to hide the letters of the selected animal from animals[]
    for (var i = 0; i < chosenWord.length; i++) {
        hideWord[i] = "-";
    }

    // Display dashes to screen
    hidden.innerHTML = hideWord.join("");
    return;
}


// Function that reveals the letter when a user presses a key
function showWord(letter) {

    console.log(chosenWord);
    // Check if current letter exists
    for (var i = 0; i < chosenWord.length; i++) {
        // If the letter exists, display it on screen
        if (chosenWord[i].toLowerCase() === letter) {
            hideWord[i] = letter;
            hidden.innerHTML = hideWord.join("");
        }
    }

    // If the letter doesn't exist, decrement the guess counter
    if (!chosenWord.includes(letter)) {
        startingGuesses--;
        guesses.innerHTML = startingGuesses;

        // If there are no remaining guesses, show the word on screen
        if (startingGuesses === 0) {
            losses++;
            alert("game over");
            hidden.innerHTML = chosenWord;
            //gameInitalLoad();
        }
        // If all of the letters have been guessed, increment wins by 1
        else if (!hideWord.includes("-") && guesses > 0) {
            wins++;
            var showWins = document.getElementById("wins");
            showWins.innerHTML = wins;
        }
    }
}

//Psuedo Code

// Tried the below functions and took them out. Below is what else I need to do to make this function: 

// have letters pop up on screen after turn is over

//screen needs to recognize when the turn is over and when the game is over

//need to create a next stage for when the player loses or runs out of guesses

//when a word is guessed correctly, the screen needs to go to the next round


    // var wordContainer = document.getElementById("animals");

    // chosenWord = animals[Math.floor(Math.random() * animals.length)];

    // chosenLetters = chosenWord.split("");


    // wordContainer.innerHTML = "";

    // //document.onkeyup = function(event)

    // document.getElementById("").innerHTML = startingGuesses;

    // document.getElementById("points").innerHTML = wins;

    // document.getElementById("won").removeAttribute('style');

    // document.getElementById("losses").innerHTML = losses;






    // document.getElementById("gameover").removeAttribute('style');
    // chosenWord = animals[Math.floor(Math.random() * animals.length)].toLowerCase();


    // for (i = 0; i < lettersGuessed.length; i++) {

    //     var tile = document.createElement("span");
    //     tile.className = lettersGuessed[i] + 'You Lost!';
    //     if (lettersGuessed[i] == " ") {
    //         tile.className = "animals";
    //     }
    //     tile.innerHTML = "<b>" + chosenLetters[i] + "</b>";
    //     wordContainer.appendChild(tile);
    // }



    // function gameinitalLoad() {

    //     document.onkeyup = function (event) {

    //         if (incorrect > 0) {
    //             var event = window.event;
    //             var inputLetter = event.key;

    //             if (alphabet.indexOf(inputLetter) > -1) {


    //                 var used = chosenLetters.indexOf(chosenLetter);


    //                 if (used === -1) {
    //                     chosenLetters.push(chosenLetter);

    //                     var history = chosenLetters.join(" ");
    //                     document.getElementById("history").innerHTML = history;


    //                     if (chosenLetters.indexOf(inputLetter) > -1) {
    //                         var spans = document.getElementsByClassName(chosenLetter);

    //                         for (i = 0; i < spans.length; i++) {
    //                             var classes = inputLetter + "bar";
    //                             spans[i].className = classes;
    //                         }


    //                         var remainingLetters = document.getElementsByClassName("You Lost!");
    //                         if (remainingLetters.length == 0) {
    //                             wins = wins + 1;
    //                             document.getElementById("Correct Lines").innerHTML = wins;


    //                             document.getElementById("won").style.display = "block";
    //                             endGame();

    //                         }

    //                     }
    //                     else {
    //                         incorrect = incorrect - 1;
    //                         document.getElementById("incorrect").innerHTML = incorrect;
    //                         if (incorrect == 0) {

    //                             document.getElementById("lost").style.display = "block";
    //                             losses = losses + 1;
    //                             document.getElementById("losses").innerHTML = losses;
    //                             endGame();

    //                         }
    //                     } // end else
    //                 }
    //             }
    //         }
    //     }
    // }


 

