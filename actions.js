
// Opening State
const baseState = function () {
  return [null, null, null, null, null, null, null, null, null];
};

// State History
const historyState = [];
/** In the classic React TicTacToe game, 
 * the game state is tracked and displayed
 * for the User.
*/ 

// Current State; Active Turn
const currState; turn;

// Fxn resetBoard
// Resetting the board to Opening State
const resetBoard = () => {
	currentState = baseState();
	historyState = [];
	turn = 'X';
	updateBoard();
};

resetBoard(); // <-- Fxn call.

// Fxn updateBoard
// Updating the Current State with subsequent turns
// I 
// O 
// C
// E