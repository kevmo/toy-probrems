// Instructions: write a function, countChars, that takes two arguments:
// Argument 1: a string
// Argument 2: a character
// countChars then returns:
// Return value: a number representing how many times the character
// (argument 2) appears in the string (argument 2))


//
// The algorithm
//

const countChars = (string, character) => {
  count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === character) count++;
  }

  return count;
}

//
// Testing
//

console.log("result of countChars('Three 6 Mafia', '6') -- ", countChars('Three 6 Mafia', '6'));
console.log("result of countChars('Ada Lovelace', 'a') -- ", countChars('Ada Locelace', 'a'));
console.log("result of countChars('Tennessee', 'e') -- ", countChars('Tennessee', 'e'));
