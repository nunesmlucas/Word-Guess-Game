
window.addEventListener("load", function (event) {
    console.log("All resources finished loading!");
    var userText = document.getElementById("user-text");
    userText.textContent = hangJoin;
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
        hangHold.push("  ");
    }
    else {
        hangHold.push(" _ ");
    }
}

console.log(hangHold);
console.log("HANGHOLD JOIN HERE: " + hangHold.join(""));
var hangJoin = hangHold.join("");

//Increases Wins value by 1. 
// document.onkeyup = function () {
//     console.log(event);
//     winsAdded++;
//     console.log(winsAdded);
//     var winsScore = document.getElementById("wins");
//     winsScore.textContent = winsAdded;
// };

var letters = /^[A-Za-z]+$/;
var letterArray = [];
var lettersGuessed;
var keyHolder;


// document.onkeyup = function () {
// if (e.keyCode == 13) {
document.onkeydown = function (event) {
    console.log(event);
    keyholder = event.key;
    if (keyholder.match(letters)) {
        letterArray.push("  " + keyholder);
    }
    else {
        alert("Please enter letters only!");
    }
    // letterArray.push("  " + event.key);
    console.log(letterArray);
    lettersGuessed = document.getElementById("guessed-letters");
    lettersGuessed.textContent = letterArray.toString().toUpperCase();
//
    for(var l =0; l<randLetters.length; l++){
        if(randLetters[l].match(keyholder)){
            hangHold[l] = (keyholder);
            console.log("RANDLETTER[l]:--> "+randLetters[l] + " -- KEYHOLDER --> "+ keyholder);
            console.log("HANGHOLD[l]: ---> " + hangHold[l]);
        }
        console.log("UPDATED: -->>" + hangHold);
    }
};

    // }
// }



