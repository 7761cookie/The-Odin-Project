import playRound from './playround.js';

const humanScore = playRound.humanScore;
const computerScore = playRound.computerScore;

const finalMessage = () => {
    if (humanScore > computerScore) {
        return console.log("You are the winner!")
    } else if (humanScore < computerScore) {
        return console.log("You are the Loser!")
    } else if (humanScore == computerScore) {
        return console.log("Its a draw")
    } else {
        return
    }
}

export default finalMessage;