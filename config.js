function computerPlay() {
    items = ['Rock', 'Paper', 'Scissors'];
    return items[Math.floor(Math.random() * items.length)];
}

function playRound(playerSelection, computerSelection) {
    playerLowerCase = playerSelection.toLowerCase();
    if ((playerLowerCase === "rock" && computerSelection === "Scissors") || (playerLowerCase === "scissors" && computerSelection === "Paper") 
    || (playerLowerCase === "paper" && computerSelection === "Rock")) {
        console.log("You Win!", playerSelection, "beats", computerSelection);
        return 1;
    } else if ((playerLowerCase === "rock" && computerSelection === "Paper") || (playerLowerCase === "scissors" && computerSelection === "Rock")
     || (playerLowerCase === "paper" && computerSelection === "Scissors")){
        console.log("You Lose!", playerSelection, "loses to", computerSelection);
        return -1;
    } else {
        console.log("Draw!", playerSelection, "loses to", computerSelection);
        return 0;
    }
}
        


function game(userChoice) {
    let playerScore = playRound(userChoice, computerPlay());
    return playerScore;
}

const rockSelect = document.querySelector(".Rock");
const paperSelect = document.querySelector(".Paper");
const scissorSelect = document.querySelector(".Scissors");
const finalMessageSelect = document.querySelector(".finalMessage")

const winSelect = document.querySelector(".winScore");
const loseSelect = document.querySelector(".loseScore");
const drawSelect = document.querySelector(".drawScore");
const totalSelect = document.querySelector(".totalScore");
const compSelect = document.querySelector(".compTotalScore");

function addScore(elementOne, elementTwo) {
    let intEle1 = elementOne.textContent;
    let intEle2 = elementTwo.textContent;
    intEle1 = parseInt(intEle1);
    intEle2 = parseInt(intEle2);
    if(((intEle1 + 1) >= 5) || ((intEle2 + 1) >=5 )) {
        elementOne.textContent = intEle1 + 1;
        elementTwo.textContent = intEle2 + 1;
        let intEle3 = totalSelect.textContent;
        let intEle4 = compSelect.textContent;
        intEle3 = parseInt(intEle3);
        intEle4 = parseInt(intEle4);
        return gameOver(intEle3, intEle4);
    } else {
        elementOne.textContent = intEle1 + 1;
        elementTwo.textContent = intEle2 + 1;
    }
  
    

}

function drawRound(element) {
    let intEle1 = element.textContent;
    let intEle2 = winSelect.textContent;
    let intEle3 = loseSelect.textContent;
    intEle1 = parseInt(intEle1);
    intEle2 = parseInt(intEle2);
    intEle3 = parseInt(intEle3);
    if((intEle2 >= 5) || (intEle3 >=5 )) {
        return gameOver(intEle2, intEle3);
    } else {
        element.textContent = intEle1 + 1;
    }
   

}

function gameOver(userScore, compScore) {
    const newGameCreate = document.createElement('button');
    const newGameText = document.createElement('h2');
    userScore > compScore ? newGameText.textContent = "You win!" : newGameText.textContent = "You lose!";
    rockSelect.disabled = true;
    paperSelect.disabled = true;
    scissorSelect.disabled = true;
    newGameCreate.textContent = "Start a new game? Click me!";
    newGameCreate.setAttribute('class', 'highlight');
    newGameText.setAttribute('class', 'newGameText');
    newGameCreate.addEventListener('click', newGame => resetGame());
    finalMessageSelect.appendChild(newGameText);
    finalMessageSelect.appendChild(newGameCreate);
    
}

function resetGame() {
    winSelect.textContent = 0;
    loseSelect.textContent = 0;
    drawSelect.textContent = 0;
    totalSelect.textContent = 0;
    compSelect.textContent = 0;
    rockSelect.disabled = false;
    paperSelect.disabled = false;
    scissorSelect.disabled = false;
    const finMessageText = document.querySelector(".newGameText");
    const finMessageButton = document.querySelector(".highlight");
    finMessageText.parentNode.removeChild(finMessageText);
    finMessageButton.parentNode.removeChild(finMessageButton);
}

function gameCall(input) {
    let gameScore = game(input);
    (gameScore> 0) ? addScore(winSelect, totalSelect) : (gameScore < 0) ? addScore(loseSelect, compSelect): drawRound(drawSelect);
}

rockSelect.addEventListener('click', rock => gameCall("Rock"));
paperSelect.addEventListener('click', paper => gameCall("Paper"));
scissorSelect.addEventListener('click', scissors => gameCall("Scissors"));

console.log("test");