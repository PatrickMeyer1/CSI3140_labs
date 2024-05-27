function createGame(n) {
    // Initially fill board with '.'
    const board = Array(n).fill('.');
    const pacmanGameIndex = Math.floor(Math.random() * n);
    const ghostGameIndex = Math.floor(Math.random() * n);
    const fruitGameIndex = Math.floor(Math.random() * n);

    // Populate board with pacman and fruit/ghost
    board[pacmanGameIndex] = 'C';
    board[ghostGameIndex] = '^.';
    board[fruitGameIndex] = '@';

    return game;
}

const gameBoard = createGame(10);
console.log(gameBoard);