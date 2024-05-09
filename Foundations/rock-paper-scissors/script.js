//console.log("Hello World")

const choice = ["rock", "paper", "scissors"];  

const randomNumber = (max) => {
        return Math.floor(Math.random() * max);
    };

const n = randomNumber(3); 

const humanInput = prompt("Pick: rock, paper or scissors");

let humanScore = 0;
let computerScore = 0;
let rounds = 5;
let roundsPlayed = 0;

const getComputerChoice = () => {
    return choice[n];
};

const getHumanChoice = () => {
    return humanInput.toLowerCase();
}

const playRound = (humanChoice, computerChoice) => {
    if (getComputerChoice() == getHumanChoice()) {
        return console.log("It's a draw!");
    } else if (getComputerChoice() == "rock" && getHumanChoice() == "scissors" || getComputerChoice() == "paper" && getHumanChoice() == "rock") {
        computerScore ++; 
        return console.log("You Lose! " + getComputerChoice() + " beats " + getHumanChoice());
    } else {
        humanScore ++;
        return console.log("You Won!");
    }
}

const playGame = () => {
    do {
        playRound(); 
        roundsPlayed ++;
    }
    while (roundsPlayed != rounds) 
}
playGame();
console.log("Computer Score: " + computerScore);
console.log("Human Score: " + humanScore);

