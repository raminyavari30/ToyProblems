let rotateMbyN = (matrix) => {
  let rotated = [];
  let rows = matrix[0].length;
  let columns = matrix.length;
  
  for(let r = 0; r < rows; r++) {
    rotated[r] = [];
    
    for(let c = 0; c < columns; c++) {
      rotated[r][c] = matrix[columns-c-1][r]
    }
  }
  return rotated;
}

//____________________________________________