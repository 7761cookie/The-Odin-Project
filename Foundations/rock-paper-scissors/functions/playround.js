import getHumanChoice from './humanchoice.js';
import getComputerChoice from './compchoice.js'

const playRound = (computerChoice, humanChoice) => {

    let humanScore = 0;
    let computerScore = 0;

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

export default playRound;