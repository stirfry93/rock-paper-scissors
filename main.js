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
            computerScore += 1;
            return "You lose, sadly. Paper beats rock."
        }
        else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            playerScore += 1;
            return "You win! Rock beats scissors."
        }
        else if (playerSelection === 'paper' && computerSelection === 'rock') {
            playerScore += 1;
            return "You win! Paper beats rock."
        }
        else if (playerSelection === 'paper' && computerSelection === 'paper') {
            return "It's a tie! You both chose paper."
        }
        else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            computerScore += 1;
            return "You lose, sadly. Scissors beats paper."
        }
        else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            computerScore += 1;
            return "You lose, sadly. Rock beats scissors"
        }
        else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            playerScore += 1;
            return "You win! Scissors beats paper."
        }
        else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
            return "It's a tie! You both chose scissors."
        }
    }
    
    // play 5 rounds of game
    for (i = 0; i < 5; i++) {
        let playerSelection = prompt("Make a selection: rock, paper, or scissors.").toLowerCase();

        const computerSelection = getComputerChoice();

        playRound(playerSelection, computerSelection);

        console.log(computerSelection);
        console.log(playRound(playerSelection, computerSelection));

        console.log(playerScore);
        console.log(computerScore);
    }
}

game();


// after each round, award a point to the winner
// then at the end of 5 rounds declare a winner based on who has more points, the user or the computer

//let playerScore = 0
//let computerScore = 0

// if playRound == "You win! Rock beats scissors." || "You win! Paper beats rock." || "You win! Scissors beats paper." then playerScore ++

// if playRound == "You lose, sadly. Paper beats rock." || "You lose, sadly. Scissors beats paper." || "You lose, sadly. Rocks beats scissors" then computerScore ++ 

// for loop to play 5 rounds

// at end of loop, if playerScore > computerScore declare "You won the game!"
// else declare "You lost the game this time."




