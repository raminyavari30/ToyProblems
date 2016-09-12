/*
Given a number of rounds n, return all the possible 
rock-paper-scissors play possibilities for that number of 
rounds.
*/

let rockPaperPermutation = (roundCount) => {
  
  let result = [];
  let choices = ["r", "p", "s"];
  
  if(roundCount < 1) {
    return result;
  }
  
  let recurse = (str) => {
    if(str.length === roundCount) {
      result.push(str);
      return;
    }
    else {
      for(let char of choices) {
        recurse(str + char);
      }
    }
  }
  recurse('')
  return result;
}