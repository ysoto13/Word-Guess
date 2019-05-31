var word = [" avocado", " cake", " coconut", " cookies", " gummies", " macaroon", " mango", " watermelon"];

var victory = 0;
var remaining = 10;
var guessed = [];

var userPicks =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v","w", "x", "y", "z",];
var userGuess = '';

// var avocado = 7;
// var cake = 4;
// var coconut = 7;
// var cookies = 7;
// var gummies = 7;
// var macaroon = 8;
// var mango = 5;
// var watermelon = 10;

function userSelect() {
    userGuess =
        userPicks[(Math.random() * userPicks.length)]
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

console.log(userGuess)

document.onkeyup = function(event) {
    remaining--;

    var userGuess = event.key.toLowerCase();
    guessed.push(userGuess);

    updatedScores();

    if ((guesssed === "avocado") || (guesssed === "cake") || (guesssed === "coconut") || (guesssed === "cookies") || (guesssed === "gummies") || (guesssed === "macaroon") || (guesssed === "mango") || (guesssed === "watermelon"))
     {
    victory++
        updatedScores()
        resetScores()
        userSelect()
    } else (userGuess === userSelect)

    }

    if (remaining ===0) {
        updatedScores()
        resetScores()
    }


// I got stuck with my javscript and didn't know what next steps I had to take. I also had a bad time managing my time between school and work so I was only able to work on it for only one day. I didn't want to turn in nothing so I turned in something. 