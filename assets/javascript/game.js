window.onload = function () {

    var artistChoices;
    // console.log(artistChoices);
    var winsAdded = 0;
    var randChoice;
    // console.log(randChoice);
    var randLetters;
    // console.log("RANDOM LETTERS: " + randLetters);
    var letterArray = [];
    var lettersGuessed;
    var winWord;
    var lowerWinWord;




    play = function () {

        artistChoices = ["coldplay", "madonna", "dave matthews band", "mumford and sons", "logic", "conro"];
        randChoice = artistChoices[Math.floor(Math.random() * artistChoices.length)];
        randLetters = randChoice.split("");
        winsAdded = 0;


        var hangHold = [];
        for (var i = 0; i < randLetters.length; i++) {
            if (randLetters[i] === " ") {
                hangHold.push(" ");
            }
            else {
                hangHold.push("_");
            }
        }

        console.log(hangHold);
        console.log("HANGHOLD JOIN HERE: " + hangHold.join(""));
        var hangJoin = hangHold.join("");

        var userText = document.getElementById("user-text");
        userText.textContent = hangJoin;

        document.onkeydown = function (event) {
            keyholder = event.key.toLowerCase();
            resetFunction();
            letterChecker();
            replaceStrokes();
            checkWin();

        };

        function checkWin() {
            if (lowerWinWord === randChoice) {
                winsAdded++;
                play();
            }
            var winField = document.getElementById("wins");
            winField.textContent = winsAdded;
        };

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
        function resetFunction() {
            document.getElementById("announcement").innerHTML = "";
        }
        function checkDuplicate() {
            for (var i = 0; i < letterArray.length; i++) {
                console.log("INSIDE CHECK DUP FOR LOOP " + keyholder);
                console.log("INSIDE CHECK DUP FOR LOOP LETTERARRAY[i]: " + letterArray);

                if (letterArray[i] == (" " + keyholder)) {
                    console.log("INSIDE FOR/IF LOOP CHECK DUP: " + letterArray[i]);
                    console.log(letterArray);
                    letterArray.splice(i, 1);
                    break;
                }
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
        };
    };
    play();
};

