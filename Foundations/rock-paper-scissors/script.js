import getComputerChoice from './functions/compchoice.js'
import playRound from './functions/playround.js'
import finalMessage from './functions/finalmessage.js';
import reset from './functions/reset.js';

let humanChoice = '';
let rounds = 5;
let roundsPlayed = 0;

document.querySelector("#selection").addEventListener("click", (e) => {
    if (roundsPlayed < rounds) {
        humanChoice = e.target.id.toLowerCase();
        getComputerChoice();
        playRound();
        roundsPlayed++;
    }

    if (roundsPlayed == rounds) {
        finalMessage();
        document.getElementById("reset").innerHTML = "reset";
        document.querySelector("#reset").addEventListener("click", (e) => {
            reset()
            roundsPlayed = 0;

        })
    }
})

export { humanChoice }