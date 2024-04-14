function getSum1(a, b) {}
console.log('getSum1.length', getSum1.length); // getSum1.length 2
function getSum2(a, b, c, d, ...args) {}
// Here ...rest is not counted in the length of the function arguments
console.log('getSum2.length', getSum2.length); // getSum2.length 4
function getSum3(a, b, c, d = 13, ...args) {}
// Here the default value is not counted in the length of the function arguments
// and next arguments of default value are also not counted
// so rest of the arguments = 3
console.log('getSum3.length', getSum3.length); // getSum3.length 3

const getSum4 = (a, b) => {};
console.log('getSum4.length', getSum4.length); // getSum4.length 2

const getSum5 = (a, b, c, d, ...args) => {};
console.log('getSum5.length', getSum5.length); // getSum5.length 4

const getSum6 = (a, b, c, d = 13, ...args) => {};
console.log('getSum6.length', getSum6.length); // getSum6.length 3

const getSum7 = (a, b = 10, c, d = 13, ...args) => {};
console.log('getSum7.length', getSum7.length); // getSum7.length 1

function getSum8(a = 10, b, c, d = 13, ...args) {}
console.log('getSum8.length', getSum8.length); // getSum8.length 0
