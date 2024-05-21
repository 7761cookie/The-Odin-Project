import { computerChoice } from "./compchoice.js";
import { humanChoice } from "../script.js";

let humanScore = 0;
let computerScore = 0;

const playRound = () => {

    if (computerChoice == humanChoice) {
        document.getElementById("outcome").innerHTML = "It's a draw!";
    } else if (computerChoice == "rock" && humanChoice == "scissors" || computerChoice == "paper" && humanChoice == "rock") {
        computerScore++;
        document.getElementById("computerscore").innerHTML = "Computer Score: " + computerScore;
        document.getElementById("outcome").innerHTML = "You Lose! " + computerChoice + " beats " + humanChoice;
    } else {
        humanScore++;
        document.getElementById("playerscore").innerHTML = "Your Score: " + humanScore;
        document.getElementById("outcome").innerHTML = "You Won!";
    }
}

export { computerScore, humanScore }
export default playRound;