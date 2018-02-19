window.onload = function() {
  setUpRound();
}
var words = ["Dolphin", "Shark", "Turtle", "Jellyfish", "Eel", "Coral", "Barnacle", "Fish", "Mermaid"]

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]



// variables that are global 
var chosenWord;
var chosenletters = [];
var guessedLetters = [];
var incorrect;
var wins = 0;
var losses = 0;



function setUpRound() {

  var wordContainer = document.getElementById("guessedWord"); 

  wordContainer.innerHTML = "";

  document.getElementById("history").innerHTML = '';

  document.getElementById("points").innerHTML = wins;

  document.getElementById("losses").innerHTML = losses;

  document.getElementById("gameover").removeAttribute('style');

  document.getElementById("won").removeAttribute('style');

  chosenWord = words[Math.floor(Math.random() * words.length)].toLowerCase();

  chosenLetters = chosenWord.split(""); 
  
  guessedLetters = [];
  

  incorrect = 7; 
  

  document.getElementById("incorrect").innerHTML = incorrect;


  for ( i = 0; i < activeLetters.length; i++ ) {

    var tile = document.createElement("span");
    tile.className = activeLetters[i] + 'You Lost!';
    if ( activeLetters[i] == " " ) {
      tile.className = "bar"; 
    } 
    tile.innerHTML = "<b>" + chosenLetters[i] + "</b>";
    wordContainer.appendChild(tile); 
  } 
} 



function picks() {
  if(incorrect > 0) {
    var event = window.event;
    var inputLetter = event.key;

    if(alphabet.indexOf(inputLetter) > -1) { //check if input is a letter in the alphabet

      //Checking to see if the inputted letter has been used during this round
      var used = chosenLetters.indexOf(inputLetter);

      //If letter has not been used
      if ( used === -1 ) {
        chosenLetters.push(inputLetter);
        //Update the history div
        var history = chosenLetters.join(" ");
        document.getElementById("history").innerHTML = history;

        //If the letter is correct then show the tile
        if (chosenLetters.indexOf(inputLetter) > -1 ) {
          var spans = document.getElementsByClassName(inputLetter);

          for ( i = 0; i < spans.length; i++ ) {
            var classes = inputLetter + "bar";
            spans[i].className = classes;
          } 

         
          var remainingLetters = document.getElementsByClassName("You Lost!");
          if ( remainingLetters.length == 0 ) {
            wins = wins + 1;
            document.getElementById("Correct Lines").innerHTML = wins;

              //Show the Game Over div
              document.getElementById("won").style.display = "block";
              countDown();

          }

           } 
        else {
          incorrect = incorrect - 1;
          document.getElementById("incorrect").innerHTML = incorrect;
          if ( incorrect == 0 ) {
           
            document.getElementById("lost").style.display = "block";
            losses = losses + 1;
            document.getElementById("losses").innerHTML = losses;
            countDown();

          }
        } // end else

      }
    }
  }
}

function countDown() {
  var counter = 3;
  var countDown = document.getElementById("countDown");
  countDown.innerHTML = "The next round will start in 3 seconds.";
  var id;


  id = setInterval(function() {
      counter--;
      if(counter < 0) {
        countDown.innerHTML = '';
        setUpRound();
        clearInterval(id);
      } else {
          countDown.innerHTML = "The next round will start in " + counter.toString() + " seconds.";
      }
  }, 1000);
}