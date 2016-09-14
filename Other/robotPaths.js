/*
Directions:

A robot located at the top left corner of an n x n grid is trying to reach the bottom 
right corner. The robot can move either up, down, left, or right, but cannot visit the 
same spot twice. How many possible unique paths are there to the bottom right corner?

Make your solution work for a grid of any size.
*/


function makeBoard(n) {

  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  }
  return board;
}


function robotPaths (n, board, r, c) {
  
  //if no board is passed in, create one
  if(board === undefined) {
    board = makeBoard(n);
    r = 0;
    c = 0;
  }
  //if the move is invalid, return 0
  if (r < 0 || r >= n || c < 0 || c >= n || board.hasBeenVisited(r, c)) {
    return 0;
  }
  
  //if you're at the bottom right, return 1
  if(r === n-1 && c === n-1) {
    return 1;
  }
  
  board.togglePiece(r,c);
  
  var solutions = robotPaths(n, board, r, c+1) + robotPaths(n, board, r, c-1) + robotPaths(n, board, r+1, c) + robotPaths(n, board, r-1, c);
  
  board.togglePiece(r,c);
  
  return solutions;
}
