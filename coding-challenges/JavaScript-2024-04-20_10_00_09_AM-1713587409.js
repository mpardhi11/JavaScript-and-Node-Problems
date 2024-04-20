/* Given an integer num, repeatedly add all its digits until the result has only one digit, 
and return it.
Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.
 */

function returnSingleDigit(num) {
  if (isNaN(num)) return null;
  if (num < 10 && num >= 0) return num;
  num = Math.abs(num);
  const sum = num
    .toString()
    .split('')
    .map(Number)
    .reduce((total, ele) => total + ele, 0);
  return returnSingleDigit(sum);
}

console.log(returnSingleDigit(38)); // 2
console.log(returnSingleDigit(9999999999999)); // 9
console.log(returnSingleDigit(-8989898)); // 5
