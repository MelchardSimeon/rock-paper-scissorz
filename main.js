let playerText = document.querySelector("#player-text")
let computerText = document.querySelector("#computer-text")
let result = document.querySelector("#result")

let rockButton = document.querySelector(".rock-button")
let paperButton = document.querySelector(".paper-button")
let scissorButton = document.querySelector(".scissor-button")

const btnsArray = [rockButton, paperButton, scissorButton]
let playersChoice;
let computersChoice;
let playerScore;
let computerScore;

btnsArray.forEach(button => {
  button.addEventListener('click', function() {
    playersChoice = button.textContent
    playerText.textContent = "PLAYER: " + playersChoice
    computerText.textContent = "COMPUTER: " + getComputerChoice()
    playRound(playersChoice, computersChoice)
  })
})

function getComputerChoice() {
  const choices = ["ROCK", "PAPER", "SCISSORS"]
  let randomNum = Math.floor(Math.random() * 3)
  computersChoice = choices[randomNum]
  return computersChoice
}

function playRound(playersChoice, computersChoice) {
  if ((playersChoice === "ROCK" && computersChoice === "SCISSORS") 
    || (playersChoice === "PAPER" && computersChoice === "ROCK")
    || (playersChoice === "SCISSORS" && computersChoice === "PAPER")) {
      result.textContent = "RESULT: YOU WIN!"
      return "human"
    } else if (playersChoice === computersChoice) { 
      result.textContent = "RESULT: ITS A TIE!"
      return "computer"
    } else {
      result.textContent = "RESULT: YOU LOST!"
    }
}


function playGame() {

}