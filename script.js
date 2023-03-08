
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

// when button is clicked and playRound is run, change the DOM through the div to say the return strings from playRound 

const results = document.querySelector('#results');



// function to randomly return either ‘Rock’, ‘Paper’ or ‘Scissors'

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)];
}
  
// function to play a single round of rock, paper, scissors

function playRound(playerSelection, computerSelection) {

    if (playerSelection === 'rock' && computerSelection === 'rock') {
        results.textContent = "Computer selected 'rock.' It's a tie! You both chose rock.";
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        results.textContent = "Computer selected 'paper.' You lose, sadly. Paper beats rock.";
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        results.textContent = "Computer selected 'scissors.' You win! Rock beats scissors.";
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        results.textContent = "Computer selected 'rock.' You win! Paper beats rock.";
    }
    else if (playerSelection === 'paper' && computerSelection === 'paper') {
        results.textContent = "Computer selected 'paper.' It's a tie! You both chose paper.";
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        results.textContent = "Computer selected 'scissors.' You lose, sadly. Scissors beats paper.";
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        results.textContent = "Computer selected 'rock.' You lose, sadly. Rock beats scissors";
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        results.textContent = "Computer selected 'paper.' You win! Scissors beats paper.";
    }
    else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        results.textContent = "Computer selected 'scissors.' It's a tie! You both chose scissors.";
    }
}
    
    
    
    // declare overall winner 

    // function declareWinner() {
       // if (playerScore > computerScore) {
       // console.log("Game over. You win!")
       // }
       // else if (playerScore === computerScore) {
       //     console.log("Game over. It's a tie!")
       // }
       // else {
       //     console.log("Game over. You lose.")
       // }
   // }


   // removed playerScore++ and computerScore++ from playRound
    








