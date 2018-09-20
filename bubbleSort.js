// Write an algorithm that
// takes an array of numbers as input
// and returns an array of those same
// numbers sorted from lowest to highest.

// For example, if I ran
// const sorted = sort([2, 4, 3, 1])
// I would expect `sorted` to evaluate to [1, 2, 3, 4]

// The algorthm

const sort = function(numbers) {

  const length = numbers.length;

  for (let x = 0; x < length; x++) {
    for (let y = 0; y < length; y++) {
      if (numbers[y + 1]) {
        if (numbers[y + 1] < numbers[y]) {
          const swap = numbers[y+1];
          numbers[y + 1] = numbers[y];
          numbers[y] = swap
        }
      }
    }
  }

  return numbers;
}


// Testing

let testArray = [ 420, 4, 69, 11, 62];

console.log(sort(testArray));
