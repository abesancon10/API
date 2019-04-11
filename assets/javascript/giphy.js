var computerChoices = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
var win = 0;
var losses = 0;
var guessLeft = 9;
var guessChoices = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

document.onkeyup = function(event) {
  var userGuess = event.key;

  var computerAnswer =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
  //causes answer to change every time a button is clicked

  document.querySelector("#guess").innerHTML = userGuess;

  if (userGuess === computerAnswer) {
    win++;
    guessLeft = 9;
  }
  if (userGuess !== computerAnswer) {
    document.querySelector("#numLeft").innerHTML = guessLeft--;
  }

  if (guessLeft === -1) {
    losses++;
    guessLeft = 9;
  }

  document.querySelector("#lose").innerHTML = losses;
  document.querySelector("#win").innerHTML = win;

  console.log(guessLeft);
  console.log(userGuess);
  console.log(win);
  console.log(losses);
  console.log(computerAnswer);
};
