//No longer used as the function has been refactored in script.js

import playRound from './playround.js';
import finalMessage from './finalmessage.js';

const playGame = () => {
    let rounds = 5;
    let roundsPlayed = 0;

    while (rounds > roundsPlayed) {

        playRound();
        roundsPlayed++;

    }
    finalMessage();
}

export default playGame;