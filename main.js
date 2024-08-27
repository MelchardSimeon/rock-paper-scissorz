  // this function randomly returns rock, paper, scissors
function getComputerChoice() {
  let computerOptions = ["rock", "paper", "scissors"];
  let randomNumbers = Math.floor(Math.random() * computerOptions.length);

  if (randomNumbers === 0) {
    console.log("rock");
  } else if (randomNumbers === 1) {
    console.log("paper");
  } else if (randomNumbers === 2) {
    console.log("scissors");
  }
}

    // this function gets users input by prompting them with a text//
function getHumanChoice() {
   let userChoice = prompt("Rock, Paper, or Scissors?");
}

  console.log(getHumanChoice());

    // variables to keep track of the score
let humanScore = 0;
let computerScore = 0;

    // add function to initialize game

function playRound(humanChoice, computerChoice) {
    let humanChoice = humanChoice.toLowerCase() && humanChoice.toUpperCase;
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
}