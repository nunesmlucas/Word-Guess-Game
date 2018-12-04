var artistChoices = ["coldplay", "madonna", "dave matthews band", "mumford and sons", "logic", "conro"];
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

var userText = document.getElementById("user-text");
userText.textContent = hangJoin;

var letters = /^[a-zA-Z]+$/;
var letterArray = [];
var lettersGuessed;
var keyHolder;
var isDuplicate = false;
var winWord;
var lowerWinWord;



document.onkeydown = function (event) {
    keyholder = event.key.toLowerCase();
    resetFunction();
    letterChecker();
    // checkDuplicate();
    replaceStrokes();
    checkWin();
};

function checkWin() {
    if (lowerWinWord == randChoice) {
        winsAdded++;
    }
    var winField = document.getElementById("wins");
    winField.textContent = winsAdded;
}

function resetFunction() {
    document.getElementById("announcement").innerHTML = "";
}

function checkDuplicate() {
    for (var i = 0; i < letterArray.length; i++) {
        console.log("INSIDE CHECK DUP FOR LOOP " + keyholder);
        console.log("INSIDE CHECK DUP FOR LOOP LETTERARRAY[i]: " + letterArray);

        if (letterArray[i] == (" " + keyholder)) {
            console.log("INSIDE FOR/IF LOOP CHECK DUP: " + letterArray[i]);
            // alert("this is a duplicate: " + letterArray[i]);
            console.log(letterArray);
            letterArray.splice(i);
            break;
        }
    }
}

function letterChecker() {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        checkDuplicate();
        letterArray.push(" " + keyholder);
        console.log("KEYHOLDER: " + keyholder);
        console.log(letterArray);
        lettersGuessed = document.getElementById("guessed-letters");
        lettersGuessed.textContent = letterArray.toString().toUpperCase();
    }
    else {
        announcementText = document.getElementById("announcement");
        announcementText.textContent = ("Please enter a valid letter.");
    }
}

function replaceStrokes() {
    for (var l = 0; l < randLetters.length; l++) {
        if ((randLetters[l].match(keyholder)) && (randLetters[l] = "_")) {
            hangHold[l] = (keyholder.toUpperCase());
            console.log("RANDLETTER[l]:--> " + randLetters[l] + " -- KEYHOLDER --> " + keyholder);
            console.log("HANGHOLD[l]: ---> " + hangHold[l]);
        }
        console.log("UPDATED: -->>" + hangHold);
        userText.textContent = hangHold.join("");
        winWord = hangHold.join("");
        lowerWinWord = winWord.toLowerCase();
    }
    // checkWin(lowerWinWord);
}


