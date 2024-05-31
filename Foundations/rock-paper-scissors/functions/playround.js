import { computerChoice } from "./compchoice.js";
import { variables } from "../script.js";

const playRound = () => {

    if (computerChoice == variables.humanChoice) {
        document.getElementById("outcome").innerHTML = "It's a draw!";
    } else if (computerChoice == "rock" && variables.humanChoice == "scissors" || computerChoice == "paper" && variables.humanChoice == "rock") {
        variables.computerScore++;
        document.getElementById("computerscore").innerHTML = "Computer Score: " + variables.computerScore;
        document.getElementById("outcome").innerHTML = "You Lose! " + computerChoice + " beats " + variables.humanChoice;
    } else {
        variables.humanScore++;
        document.getElementById("playerscore").innerHTML = "Your Score: " + variables.humanScore;
        document.getElementById("outcome").innerHTML = "You Won!";
    }
}

export default playRound;