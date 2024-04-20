/* 
Given a string without spaces, the task is to remove duplicates from it. 
Note: The original order of characters must be kept the same.
Input: String "zvvo"
Output: String "zvo"
*/

function removeDuplicates(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (result.indexOf(str[i]) === -1) {
      result += str[i];
    }
  }
  return result;
}

console.log(removeDuplicates('zvvo') === 'zvo');
console.log(removeDuplicates('Hello') === 'Helo');
