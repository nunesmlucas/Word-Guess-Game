
// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var artistChoices = ["Coldplay", "Madonna", "Dave Matthews Band", "Mumford and Sons", "Logic", "Conro"];
console.log(artistChoices);


var randChoice = artistChoices[Math.floor(Math.random() * artistChoices.length)];
console.log(randChoice);


var randLetters = randChoice.split("");
console.log("RANDOM LETTERS: " + randLetters);



var hangHold = [];
for (var i = 0; i < randLetters.length; i++) {
    if (randLetters[i] === " ") {
        hangHold.push(" ");
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
