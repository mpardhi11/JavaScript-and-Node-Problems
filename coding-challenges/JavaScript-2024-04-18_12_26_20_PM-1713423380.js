/* 
Vowel to Vowel Links
Given a sentence as str, return true if any two adjacent words have this property: 
One word ends with a vowel, 
while the word immediately after begins with a vowel (a e i o u).

Notes
You can expect sentences in lowercase/uppercase.

*/

function vowelLinks(str) {
  const arr = str.split(' ');
  let result = false;
  for (let index = 0; index < arr.length - 1; index++) {
    const element = arr[index];
    const nxtElement = arr[index + 1];

    const chatAtLast = element.substr(-1, 1).toLowerCase();
    const charAt0 = nxtElement.substr(0, 1).toLowerCase();

    const match1 = /^[aeiou]$/i.test(chatAtLast);
    const match2 = /^[aeiou]$/i.test(charAt0);

    if (match1 && match2) {
      result = true;
      break;
    }
  }
  return result;
}

// vowelLinks('a very large appliance'); //  ➞ true
// vowelLinks('go to edabit'); // ➞ true
// vowelLinks('an open fire'); // ➞ false
// vowelLinks('a sudden applause'); // ➞ false
console.log(vowelLinks('an open fire') === false);
console.log(vowelLinks('the sudden applause') === false);
console.log(vowelLinks('the large appliances') === true);
console.log(vowelLinks('creative environment') === true);
console.log(vowelLinks('Creative Environment') === true);
console.log(vowelLinks('beneficial luggage') === false);
console.log(vowelLinks('the eagle swooped down low') === true);
console.log(vowelLinks('this is not a drill') === false);
console.log(vowelLinks('Patrice Evra') === true);
console.log(vowelLinks('please log on to edabit') === true);
console.log(vowelLinks('the quick brown fox was sad') === false);
