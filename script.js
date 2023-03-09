const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    let playerSelection = "rock";
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    let playerSelection = "paper";
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    let playerSelection = "scissors";
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

// function to randomly return either ‘Rock’, ‘Paper’ or ‘Scissors'

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)];
}

// change the DOM to say the results from playRound 

const results = document.querySelector('#results');

// change the DOM to say the running scores


const runningCompScore = document.querySelector('#runningCompScore');
const runningPlayerScore = document.querySelector('#runningPlayerScore');

let computerScore = 0;
let playerScore = 0;
  
// function to play a single round of rock, paper, scissors

function playRound(playerSelection, computerSelection) {

    if (playerSelection === 'rock' && computerSelection === 'rock') {
        results.textContent = "You and the computer both chose 'rock.' It's a tie!";
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        runningCompScore.textContent = "Computer: " + ++computerScore;
        results.textContent = "You chose 'rock' and the computer chose 'paper.' You lose. Paper beats rock.";
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        runningPlayerScore.textContent = "Player: " + ++playerScore;
        results.textContent = "You chose 'rock' and the computer chose 'scissors.' You win! Rock beats scissors.";
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        runningPlayerScore.textContent = "Player: " + ++playerScore;
        results.textContent = "You chose 'paper' and the computer chose 'rock.' You win! Paper beats rock.";
    }
    else if (playerSelection === 'paper' && computerSelection === 'paper') {
        results.textContent = "You and the computer both chose 'paper.' It's a tie!";
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        runningCompScore.textContent = "Computer: " + ++computerScore;
        results.textContent = "You chose 'paper' and the computer chose 'scissors.' You lose. Scissors beats paper.";
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        runningCompScore.textContent = "Computer: " + ++computerScore;
        results.textContent = "You chose 'scissors' and the computer chose 'rock.' You lose. Rock beats scissors.";
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        runningPlayerScore.textContent = "Player: " + ++playerScore;
        results.textContent = "You chose 'scissors' and the computer chose 'paper.' You win! Scissors beats paper.";
    }
    else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        results.textContent = "You and the computer both chose 'scissors.' It's a tie!";
    }
}

// announce a winner of the game once one player reaches 5 points





