
window.addEventListener("load", function (event) {
    console.log("All resources finished loading!");
    var userText = document.getElementById("user-text");
    userText.textContent = htest;
});

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

//Increases Wins value by 1. 
document.onkeyup = function () {
    console.log(event);
    winsAdded++;
    console.log(winsAdded);
    var winsScore = document.getElementById("wins");
    winsScore.textContent = winsAdded;
};

