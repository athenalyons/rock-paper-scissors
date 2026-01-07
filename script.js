console.log("Hello World!");

//  Step One: Write the logic for the computer choice
/* Goal: Assign the choice rock, paper, scissors for the computer choice utilising
   a random number. 

   Create a variable to store the computer choice
   Create a random number between 1 and 3
   If the number is 1 then assign the result as "rock"
   If the number is 2 then assign the result as "paper"
   If the number is 3 then assign the result as "Scissors"
   Return that number back into the variable */

// Create a variable to store the computerChoice:
let computerChoice;

//Create a random number between 1 and 3.
// Math.random() returns a number between 0 and 1
// MDN description: The Math.random() static method returns a floating-point,
// pseudo-random number that's greater than or equal to 0 and less than 1
// We need a number between 1 and 3
// If we times the number by 3 we get a number of at least 0.00001 and 2.99999 (roughly)
// If we plus this by 1 it will shift the number to 1.00001 and 3.99999
// if we round this down then we will have essentially a random number between 1 and 3;

// let randomNumberTest = Math.floor((Math.random() * 3) +1);

// If the number is 1 then assign the result as "rock"

/*function isItRock() {
    if (randomNumberTest === 1) {
        computerChoice = "rock";
    }
    else computerChoice = "It wasn't 1";
    return computerChoice;
}

isItRock();
console.log(computerChoice); 
*/

/* The full if function */

// function whatChoiceIsIt() {
//     if (randomNumberTest === 1) {
//         computerChoice = "rock";
//     }

//     else if (randomNumberTest === 2) {
//         computerChoice = "paper";
//     }

//     else {
//         computerChoice = "scissors";
//     }
//     return computerChoice;
// }

// whatChoiceIsIt();
// console.log(computerChoice);

// Tying it all together in a function
// Create a function called getComputerChoice
function getComputerChoice() {
    //create a variable to store the random number
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

// console.log(computerChoice);
// getComputerChoice();
// console.log(computerChoice);

//Step 1: complete

// Step 2: Write a function for the human choice
// Declare a variable to store the human choice
// Write a function without any information
// Declare a variable to store the human input
// Ask the user: "Choose your weapon: Rock, Paper or Scissors"
// The user will return a string
// Convert the string to lowercase to make it case insensitive
// Pass the result back into the variable to store the human choice

//Write a function for the human choice
let humanChoice;
function getHumanChoice() {
    // declare a variable to store the human input:
    let humanInput;
    // Ask the user: "Choose your weapon: Rock, Paper or Scissors"
    humanInput = prompt("Choose your weapon: Rock, Paper or Scissors");
    // Convert the string to lowercase to make it case insensitive
    humanInput = humanInput.toLowerCase();
    humanChoice = humanInput;
    return humanChoice;
}

//Step 2: Complete

//Step 3: Create human and computer scores
// Create a variable called humanScore and set it at 0
let humanScore = 0;
// Create a variable called computerScore and set it at 0
let computerScore = 0;

//Step 3: Complete

//Step 4: Write the logic to play a single round
// create a new function called playRound
function playRound(humanChoice, computerChoice) {
    //Code an if function where if equal then output "It is a draw"
    if (humanChoice === computerChoice) {
        console.log(`Draw! Human Chooses: ${humanChoice} Computer Chooses: ${computerChoice} `);
    }
    // ELSE IF human chooses Rock and Computer Chooses Paper
    else if((humanChoice === "rock" && computerChoice === "paper")
    // Or human chooses Paper and Computer chooses rock
    || (humanChoice === "paper" && computerChoice === "rock")
    // Or human chooses Scissors and Computer chooses paper
    || (humanChoice === "scissors" && computerChoice === "paper")) {
        // THEN human wins
        console.log(`Human wins! Human Chooses: ${humanChoice} Computer Chooses: ${computerChoice} `);
        humanScore++;
    }
    // ELSE computer wins
    else {
        // Computer wins
        console.log(`Computer Wins! Human Chooses: ${humanChoice} Computer Chooses: ${computerChoice} `);
        computerScore++;
    }
}

// Declare the constant variables that store the results of getHumanChoice & getComputerChoice for the playRound function
// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// Step 5: Write the logic to play the whole game

// Fundamental Changes: The computer choice and human choice must change on every round
// Write a function called playGame
function playGame() {
    // Write a for loop that iterates 5 times
    for (let i = 0; i <= 4; i++) {
        // declare variable for computer selection
        const humanSelection = getComputerChoice();
        const computerSelection = getHumanChoice();
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