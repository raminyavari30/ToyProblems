/*
Directions:

Write a function numberToEnglish, it should take a number and 
eturn the number as a string using English words.
*/


var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};

function numberToEnglish (number) {
 var result;
 var place;
 var numberPlace;
 var numberLeft;
 var remaining;
 
 if(numbersToWords[number]){
   result = numbersToWords[number];
 }
 
 else if(number < 100) {
  numberPlace = Math.floor(number/10);
  
  numberLeft = number % 10;
  
  result = numbersToWords[numberPlace * 10] + "-" + numberToEnglish(numberLeft);
 }
 else {
  
   if(number < 1000) {
    place = 100;
   }
   else {
     place = 1000;
     
     while (place * 1000 <= number) {
       place *= 1000
     }
   }
   numberPlace = Math.floor(number/place);
   numberLeft = number % place;
   
   result = numberToEnglish(numberPlace) + " " + numbersToPlace[place];
   
   remainder = numberToEnglish(numberLeft);
  
   if(remainder !== 'zero'){
     result += " " + remainder;
    }
   }
   return result;
}