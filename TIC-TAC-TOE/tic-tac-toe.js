const tiles = document.getElementsByClassName('tile');
const gameStatus = document.getElementById('game-status');
const gameControlBtn = document.querySelector('#game-reset button');

// Game variables
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let winner;
let timer;
const winningScenarios = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// EventListeners to each tile in the board
addEventListenersToTiles = () => {
    for (let i=0; i< tiles.length; i++) {
        tiles[i].addEventListener('click', (event) => {
            if (gameActive) {
                markTileAsPlayed(event.target.id);
            }
        });
    }
}

// Mark a tile as played
markTileAsPlayed = (elementId) => {
    const playedTile = document.getElementById(elementId);
    playedTile.classList.add('filled');
    if (!gameState[elementId]) { // Allow update only if untouched tile is clicked
        playedTile.innerText = currentPlayer;
        gameState[elementId] = currentPlayer;
        if(!checkGameStatus()) { // Check if the gameStatus is active;
            switchPlayer();
        } else {
            clearInterval(timer);
            gameControlBtn.innerText = 'REPLAY';
        }
    }
}

// Switch Player
switchPlayer = () => {
    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    gameStatus.innerText = `It's Player ${currentPlayer}'s turn`;
}

// Check if any player has won or if the game has ended in draw
checkGameStatus = () => {
    let roundWon = false;
    for (let i=0; i <= 7; i++) {
        const winningScenario = winningScenarios[i];
        let a = gameState[winningScenario[0]];
        let b = gameState[winningScenario[1]];
        let c = gameState[winningScenario[2]];   
        if (a == '' || b == '' || c == '') {
            continue;
        }
        if (a === b && b === c ) {
            winner = a;
            roundWon = true;
            break;
        }
    }
    if (roundWon) {
        gameStatus.innerText = `Player ${winner} Won`;
        gameActive = false;
        return true;
    } else if (!gameState.includes('')) {
        gameStatus.innerText = 'Game Draw';
        gameActive = false;
        return true;
    } else {
        return false;
    }
}

// Timer handler
startTimer = () => {
    const hrs = document.getElementById('hrs');
    const min = document.getElementById('min');
    const sec = document.getElementById('sec');

    timer = setInterval(() => {
        sec.innerText = parseInt(sec.innerText) + 1;
        sec.innerText = sec.innerText.length == 1 ? '0' + sec.innerText : sec.innerText; 
        if (sec.innerText >= 60) {
            min.innerText = parseInt(min.innerText) + 1;
            min.innerText = min.innerText.length == 1 ? '0' + min.innerText : min.innerText; 
            sec.innerText = '00';
            if (min.innerText >= 60) {
                hrs.innerText = parseInt(hrs.innerText) + 1;
                hrs.innerText = hrs.innerText.length == 1 ? '0' + hrs.innerText : hrs.innerText;
                min.innerText = '00';
                sec.innerText = '00';
            }
        }
    }, 1000);
}

// Update game control
gameControl = (event) => {
    const gameControl = event.target.innerText;
    if (gameControl == 'START' || gameControl == 'RESUME') {
        startTimer();
        event.target.innerText = 'PAUSE';
    } else if (gameControl == 'PAUSE') {
        clearInterval(timer);
        event.target.innerText = 'RESUME';
    } else if (gameControl == 'REPLAY') {
       location.reload();
    }
}

addEventListenersToTiles();
