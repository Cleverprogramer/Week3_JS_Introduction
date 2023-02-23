/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task: Convert to Arrow Function  🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Take the commented ES5 syntax and convert it to ES6 arrow Syntax


/*

------------
function myFunction() {
console.log("Function was invoked!");
};



myFunction();
----------------

let anotherFunction = function (param) {
  return param;
};

anotherFunction("Example");

---------------

let add = function (param1, param2) {
  return param1 + param2;
};

add(1,2);

*/
let myFunction = () => {
  console.log("Function was invoked!");
};
myFunction();


const anotherFunction = (param) => {
  return param;
};
console.log(anotherFunction("Example"));


let add = (param1, param2) => {
  return param1 + param2;
};

console.log(add(1, 2))


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task: Rock, Paper, Scissors - Let's play against the computer! 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

/*
Create a global variable that randomly generates the computer's choice
Use Math.random to determine the computers choice (Math.random gives a random number between 0 and 1)
HINT: While you can complete this with only conditionals based on strings, it may help to equate choice to a number when using Math.random()
Use the game function below to do the following:
  1. Receive 2 parameters the user's choice and the computer's choice
  2. Return whether the user won, lost, or tied based on these rules of the game described below - the strings returned need to match the strings below exactly.
   - win should return "you win!"
   - lose should return "you lose!"
   - tie should return "it's a tie"
  
  RULES OF THE GAME: Scissors beats Paper | Paper beats Rock | Rock beats Scissors | Or there's a tie
  
  HINT: Remember that the order in which we pass in our arguments matters when it comes to parameters
*/

let RandomChoise = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
// let computerChoise = prompt('Do you choose rock, paper or scissors');
// GETTING USER INPUT
let choices = ["rock", "paper", "scissors"];
const userInput = prompt("Do you choose rock, paper or scissors?").toLocaleLowerCase();
if (userInput === "paper" || userInput === "rock" || userInput === "scissors") {
  console.log("You chose " + `${userInput}`);
} else {
  console.log("Error! Try again!");
}

// GETTING COMPUTER INPUT
const computerInput = choices[Math.floor(Math.random() * 3)];
console.log("Computer chose" + ` ${computerInput}`);

if (computerInput <= 0.33) {
  computerInput = "rock";
}
if (computerInput >= 0.67) {
  computerInput = "paper";
}
if (computerInput >= 0.66) {
  computerInput = "scissors";
}

function game(user, computer) {
  if (user === "rock" && computer === 'paper') {
    console.log('You win! Rock beats paper!');
  } else if (user === 'rock' && computer === 'rock') {
    console.log('Its a tie!');
  } else if (user === 'rock' && computer === 'scissors') {
    console.log('You win! Rock beats scissors!');
    // User Chooses Paper
  } else if (user === "paper" && computer === 'rock') {
    console.log('You win! Rock beats paper!');
  } else if (user === 'paper' && computer === 'paper') {
    console.log('Its a tie!');
  } else if (user === 'paper' && computer === 'scissors') {
    console.log('You lose! Scissors beats paper!');
    // User Chooses Scissors
  } else if (user === "scissors" && computer === 'rock') {
    console.log('You lose! Rock beats scissors!');
  } else if (user === 'scissors' && computer === 'paper') {
    console.log('You win! Scissors beats paper!');
  } else {
    console.log('It is a tie!');
  }
}
