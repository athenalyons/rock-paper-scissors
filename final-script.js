let computerChoice;
let humanChoice;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const myRandomNumber = Math.floor((Math.random() * 3) +1);
    if (myRandomNumber === 1) {
        computerChoice = "rock";
    }
    else if (myRandomNumber === 2) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getHumanChoice() {
    let humanInput;
    humanInput = prompt("Choose your weapon: Rock, Paper or Scissors");
    humanInput = humanInput.toLowerCase();
    humanChoice = humanInput;
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`Draw! Human Chooses: ${humanChoice} Computer Chooses: ${computerChoice} `);
    }
    else if((humanChoice === "rock" && computerChoice === "paper")
    || (humanChoice === "paper" && computerChoice === "rock")
    || (humanChoice === "scissors" && computerChoice === "paper")) {
        console.log(`Human wins! Human Chooses: ${humanChoice} Computer Chooses: ${computerChoice} `);
        humanScore++;
    }
    else {
        console.log(`Computer Wins! Human Chooses: ${humanChoice} Computer Chooses: ${computerChoice} `);
        computerScore++;
    }
}

function playGame() {
    for (let i = 0; i <= 4; i++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Human Score is ${humanScore} and Computer Score is ${computerScore}`);
    }
    if (humanScore === computerScore) {
        console.log("It is a draw");
    }
    else if (humanScore > computerScore) {
        console.log("You win! Congratulations!");
    }
    else {
        console.log("You lose: maybe next time!");
    }
    humanScore = 0;
    computerScore = 0;
}