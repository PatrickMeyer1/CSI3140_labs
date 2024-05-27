function createGame(n) {
    // Initially fill board with '.'
    const board = Array(n).fill('.');
    // Generating random indices for pacman, ghost, fruit
    const indices = [];
    while (indices.length < 3) {
        const index = Math.floor(Math.random() * n);
        if (!indices.includes(index)) {
            indices.push(index);
        }
    }

    // Assigning indices to board
    board[indices[0]] = 'C';
    board[indices[1]] = '^';
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

function ghostMove(game) {
    const currentIndex = game.indexOf('^');
    const randomDir = Math.floor(Math.random() * 2);
    if (randomDir === 0) {
        if (currentIndex > 0) {
            game[currentIndex] = '';
            game[currentIndex - 1] = '^';
        }
    } else {
        if (currentIndex < game.length - 1) {
            game[currentIndex] = '';
            game[currentIndex + 1] = '^';
        }
    }
    return game;
}

// Initialize score
let score = 0;
let level = 1;
const gameBoard = createGame(10);
console.log(gameBoard);
console.log(ghostMove(gameBoard));
console.log(ghostMove(gameBoard));
console.log(ghostMove(gameBoard));
console.log(ghostMove(gameBoard));
console.log(ghostMove(gameBoard));

