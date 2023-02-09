
const computerScore = 0
const playerScore = 0
const choice = ["Rock", "Paper", "Scissor"]

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * choice.length)
  if (randomChoice === 0) {
    return "Rock"
  } else if (randomChoice === 1) {
    return "Paper"
  } else return "Scissor"
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Computer was choosed: " + computerSelection + "\nDRAW"
  } else if (playerSelection === "Rock" && computerSelection === "Scissor") {
    return (
      "Computer was choosed: " +
      computerSelection +
      "\nPlayer win | Rocks beat Scissor"
    )
  } else if (playerSelection === "Scissor" && computerSelection === "Paper") {
    return (
      "Computer was choosed: " +
      computerSelection +
      "\nPlayer win | Scissors beats Paper"
    )
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return (
      "Computer was choosed: " +
      computerSelection +
      "\nPlayer win | Paper beats Rock"
    )
  } else
    return (
      "Computer was choosed: " +
      computerSelection +
      "\nComputer Win | " +
      computerSelection +
      " beat " +
      playerSelection
    )
}

const playerSelection = prompt("Rock, Paper, Scissor")
const computerSelection = getComputerChoice()

function game() {
  for (let i = 0; i < 5; i++) {
    
  }
}

console.log(game())