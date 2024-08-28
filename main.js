  // this function randomly returns rock, paper, scissors
function getComputerChoice() {
  let computerOptions = ["rock", "paper", "scissors"];
  let randomNumbers = Math.floor(Math.random() * computerOptions.length);

  if (randomNumbers === 0) {
    return "rock";
  } else if (randomNumbers === 1) {
    return "paper";
  } else if (randomNumbers === 2) {
    return "scissors";
  }
}

    // this function gets users input by prompting them with a text//
function getHumanChoice() {
   let userChoice = prompt("Rock, Paper, or Scissors?");
   return userChoice.toLowerCase();
}

    // variables to keep track of the score

    // add function to initialize game

function playRound(humanChoice, computerChoice) {

    if (computerChoice === "rock" && humanChoice == "paper") {
      console.log("you win! paper beats rock.");
      return "human";
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
      console.log("you win! scissors beat paper");
      return "human";
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
      console.log("you win! rock beats scissors");
      return "human";
    } else if (computerChoice === humanChoice) {
      console.log("its a flickin tie");
      return "tie";
    } else {
      console.log("You Lose");
      return "computer";
    }
}
    // playRound(humanChoice, computerChoice);

    function playGame() {
      let humanScore = 0;
      let computerScore = 0;

        while (humanScore < 5 && computerScore < 5) {
          let humanChoice = getHumanChoice();
          let computerChoice = getComputerChoice();
          let result = playRound(humanChoice, computerChoice);

          if (result === "human") {
            humanScore++;
          } else if (result === "computer") {
            computerScore++;
          }
  
          console.log(`Score: Human ${humanScore} - Computer ${computerScore}`)
          }

          if (humanScore === 5) {
            alert("Game Over, panalo ka")
          } else if (computerScore === 5) {
            alert("Game Over, talo ka")
          }
        }

        playGame();
    