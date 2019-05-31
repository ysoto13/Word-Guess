var victory = 0;
var word = 0;
var remaining = 10;
var guessed = [];

var userPicks =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v","w", "x", "y", "z",];
var userGuess = '';

function userSelect() {
    userGuess =
        userPicks[(Math.random() * userPicks.length)]
}

function updatedScores() {
    document.querySelector("#victory").innerHTML = victory;
    document.querySelector("#word").innerHTML = word;
    document.querySelector("#remaining").innerHTML = remaining;
    document.querySelector("#guessed").innerHTML = guessed;

}

function resetScores() {
    word = 0;
    remaining = 10;
    guessed = [];
}

userSelect();

console.log(userGuess);
