const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length
  
  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'es un empate!'
  }
  if (computerChoice === 'rock' && userChoice === "paper") {
    result = 'ganaste!'
  }
  if (computerChoice === 'rock' && userChoice === "scissors") {
    result = 'perdiste!'
  }
  if (computerChoice === 'paper' && userChoice === "scissors") {
    result = 'ganaste!'
  }
  if (computerChoice === 'paper' && userChoice === "rock") {
    result = 'perdiste!'
  }
  if (computerChoice === 'scissors' && userChoice === "rock") {
    result = 'ganaste!'
  }
  if (computerChoice === 'scissors' && userChoice === "paper") {
    result = 'perdiste!'
  }
  resultDisplay.innerHTML = result
}