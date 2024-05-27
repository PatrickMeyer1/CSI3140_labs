function createGame(n) {
    // Initially fill board with '.'
    const board = Array(n).fill('.');
    // Generating random indices for pacman, ghost, fruit
    const indices = [];
    while (indices.length < 3) {
        const randomIndex = Math.floor(Math.random() * n);
        if (!indices.includes(randomIndex)) {
            indices.push(randomIndex);
        }
    }

    // Assigning indices to board
    board[indices[0]] = 'C';
    board[indices[1]] = '^.';
    board[indices[2]] = '@';

    return board;
}

function moveLeft(game) {
    const currentIndex = game.indexOf('C');
    // Check if the pacman is the first element in the array (board)
    if (currentIndex > 0) {
        if (game[currentIndex - 1] === '.') {
            score += 5;
        }
        game[currentIndex] = '';
        game[currentIndex - 1] = 'C';
    }
    return game;
}

function moveRight(game) {
    const currentIndex = game.indexOf('C');
    // Check if the pacman is the last element in the array (board)
    if (currentIndex < game.length - 1) {
        if (game[currentIndex + 1] === '.') {
            score += 5;
        }
        game[currentIndex] = '';
        game[currentIndex + 1] = 'C';
        
    }
    return game;
}

function levelCompleted(game) {
    if (!game.includes('.')) {
        level++;
        return true;
    }
    return false;
}

// Initialize score
let score = 0;
let level = 1;
const gameBoard = createGame(10);


