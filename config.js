function computerPlay() {
    items = ['Rock', 'Paper', 'Scissors'];
    return items[Math.floor(Math.random() * items.length)];
}

function playRound(playerSelection, computerSelection) {
    playerLowerCase = playerSelection.toLowerCase();
    if (playerLowerCase === "rock" && computerSelection === "Scissors") {
        return "You Win! Rock beats Scissors!";
    } else if (playerLowerCase === "rock" && computerSelection === "Paper") {
        return "You Lose! Rock beats Scissors!";
    } else if (playerLowerCase === "rock" && computerSelection === "Rock") {
        return "Draw!";
    } else if (playerLowerCase === "scissors" && computerSelection === "Scissors") {
        return "Draw!";
    } else if (playerLowerCase === "scissors" && computerSelection === "Paper") {
        return "You Win! Scissors beats Paper!";
    } else if (playerLowerCase === "scissors" && computerSelection === "Rock") {
        return "You Lose! Rock beats Scissors!";
    } else if (playerLowerCase === "paper" && computerSelection === "Scissors") {
        return "You Lose! Scissors beats Paper!";
    } else if (playerLowerCase === "paper" && computerSelection === "Paper") {
        return "Draw!";
    } else if (playerLowerCase === "paper" && computerSelection === "Rock") {
        return "You Win! Paper beats Rock!";
    }
}

function game() {
    let playerScore = 0;
    for (let i = 0; i < 5; i++) {
        userInput = window.prompt("Enter your choice!");
        gameOutput = playRound(userInput, computerPlay());
        console.log(gameOutput);
        if(gameOutput.includes("You Win!")) {
            playerScore += 1;
        }
    }
    return playerScore;
}