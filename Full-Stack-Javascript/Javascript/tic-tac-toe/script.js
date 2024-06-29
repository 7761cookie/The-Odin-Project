const player = (name, marker) => {
    return {
        name,
        marker
    }
};

const gameBoard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""];
    const getBoard = () => board;

    const updateBoard = (index, marker) => {
        if (board[index] === "") {
            board[index] = marker;
            return true;
        }
        return false;
    };

    const resetBoard = (value = "") => {
        board = board.map(() => value);
    }

    return {
        getBoard,
        updateBoard,
        resetBoard
    }
})();

const playGame = (() => {
    const playerOne = player("Player 1", "X");
    const playerTwo = player("Player 2", "O");
    let currentPlayer = playerOne;

    const switchPlayer = () => {
        currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
    };

    const getCurrentPlayer = () => currentPlayer;

    const checkSequence = (sequence) => {
        const board = gameBoard.getBoard();
        return sequence.every(index => board[index] === currentPlayer.marker);
    }

    const checkWinner = () => {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        if (winningCombinations.some(combination => checkSequence(combination))) {
            return currentPlayer;
        }

        if (gameBoard.getBoard().every(cell => cell !== "")) {
            return "tie";
        }

        return null;
    }

    return {
        switchPlayer,
        getCurrentPlayer,
        checkWinner
    }
})();

const DisplayController = (() => {
    const gameboardDiv = document.getElementById("gameboard");
    const messageDiv = document.getElementById("message");
    const restartButton = document.getElementById("restart");

    const renderBoard = () => {
        gameboardDiv.innerHTML = "";
        const board = gameBoard.getBoard();

        board.forEach((cell, index) => {
            const cellDiv = document.createElement("div");
            cellDiv.classList.add("cell");
            cellDiv.textContent = cell;
            cellDiv.addEventListener("click", () => handleCellClick(index));
            gameboardDiv.appendChild(cellDiv);
        });
    };

    const handleCellClick = (index) => {
        const currentPlayer = playGame.getCurrentPlayer();
        if (gameBoard.updateBoard(index, currentPlayer.marker)) {
            renderBoard();
            const winner = playGame.checkWinner();
            if (winner) {
                displayMessage(winner === "tie" ? "It's a tie!" : `${winner.name} wins!`);
            } else {
                playGame.switchPlayer();
                displayMessage(`${playGame.getCurrentPlayer().name}'s turn`);
            }
        }
    };

    const displayMessage = (message) => {
        messageDiv.textContent = message;
    };

    restartButton.addEventListener("click", () => {
        gameBoard.resetBoard();
        renderBoard();
        displayMessage(`${playGame.getCurrentPlayer().name}'s turn`);
    });

    return { renderBoard, displayMessage };
})();

document.addEventListener("DOMContentLoaded", () => {
    DisplayController.renderBoard();
    DisplayController.displayMessage(`${playGame.getCurrentPlayer().name}'s turn`);
});
