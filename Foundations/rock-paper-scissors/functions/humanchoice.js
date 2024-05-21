//No longer used due to user click events

const getHumanChoice = () => {

    const humanInput = prompt("Pick: rock, paper or scissors");

    const humanChoice = humanInput.toLowerCase();

    return humanChoice;
}

export default getHumanChoice;

