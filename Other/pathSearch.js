/* Directions: 

Given the following grid, check if path exists.

Grid:
[
     [1, 2, 3],
     [4, 5, 6]
]

Path: [3, 6, 5]

There are only left, right, up, and down links and no diagonal links exists.

*/ 

let PathSearch = (grid, path) => {
  
  let startRow;
  let startColumn;
  let count = 1;
  
  for(let i = 0; i < grid.length; i++) {
    let row = grid[i];
    
    for(let j = 0; j < row.length; j++) {
      
      if(row[j] === path[0]) {
        startRow = i;
        startColumn = j;
      }
    }
  }
  //if start path does not exist, return false
  if(startRow === undefined || startColumn === undefined) {
    return false;
  }
  
  /*Below will check up, down, left, and right of current
  position in the grid to see if it exists in the path*/
  while(count !== path.length) {
    
    if(grid[startRow][startColumn + 1] === path[count]) {
      count++;
      startColumn = startColumn + 1;
      continue;
    }
    
    if(grid[startRow][startColumn -1] === path[count]) {
      count++;
      startColumn = startColumn - 1;
      continue;
    }
    
    if(grid[startRow + 1] && grid[startRow + 1][startColumn] === path[count]) {
      startRow = startRow + 1;
      count++;
      continue;
    }
    
    if(grid[startRow - 1] && grid[startRow - 1][startColumn] === path[count]) {
      startRow = startRow - 1;
      count++;
      continue;
    }
    /*this will return false if it does not meet any of the conditional statements above*/
    return false;
  }
  return true;
}
