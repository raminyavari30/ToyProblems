/*
DIRECTIONS: 

Given an array of arbitrarily nested arrays, return n, where n is the deepest level that 
contains a non-array value.

Examples

    Input                               Output

[ [ 5 ], [ [ ] ] ]                        2

[ 10, 20, 30, 40 ]                        1

[ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ]        4

[ ]                                       0

[ [ [ ] ] ]                               0

*/

const arrayception = (array) => {
  let deepest = 0;
  let current = 1;
  
  const recurse = (arr) => {
    
    for(var elem of arr) {
      if(Array.isArray(elem)) {
        current++;
        recurse(elem);
        current--;
      }
      else {
        if(current > deepest) {
          deepest = current;
        }
      }
    }
  }
  recurse(array);
  return deepest;
}