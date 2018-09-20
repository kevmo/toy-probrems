//
// convoluted way to test whether an integer
// is even.  This is a useful demonstration of
// recursion.
//

//
// algorithm
//

const isEven = (integer) => {
    if (integer === 1) {
      return false;
    } else if (integer === 0) {
      return true;
    } else {
      return isEven(integer - 2); // the magical line
    }
}

//
// testing
//
console.log("------------TESTING------------");
console.log("Is 100 even? ", isEven(100));
console.log("Is 69 even? ", isEven(69));

// Note that you can cause a stack overflow by testing
// isEven with a negative or non-integer number (it will never
// equal 1 or 0 and then keep subtracting -2 forever).
