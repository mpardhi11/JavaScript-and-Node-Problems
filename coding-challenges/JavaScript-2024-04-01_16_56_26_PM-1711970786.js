/* 
Reverse the Odd Length Words
Given a string, reverse all the words which have odd length. 
The even length words are not changed.

Examples
reverseOdd("Bananas") ➞ "sananaB"
reverseOdd("One two three four") ➞ "enO owt eerht four"
reverseOdd("Make sure uoy only esrever sdrow of ddo length") ➞ "Make sure you only reverse words of odd length"

Notes
There is exactly one space between each word and no punctuation is used.

 */

function reverseOdd(str) {
  const arr = str?.split(' ');

  const data = arr.map((elem) => {
    const isOdd = elem.length % 2 !== 0;

    if (isOdd) return elem.split('').reverse().join('');
    return elem;
  });

  return data.join(' ');
}

console.log(reverseOdd('Bananas')); // ➞ "sananaB"
console.log(reverseOdd('One two three four')); // ➞ "enO owt eerht four"
console.log(reverseOdd('Make sure uoy only esrever sdrow of ddo length')); // ➞ "Make sure you only reverse words of odd length"
console.log(reverseOdd('One two three four')); //,'enO owt eerht four'
console.log(reverseOdd('Make sure uoy only esrever sdrow of ddo length')); //'Make sure you only reverse words of odd length'
console.log(reverseOdd('')); // '','Should work with empty string.'
console.log(reverseOdd('Bananas')); // ,'sananaB','Should work with only one word.'
console.log(reverseOdd('Even even even even even even even even even')); // ,'Even even even even even even even even even'
console.log(reverseOdd('Odd odd odd odd odd odd odd odd odd odd odd')); // ,'ddO ddo ddo ddo ddo ddo ddo ddo ddo ddo ddo'
