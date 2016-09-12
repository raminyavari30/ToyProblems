/*
Given a string of only lowercase alphabet characters, find the 
character that occurs the highest number of times. If any 
characters tie, return them all in alphabetical order.
*/

let highestFrequency = (str) => {
  
  let highest = -1;
  let answer = [];
  
  str = str.split('').reduce( (obj, item) => {
    if(!obj[item]) {
      obj[item] = 1;
    }
    else {
      obj[item]++;
    }
    return obj;
  },{});
  
  for(let key in str) {
    if(str[key] > highest) {
      highest = str[key];
    }
  }
  
  for(let key in str) {
    if(str[key] === highest) {
      answer.push(key)
    }
  }
  
  return answer.sort( (a,b) => {
    return a > b;
  }).join('');
}