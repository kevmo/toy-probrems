//
//  The FizzBuzz Algorithm
//

const fizzbuzz = function(numbers) {

 for (let i = 0; i < numbers.length; i++) {
   let output; //initializes as undefined
   const number = numbers[i];

   // The algorithm is the four lines of code below.
   // Note that you aren't strictly required to use
   // curly brackets {} in these statements.
   if (number % 15 === 0) output = "FizzBuzz"
   else if (number % 3 === 0) output = "Fizz"
   else if (number % 5 === 0) output = "Buzz"

   // If output is still undefined, just print number
   console.log(output || number);
 }
}

//
// Testing Below
//

// utility helper function
const range = (number) =>  {
  let rangeOfNumbers = [];
  for (i = 1; i < (number + 1); i++) {
    rangeOfNumbers.push(i);
  }

  return rangeOfNumbers;
}

// try 100
const test100 = range(100);
console.log(test100); // gotta test your utility helper function, too....
fizzbuzz(test100);
