/*
DIRECTIONS:
  Convert Roman Numeral to Regular Number
*/

const upper = (str) => {
  return str.toUpperCase();
}

const romanToNum = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100
}

const romanToNumber = (rom) => {
  
  if(!rom) {
    return 0;
  }
  let result = romanToNum[upper(rom[0])];
  let prev;
  
  if(romanToNum[rom]) {
    result = romanToNum[rom];
  }
  else {
    for(let i = 1; i < rom.length; i++) {
      let formattedRom = romanToNum[upper(rom[i])];
      prev = romanToNum[upper(rom[i-1])];

      if(formattedRom > prev) {
        result = result - prev + (formattedRom - prev)
      }
      else {
        result+=formattedRom;
      }
    }
  }
  return result;
}

//Alternative Solution:

const romanToNum = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100
}

const upper = (str) => {
  return str.toUpperCase();
}

const RomanNumeralsToNumber = (rom) => {
  
  if(!rom) {
    return 0;
  }
  
  let result = 0;
  let prev = 0;
  let current;
  
  for(let i = rom.length-1; i >=0; i--) {
    current = romanToNum[upper(rom[i])];
    
      if(current >= prev) {
        result+=current;
      }
      else {
        result-=current;
      }
      prev = current;
  }
  return result;
}