import { variables } from "../script.js";

const finalMessage = () => {
    if (variables.humanScore > variables.computerScore) {
        document.getElementById("outcome").innerHTML = "You are the winner!";
    }
    if (variables.humanScore < variables.computerScore) {
        document.getElementById("outcome").innerHTML = "You are the Loser!";
    }
    if (variables.humanScore == variables.computerScore) {
        document.getElementById("outcome").innerHTML = "Its a draw";
    }
}

export default finalMessage;