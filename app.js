document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll(".cell");
    const resetButton = document.querySelector(".reset");
    const resultScreen = document.querySelector(".result-screen");
    const resultMessage = document.querySelector(".result-message");
    const newGameButton = document.querySelector(".new-game");

    let currentPlayer = "X";
    let gameActive = true;
    let gameState = ["", "", "", "", "", "", "", "", ""];

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const handleCellClick = (e) => {
        const clickedCell = e.target;
        const clickedCellIndex = parseInt(clickedCell.getAttribute("data-index"));

        if (gameState[clickedCellIndex] !== "" || !gameActive) {
            return;
        }

        gameState[clickedCellIndex] = currentPlayer;
        clickedCell.textContent = currentPlayer;

        // Apply different color based on the player
        if (currentPlayer === "X") {
            clickedCell.classList.add("pressed-x");
        } else {
            clickedCell.classList.add("pressed-o");
        }

        checkResult();
    };

    const checkResult = () => {
        let roundWon = false;

        for (let i = 0; i < winningConditions.length; i++) {
            const winCondition = winningConditions[i];
            const a = gameState[winCondition[0]];
            const b = gameState[winCondition[1]];
            const c = gameState[winCondition[2]];

            if (a === "" || b === "" || c === "") {
                continue;
            }

            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }

        if (roundWon) {
            showResultScreen(`Player ${currentPlayer} Wins!`);
            gameActive = false;
            return;
        }

        const roundDraw = !gameState.includes("");
        if (roundDraw) {
            showResultScreen("It's a Draw!");
            gameActive = false;
            return;
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";
    };

    const showResultScreen = (message) => {
        resultMessage.textContent = message;
        resultScreen.classList.remove("hidden");
    };

    const resetGame = () => {
        currentPlayer = "X";
        gameActive = true;
        gameState = ["", "", "", "", "", "", "", "", ""];
        cells.forEach(cell => {
            cell.textContent = "";
            cell.classList.remove("pressed-x", "pressed-o"); // Reset color
        });
        resultScreen.classList.add("hidden");
    };

    cells.forEach(cell => cell.addEventListener("click", handleCellClick));
    resetButton.addEventListener("click", resetGame);
    newGameButton.addEventListener("click", resetGame);
});
