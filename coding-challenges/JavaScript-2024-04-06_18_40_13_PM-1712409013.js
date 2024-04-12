/* 
Double Character Swap
Write a function to replace all instances of character c1 with character c2 and vice versa.

Examples

doubleSwap( "aabbccc", "a", "b") // ➞ "bbaaccc"
doubleSwap("random w#rds writt&n h&r&", "#", "&") // ➞ "random w&rds writt#n h#r#"
doubleSwap("128 895 556 788 999", "8", "9") // ➞ "129 985 556 799 888"

Notes

Both characters will show up at least once in the string. 
*/

function doubleSwap(str, char1, char2) {
  let newStr = '';

  for (const char of str) {
    if (char === char2) newStr += char1;
    else if (char === char1) newStr += char2;
    else newStr += char;
  }
  return newStr;
}

console.log(doubleSwap('aabbccc', 'a', 'b')); // ➞ "bbaaccc"
console.log(doubleSwap('random w#rds writt&n h&r&', '#', '&')); // ➞ "random w&rds writt#n h#r#"
console.log(doubleSwap('128 895 556 788 999', '8', '9')); // ➞ "129 985 556 799 888"
