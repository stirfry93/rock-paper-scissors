const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    let playerSelection = "rock";
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    endGame();
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    let playerSelection = "paper";
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    endGame();
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    let playerSelection = "scissors";
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    endGame();
});

// function to randomly return either ‘Rock’, ‘Paper’ or ‘Scissors'

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)];
}

// change the DOM to say the results from playRound 

const results = document.querySelector('#results');

// change the DOM to say the final result after player or computer reaches 5 points 

const finalResult = document.querySelector('#finalResult');

// change the DOM to say the running scores


const runningCompScore = document.querySelector('#runningCompScore');
const runningPlayerScore = document.querySelector('#runningPlayerScore');

let computerScore = 0;
let playerScore = 0;

// when computerScore or playerScore hits 5, stop playRound and let results.textContent = "You won" or "You lost"
  
// function to play a single round of rock, paper, scissors

function playRound(playerSelection, computerSelection) {

    if (playerScore === 5 || computerScore === 5) {
        return;
    }
    else if (playerSelection === 'rock' && computerSelection === 'rock') {
        results.textContent = "You and the computer both chose 'rock.' This round is a tie!";
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        runningCompScore.textContent = "Computer: " + ++computerScore;
        results.textContent = "You chose 'rock' and the computer chose 'paper.' You lose this round. Paper beats rock.";
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        runningPlayerScore.textContent = "Player: " + ++playerScore;
        results.textContent = "You chose 'rock' and the computer chose 'scissors.' You win this round! Rock beats scissors.";
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        runningPlayerScore.textContent = "Player: " + ++playerScore;
        results.textContent = "You chose 'paper' and the computer chose 'rock.' You win this round! Paper beats rock.";
    }
    else if (playerSelection === 'paper' && computerSelection === 'paper') {
        results.textContent = "You and the computer both chose 'paper.' This round is a tie!";
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        runningCompScore.textContent = "Computer: " + ++computerScore;
        results.textContent = "You chose 'paper' and the computer chose 'scissors.' You lose this round. Scissors beats paper.";
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        runningCompScore.textContent = "Computer: " + ++computerScore;
        results.textContent = "You chose 'scissors' and the computer chose 'rock.' You lose this round. Rock beats scissors.";
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        runningPlayerScore.textContent = "Player: " + ++playerScore;
        results.textContent = "You chose 'scissors' and the computer chose 'paper.' You win this round! Scissors beats paper.";
    }
    else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        results.textContent = "You and the computer both chose 'scissors.' This round is a tie!";
    }
}

function endGame() {
    if (playerScore >= 5) {
        finalResult.textContent = "You win this game!";
    }
    else if (computerScore >= 5) {
        finalResult.textContent = "You lose this game.";
    }
}






