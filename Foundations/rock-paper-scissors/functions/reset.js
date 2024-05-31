import { variables } from "../script.js";

const reset = () => {

    document.getElementById("reset").innerHTML = "Good Luck!";
    document.getElementById("computerscore").innerHTML = "Computer Score: 0";
    document.getElementById("playerscore").innerHTML = "Your Score: 0";
    document.getElementById("outcome").innerHTML = "Lets begin!";
    variables.computerScore = 0;
    variables.humanScore = 0;
    variables.roundsPlayed = 0;

}

export default reset;