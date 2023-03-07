
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    let playerSelection = "rock";
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    let playerSelection = "paper";
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    let playerSelection = "scissors";
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));
});

// function to randomly return either ‘Rock’, ‘Paper’ or ‘Scissors'

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)];
}
  
  // function to play a single round of rock, paper, scissors

    let playerScore = 0;
    let computerScore = 0;

    function playRound(playerSelection, computerSelection) {

        if (playerSelection === 'rock' && computerSelection === 'rock') {
            return "It's a tie! You both chose rock."
        }
        else if (playerSelection === 'rock' && computerSelection === 'paper') {
            computerScore++;
            return "You lose, sadly. Paper beats rock."
        }
        else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            playerScore++;
            return "You win! Rock beats scissors."
        }
        else if (playerSelection === 'paper' && computerSelection === 'rock') {
            playerScore++;
            return "You win! Paper beats rock."
        }
        else if (playerSelection === 'paper' && computerSelection === 'paper') {
            return "It's a tie! You both chose paper."
        }
        else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            computerScore++;
            return "You lose, sadly. Scissors beats paper."
        }
        else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            computerScore++;
            return "You lose, sadly. Rock beats scissors"
        }
        else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            playerScore++;
            return "You win! Scissors beats paper."
        }
        else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
            return "It's a tie! You both chose scissors."
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
    








