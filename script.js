function game() {
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

    function declareWinner() {
        if (playerScore > computerScore) {
        console.log("Game over. You win!")
        }
        else if (playerScore === computerScore) {
            console.log("Game over. It's a tie!")
        }
        else {
            console.log("Game over. You lose.")
        }
    }
    
    declareWinner();
}

game();