/*
Find longest substring without repeating char
input: abcaabnkl
expected output abnkl
*/

function findLongestSubstring(string) {
  let longest = '';

  for (let index = 0; index < string.length; index++) {
    const char = string[index];
    const nxtChar = string[index + 1] || '';
    if (char === nxtChar) {
      longest = '';
      continue;
    }
    longest += char;
  }

  return longest;
}

const result1 = findLongestSubstring('abcaabnkl');
console.log('result1: ', result1); // abnkl
const result2 = findLongestSubstring('abcaabnnkl');
console.log('result2: ', result2); // nkl
const result3 = findLongestSubstring('fooAtBar');
console.log('result3: ', result3); // oAtBar
