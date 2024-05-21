import { computerScore } from "./playround.js";
import { humanScore } from "./playround.js";

const finalMessage = () => {
    if (humanScore > computerScore) {
        document.getElementById("outcome").innerHTML = "You are the winner!";
    }
    if (humanScore < computerScore) {
        document.getElementById("outcome").innerHTML = "You are the Loser!";
    }
    if (humanScore == computerScore) {
        document.getElementById("outcome").innerHTML = "Its a draw";
    }
}
export default finalMessage;