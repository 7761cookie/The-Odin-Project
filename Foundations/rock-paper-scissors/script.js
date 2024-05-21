import getComputerChoice from './functions/compchoice.js'
import playRound from './functions/playround.js'
import finalMessage from './functions/finalmessage.js';
import reset from './functions/reset.js';

let variables = {
    humanChoice: '',
    rounds: 5,
    roundsPlayed: 0,
    humanScore: 0,
    computerScore: 0,
}

document.querySelector("#selection").addEventListener("click", (e) => {
    if (variables.roundsPlayed < variables.rounds) {
        variables.humanChoice = e.target.id.toLowerCase();
        getComputerChoice();
        playRound();
        variables.roundsPlayed++;
    }
    if (variables.roundsPlayed == variables.rounds) {
        finalMessage();
        document.getElementById("reset").innerHTML = "reset";
        document.querySelector("#reset").addEventListener("click", (e) => {
            reset()
        })
    }
})

export { variables }