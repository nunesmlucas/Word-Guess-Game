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
    var historyArray = [];
    historyArray.length = 3;
    historyText = document.getElementById("history-text");
    historyText.textContent = ("Winning word: " + historyArray[0]);




    play = function () {

        artistChoices = ["coldplay", "madonna", "dave matthews band", "mumford and sons", "logic", "conro"];
        randChoice = artistChoices[Math.floor(Math.random() * artistChoices.length)];
        randLetters = randChoice.split("");

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
            resetAnnouncement();
            letterChecker();
            replaceStrokes();
            checkWin();
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
        function resetAnnouncement() {
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
        }
        function showHistory() {
            historyArray.push(winWord);
            console.log("HISTORY ARRARY AFTER WIN: " + historyArray[0]);

        }
        function checkWin() {
            if (lowerWinWord === randChoice) {
                winsAdded++;
                console.log("WINS ADDED IN CHECK WIN AFTER :" + winsAdded);
                // historyArray.push(winWord);
                showHistory();
                resetGame();
            }
            else if (letterArray.length == 15) {
                alert("Sorry you have guessed 15 times and have lost");
                resetGame();
            }
            var winField = document.getElementById("wins");
            winField.textContent = winsAdded;
        };

        function resetGame() {
            artistChoices = [];
            randChoice = "";
            randLetters = "";
            hangHold = [];
            // console.log(hangHold);
            // console.log("HANGHOLD JOIN HERE: " + hangHold.join(""));
            var hangJoin = "";
            var userText = document.getElementById("user-text");
            userText.textContent = hangJoin;
            lettersGuessed.textContent = "";
            letterArray = [];

            play();
        }
    };
    play();
};

