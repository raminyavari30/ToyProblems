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