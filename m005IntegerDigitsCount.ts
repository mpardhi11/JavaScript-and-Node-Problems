// Integer Digits Count
// Create a function that counts the integer's number of digits.

// Notes
// For an added challenge, try to solve this without using strings.
// Alternatively, you can solve this via a recursive approach.
// A reversion of this challenge can be found via this link.

// Examples

function count(givenNum: number) {
  let numLength = Math.abs(givenNum).toString().split("").length;
  console.log(numLength);
  return numLength;
}

count(318); // ➞ 3

count(-92563); // ➞ 5

count(4666); // ➞ 4

count(-314890); // ➞ 6

count(654321); // ➞ 6

count(638476); // ➞ 6
