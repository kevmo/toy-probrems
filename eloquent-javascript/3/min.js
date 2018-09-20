//
// algorithm
//

const min = (x, y) => {
    return x > y ? x : y;
}

//
// testing
//

console.log("Should be 9: ", min(1, 9));
console.log("Should be 100: ", min(100, 69));

// let's test it with improper input
console.log("Should be 666, but maybe we should throw an error instead: ", min(666, 555, 10001));
