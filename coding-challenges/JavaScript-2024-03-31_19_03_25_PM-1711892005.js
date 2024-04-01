/*
Positive Dominant
An array is positive dominant if it contains 
strictly more unique positive values than unique negative values. 
Write a function that returns true if an array is positive dominant.

Examples
isPositiveDominant([1, 1, 1, 1, -3, -4]) ➞ false
// There is only 1 unique positive value (1).
// There are 2 unique negative values (-3, -4).

isPositiveDominant([5, 99, 832, -3, -4]) ➞ true
isPositiveDominant([5, 0]) ➞ true
isPositiveDominant([0, -4, -1]) ➞ false

Notes
0 counts as neither a positive nor a negative value.
*/

function isPositiveDominant(array) {
  const result = array?.every((value, index, arr) => {
    const dd = arr.indexOf(value) === arr.lastIndexOf(value);
    return dd;
  });

  return result;
}

console.log(isPositiveDominant([1, 1, 1, 1, -3, -4])); // ➞ false
console.log(isPositiveDominant([1, -3, -3, -4])); // ➞ false
console.log(isPositiveDominant([5, 99, 832, -3, -4])); // ➞ true
console.log(isPositiveDominant([5, 0])); // ➞ true
console.log(isPositiveDominant([0, -4, -1])); // ➞ false
console.log('==============');

// console.log(isPositiveDominant([1, 1, 1, 1, -3, -4])); //false
// console.log(isPositiveDominant([5, 99, 832, -3, -4])); // true
// console.log(isPositiveDominant([5, 0])); // true
console.log(isPositiveDominant([0, -4, -1])); // false
console.log(isPositiveDominant([1, 2, 3, -1])); // true
console.log(isPositiveDominant([1, 0, 0, -1])); // false
console.log(isPositiveDominant([5, 4, 3, 0, 0, -1, -1, -2, -2])); // true
// console.log(isPositiveDominant([52, 52, 52, -3, 2, 2, 2, -4])); // false
// console.log(isPositiveDominant([3, 3, 3, 3, -1, -1, -1])); // false
