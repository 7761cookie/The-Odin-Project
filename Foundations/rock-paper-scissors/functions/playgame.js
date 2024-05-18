import getHumanChoice from './humanchoice.js';
import getComputerChoice from './compchoice.js'
import playRound from './playround.js';
import finalMessage from './finalmessage.js';

const playGame = () => {

    let rounds = 5;
    let roundsPlayed = 0;

    while (rounds > roundsPlayed) {

        getComputerChoice();
        getHumanChoice();
        playRound();
        roundsPlayed++;

    }

    finalMessage();
}

export default playGame;