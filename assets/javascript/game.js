var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var animals = ["Dolphin", "Shark", "Turtle", "Jellyfish", "Eel", "Coral", "Barnacle", "Fish", "Mermaid"]
var chosenWord; // Animal selected to be guessed
var guessedLetter; // Currently guessed letter
var lettersGuessed = []; // Array to store letters that have been guessed by user
var losses = 0;
var wins = 0;
var startingGuesses = 12;


window.onload = function () {
    gameInitalLoad();

}

document.onkeyup = function (event) {
    // If the key pushed is not a letter, prompt user to choose another letter
    if (!alphabet.includes(event.key)) {
        alert("Please select a letter a-z");
    }

    // If the letter pushed was already guessed, prompt user to choose another letter
    if (lettersGuessed.includes(event.key)) {
        alert("You already guessed this letter");
    }

    // Else, add the letter to the lettersGuessed[]
    else {
        console.log(event.key);
        lettersGuessed.push(event.key);
        guessedLetter.innerText = lettersGuessed;
    }
}

// Start of game
function gameInitalLoad() {

    // Used to hide the animal chosen
    var hideWord = [];

    // Test for displaying chosenWord on screen
    var hidden = document.getElementById("guessedWord");

    // Generate a random number between 0 and length of animals[]
    var index = Math.floor(Math.random() * animals.length);

    // set chosenWord to randomly selected animal
    chosenWord = animals[index];
    // console.log(chosenWord);

    // get the id "guessedLetters from the index.html to display guessedLetter"
    guessedLetter = document.getElementById("guessedLetters");

    // Creating a loop to hide the letters of the selected animal from animals[]
    for (var i = 0; i < chosenWord.length; i++) {
        hideWord[i] = "-";
    }

    // Display dashes to screen
    hidden.innerHTML = hideWord.join("");
}




    // var wordContainer = document.getElementById("animals");

    // chosenWord = animals[Math.floor(Math.random() * animals.length)];

    // chosenLetters = chosenWord.split("");


    // wordContainer.innerHTML = "";

    // //document.onkeyup = function(event)

    // document.getElementById("").innerHTML = startingGuesses;

    // document.getElementById("points").innerHTML = wins;

    // document.getElementById("won").removeAttribute('style');

    // document.getElementById("losses").innerHTML = losses;





