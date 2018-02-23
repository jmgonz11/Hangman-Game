window.onload = function() {
  gameinitalLoad();
}
var words = ["Dolphin", "Shark", "Turtle", "Jellyfish", "Eel", "Coral", "Barnacle", "Fish", "Mermaid"]

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]



// variables that are global 


var chosenWord = "";
var chosenLetters = [];
var guessedLetters = [];
var spaces = 0;
var incorrect = [];
var letterguessed = "";


var wins = 0;
var losses = 0;
var startingGuesses = 12



function gameinitalLoad() { //starts the game

  var wordContainer = document.getElementById("words"); 

  chosenWord = words[Math.floor(Math.random() * words.length)];

  chosenLetters = chosenWord.split("");


  wordContainer.innerHTML = "";

  //document.onkeyup = function(event)

  document.getElementById("").innerHTML = startingGuesses;

  document.getElementById("points").innerHTML = wins;
  
  document.getElementById("won").removeAttribute('style');

  document.getElementById("losses").innerHTML = losses;




  }

  // document.getElementById("gameover").removeAttribute('style');


  // chosenWord = words[Math.floor(Math.random() * words.length)].toLowerCase();

  chosenLetters = chosenWord.split(""); 
  
  guessedLetters = [];
  

  incorrect = []; 
  

  document.getElementById("incorrect").innerHTML = incorrect;


  for ( i = 0; i < guessedLetters.length; i++ ) {

    var tile = document.createElement("span");
    tile.className = guessedLetters[i] + 'You Lost!';
    if ( guessedLetters[i] == " " ) {
      tile.className = "words"; 
    } 
    tile.innerHTML = "<b>" + chosenLetters[i] + "</b>";
    wordContainer.appendChild(tile); 
  } 
} 



function gameinitalLoad() {

  document.onkeyup = function(event){

  if(incorrect > 0) {
    var event = window.event;
    var inputLetter = event.key;

    if(alphabet.indexOf(inputLetter) > -1) { 


      var used = chosenLetters.indexOf(chosenLetter);

    
      if ( used === -1 ) {
        chosenLetters.push(chosenLetter);
  
        var history = chosenLetters.join(" ");
        document.getElementById("history").innerHTML = history;

      
        if (chosenLetters.indexOf(inputLetter) > -1 ) {
          var spans = document.getElementsByClassName(chosenLetter);

          for ( i = 0; i < spans.length; i++ ) {
            var classes = inputLetter + "bar";
            spans[i].className = classes;
          } 

         
          var remainingLetters = document.getElementsByClassName("You Lost!");
          if ( remainingLetters.length == 0 ) {
            wins = wins + 1;
            document.getElementById("Correct Lines").innerHTML = wins;

        
              document.getElementById("won").style.display = "block";
              endGame();

          }

           } 
        else {
          incorrect = incorrect - 1;
          document.getElementById("incorrect").innerHTML = incorrect;
          if ( incorrect == 0 ) {
           
            document.getElementById("lost").style.display = "block";
            losses = losses + 1;
            document.getElementById("losses").innerHTML = losses;
            endGame();

          }
        } // end else
      }
      }
    }
  }
}


function endGame() {
  var counter = 3;
  var countDown = document.getElementById("countDown");
  countDown.innerHTML = "Start over! Next game starts in 3 seconds!";
  var id;


  id = setInterval(function() {
      counter--;
      if(counter < 0) {
        countDown.innerHTML = '';
        gameinitalLoad();
        clearInterval(id);
      } else {
          countDown.innerHTML = "Next Round starts in " + counter.toString() + " seconds.";
      }
  }, 1000);
}