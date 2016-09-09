/*
Directions:

Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run. 
If there are two runs of equal length, return the first one. Return [0,0] for no runs.

*/

//First Solution

let longestRun = (str) => {
  
  let longest = [0,0];
  let current = [0,0];
  
  for(let i = 0; i < str.length; i++) {
    for(let j = i+1; j < str.length; j++) {
      if(str[i] === str[j]) {
        
        current[1] = j;
        
        if(current[1] - current[0] > longest[1] - longest[0]) {
        longest = current;
        }
      }
      else {
        current = [j, j];
        i = j;
      }
    }
  }
  return longest;
}; 

//Second Solution

let longestRun = (string) => {
  let longest = [0,0];
  let current= [0,0];
  
  for(let i = 1; i < string.length; i++) {
    if(string[i-1] === string[i]) {
      current[1] = i;
      if(current[1] - current[0] > longest[1] - longest[0]) {
        longest = current;
      }
    }else {
      current = [i,i];
    }
  }
  return longest;
};