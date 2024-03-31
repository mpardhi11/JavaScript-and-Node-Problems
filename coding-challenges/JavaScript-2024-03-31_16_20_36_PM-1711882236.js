/* 
Create a function that takes an array of strings and returns 
an array with only the strings that have numbers in them. 
If there are no strings containing numbers, return an empty array.
Examples
numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]

numInStr(["abc", "abc10"]) ➞ ["abc10"]

numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]

numInStr(["this is a test", "test1"]) ➞ ["test1"] 

*/

// function numInStr(arr) {
//   const result = arr.filter((item) => {
//     return item.split('').some((char) => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]?.includes(parseInt(char)));
//   });
//   return result;
// }
function numInStr(arr) {
  const result = arr.filter((item) => {
    return item?.match(/\d/g);
  });
  return result;
}

console.log(numInStr(['1a', 'a', '2b', 'b'])); // [ '1a', '2b' ]
console.log(numInStr(['abc', 'abc10'])); // [ 'abc10' ]
console.log(numInStr(['abc', 'ab10c', 'a10bc', 'bcd'])); // [ 'ab10c', 'a10bc' ]
console.log(numInStr(['this is a test', 'test1'])); //[ 'test1' ]
console.log(numInStr(['this is a test', 'test'])); // []
