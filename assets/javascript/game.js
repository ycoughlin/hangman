// array - alphabet
// theme - nerdstuff I like - yes, that is the theme
// categories - Tabletop RPGs, Graphic Novels
// Tabletop RPGs - Dungeons-and-Dragons, Call-of-Cthulhu, Burning-Wheel, Polyhedral Dice, Warhammer-Forty-K, Apocolypse-World, Everyone-is-John, Fung-Shui, Numenera,
// Comics & Graphic Novels - Freakangels, Monstress, Rat-Queens, Morning-Glories, Scott-Pilgrim, The-Sandman, Lucifer, The-Wicked-and-The-Divine, Saga
// Hints1 - 'Gary Gygax', 'Based on H.P. Lovecraft', 'Created by Luke Crane, designed to make you cry', 'Used in most Tabletop RPGs', 'A space odyssey focused on military tactics', 'Set after a catastrophic event, this RPG puts an emphasis on collective storytelling', 'A casual party game where everyone is schizophrentic', 'A game where you can pretend to be in a Jackie Chan movie', 'Earth a billion years from now'
// Hints2 - 'Written by Warren Ellis, this webcomic takes place in post-apocalyptic Whitechapel', 'Written by Marjorie Liu, this graphic novel takes place in an alt-Asia where magic runs wild', 'Written by Kurtis Wiebe, this graphic novel features an all female adventuring party', 'Written by Nick Spencer, this strange graphic novel revolves around a group of students stuck in a sadistic boarding school', 'Written by Bryan Lee OMalley, this graphic novel was later turned into a movie about a slacker trying to level up in the world', 'Written by Neil Gaiman, this comic starts with the escape of Dream from a 70 year imprisonment', 'This comic inspired a terrible Fox television show rip-off', 'Written by Kieron Gillen, this contemporary fantasy comic involves the reincarnation of ancient deities', 'This comic written by Brian K. Vaughan is heavily influenced by Star Wars involves a family fleeing from galactic war'


// Variables
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z', "_"];

// Things I probably need
// var categories ;        
// var chosenCategory;     
// var getHint ;           
// var word ;              
// var guess ;        
// var storeGuess = [];     
// var lives = ;            
// var counter ;           
// var space;   

var selectedWord = "";
var lettersWord = [];
var numBlanks = 0;
var correctGuess = [];
var wrongGuess = [];           

// Catergory words
var categories = ['Tabletop RPGs', 'Comics annd Graphic Novels'];
var rpgWords = ['Dungeons and Dragons', 'Call of Cthulhu', 'Burning Wheel', 'Polyhedral Dice', 'Warhammer Forty K', 'Apocolypse World', 'Everyone is John', 'Fung Shui', 'Numenera'];
var comicWords = ['Freakangels', 'Monstress', 'Rat Queens', 'Morning Glories', 'Scott Pilgrim', 'The Sandman', 'Lucifer', 'The Wicked and The Divine', 'Saga'];

// Game Counters
var winCount = 0;
var lossCount = 0;
var livesLeft = 10;


// For-loop buttons

var buttons = function(){
	myButtons = document.getElementById('buttons');
	letters = document.createElement('ul');

	for (var i = 0; i < alphabet.length; i++) {
		letters.id = 'alphabet';
		list = document.createElement('li');
		list.id = 'letter';
		list.innerHTML = alphabet[i];
		check();
		myButtons.appendChild(letters);
		letters.appendChild(list);
	}
}

// Select Category
  var selectCat = function () {
    if (chosenCategory === categories[0]) {
      catagoryName.innerHTML = "The Chosen Category Is Premier League Football Teams";
    } else if (chosenCategory === categories[1]) {
      catagoryName.innerHTML = "The Chosen Category Is Films";
    } else if (chosenCategory === categories[2]) {
      catagoryName.innerHTML = "The Chosen Category Is Cities";
    }
  }

  // Create geusses ul
   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      geusses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
// Functions
// document.onkeyup= function startGame(event) {
// 	// body...
// 	var key = event.key;
// }

function startGame () {
	selectedWord = rpgWords[Math.floor(Math.random()*rpgWords.length)];
	lettersWord = selectedWord.split("");
	numBlanks = lettersWord.length;


	// Reset
	livesLeft = 10;
	wrongGuess = [];
	correctGuess = [];

	for (var i = 0; i < numBlanks.length; i++) {
		correctGuess.push("_");
	}

	// Test
	console.log(selectedWord);
	console.log(lettersWord);
	console.log(numBlanks);
	console.log(correctGuess)

}



// Main Process
startGame();