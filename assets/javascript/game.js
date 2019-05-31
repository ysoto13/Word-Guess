var word = [" avocado", " cake", " coconut", " cookies", " gummies", " macaroon", " mango", " watermelon"];

var victory = 0;
var remaining = 10;
var guessed = [];

var userPicks =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v","w", "x", "y", "z",];
var userGuess = '';

function userSelect() {
    userGuess =
        word[(Math.random() * word.length)]
}

function updatedScores() {
    document.querySelector("#victory").innerHTML = victory;
    document.querySelector("#remaining").innerHTML = remaining;
    document.querySelector("#guessed").innerHTML = guessed;

}

function resetScores() {
    word = 0;
    remaining = 10;
    guessed = [];
}

userSelect();

document.onkeyup = function(event) {
    remaining--;

    var guessingWord = event.key.toLowerCase();
    guessed.push(guessingWord);

    updatedScores();

    if ((guesssed === "avocado") || (guesssed === "cake") || (guesssed === "coconut") || (guesssed === "cookies") || (guesssed === "gummies") || (guesssed === "macaroon") || (guesssed === "mango") || (guesssed === "atermelon"))
     {
        victory++
        updatedScores()
        resetScores()
        userSelect()
    }

}