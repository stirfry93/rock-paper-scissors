// function to randomly return either ‘Rock’, ‘Paper’ or ‘Scissors

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)];
}

// function to play a single round of rock, paper, scissors

let playerSelection = 'rock';

const computerSelection = getComputerChoice();
console.log(computerSelection);

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return "It's a tie! You both chose rock."
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return "You lose, sadly. Paper beats rock."
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return "You win! Rock beats scissors."
    }

    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return "You win! Paper beats rock."
    }
    else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return "It's a tie! You both chose paper."
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return "You lose, sadly. Scissors beats paper."
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return "You lose, sadly. Scissors beats rock"
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return "You win! Scissors beats paper."
    }
    else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return "It's a tie! You both chose scissors."
    }
}

playRound(playerSelection, computerSelection);

console.log(playRound(playerSelection, computerSelection));

function game() {
    // use a loop to play 5 rounds of game and report winner at end
}