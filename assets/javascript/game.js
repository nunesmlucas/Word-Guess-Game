//When I put this section into my <script> area in my index.html it will work. 
 var userText = document.getElementById("user-text");
 userText.textContent = htest;
 //Instead it can't find/see the ID: "user-text" from the index.html file 
 // and returns null... 
//------------------------------------------------------------------


var artistChoices = ["Coldplay", "Madonna", "Dave Matthews Band", "Mumford and Sons", "Logic", "Conro"];
console.log(artistChoices);

var winsAdded = 0;

var randChoice = artistChoices[Math.floor(Math.random() * artistChoices.length)];
console.log(randChoice);


var randLetters = randChoice.split("");
console.log("RANDOM LETTERS: " + randLetters);



var hangHold = [];
for (var i = 0; i < randLetters.length; i++) {
    if (randLetters[i] === " ") {
        hangHold.push(" | ");
    }
    else {
        hangHold.push(" _ ");
    }
}

console.log(hangHold);
console.log("HANGHOLD JOIN HERE: " + hangHold.join(""));
var hangJoin = hangHold.join("");
console.log("HANGJOIN VAR: " + hangJoin);
var htest = hangJoin.toString();
console.log("HANG TEST STRING: " + htest);


// document.onkeyup = function(){
//     console.log(event);
//     winsAdded++;
//     console.log(winsAdded);
//   };