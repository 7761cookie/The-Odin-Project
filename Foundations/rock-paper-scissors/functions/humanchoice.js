const getHumanChoice = () => {

    const humanInput = prompt("Pick: rock, paper or scissors");

    return humanInput.toLowerCase();
}

export default getHumanChoice;