const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const restartButton = document.getElementById('restartButton');
const span = document.getElementsByClassName('close')[0];
const modal = document.getElementById('myModal');
const winnerText = document.getElementById('winnerText');
const scoreX = document.getElementById('scoreX');
const scoreO = document.getElementById('scoreO');

let currentPlayer = 'X';
let isGameOver = false;
let score = { 'X': 0, 'O': 0 };

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWin() {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cells[index].textContent === currentPlayer;
        });
    });
}

function checkDraw() {
    return [...cells].every(cell => {
        return cell.textContent === 'X' || cell.textContent === 'O';
    });
}

function updateScoreboard() {
    scoreX.textContent = score['X'];
    scoreO.textContent = score['O'];
}

function endGame(winner) {
    isGameOver = true;
    if (winner) {
        winnerText.textContent = winner + ' wins!';
        score[winner] += 1; // Increment the winner's score
    } else {
        winnerText.textContent = 'Draw!';
    }
    modal.style.display = 'block'; // Show the modal
    updateScoreboard(); // Update the scoreboard display
}

function handleClick(event) {
    if (isGameOver || event.target.textContent !== '') return;

    event.target.textContent = currentPlayer;
    if (checkWin()) {
        endGame(currentPlayer);
    } else if (checkDraw()) {
        endGame(null); // No winner, it's a draw
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switch players
    }
}

function restartGame() {
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
    isGameOver = false;
    modal.style.display = 'none'; // Hide the modal on restart
}

cells.forEach(cell => {
    cell.addEventListener('click', handleClick);
});

restartButton.addEventListener('click', restartGame);

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Initial scoreboard update
updateScoreboard();
