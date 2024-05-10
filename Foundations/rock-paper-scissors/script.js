//console.log("Hello World")

let rounds = 5;
let roundsPlayed = 0;
let humanScore = 0;
let computerScore = 0;

const finalMessage = () => {
    if (roundsPlayed == rounds && humanScore > computerScore) {
        return console.clear(), console.log("You are the winner!")
    } else if (roundsPlayed == rounds && humanScore < computerScore) {
        return console.clear(), console.log("You are the Loser!")
    } else if (roundsPlayed == rounds && humanScore == computerScore) {
        return console.clear(), console.log("Its a draw")
    } else {
        return
    }
}
const playGame = () => {

    do {

        const choice = ["rock", "paper", "scissors"];

        const randomNumber = (max) => {
            return Math.floor(Math.random() * max);
        };

        const n = randomNumber(3);

        const getComputerChoice = () => {
            return choice[n];
        };

        const humanInput = prompt("Pick: rock, paper or scissors");

        const getHumanChoice = () => {
            return humanInput.toLowerCase();
        }

        console.clear();

        const playRound = (humanChoice, computerChoice) => {
            if (getComputerChoice() == getHumanChoice()) {
                return console.log("It's a draw!")
            } else if (getComputerChoice() == "rock" && getHumanChoice() == "scissors" || getComputerChoice() == "paper" && getHumanChoice() == "rock") {
                computerScore++;
                return console.log("You Lose! " + getComputerChoice() + " beats " + getHumanChoice());
            } else {
                humanScore++;
                return console.log("You Won!");
            }
        }

        playRound();

        roundsPlayed++;

        finalMessage();

        console.log("Computer Score: " + computerScore, "Human Score: " + humanScore);

    }

    while (roundsPlayed != rounds)
}

playGame();