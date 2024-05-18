const getComputerChoice = () => {
    const choice = ["rock", "paper", "scissors"];

    const randomNumber = (max) => {
        return Math.floor(Math.random() * max);
    };

    const n = randomNumber(3);

    return choice[n];
}

export default getComputerChoice;