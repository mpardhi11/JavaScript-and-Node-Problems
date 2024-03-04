/*
Write a function called capitalizeWords that takes a sentence as input 
and returns a new sentence where each word's first letter is capitalized. 
Assume that the input sentence consists of 
lowercase and uppercase letters with spaces between words.
*/

function capitalizeWords(sentence) {
  const strArray = sentence?.split(" ");
  let capitalizeSentence = "";
  for (const item of strArray) {
    let word = item.charAt(0).toUpperCase();
    let subString = item.substring(1);
    capitalizeSentence += ` ${word + subString}`;
  }
  return capitalizeSentence.trim();
}

function capitalizeWordsWay2(sentence) {
  const strArray = sentence?.split(" ");
  const capitalizeArray = strArray.map(
    (word) => word.charAt(0).toUpperCase() + word.substring(1)
  );
  return capitalizeArray.join(" ");
}

const str = "the quick brown fox  jumps over the lazy dog";
const result1 = capitalizeWords(str);
const result2 = capitalizeWordsWay2(str);
console.log("result1: 👆👆👆👆👆👆👆", result1);
console.log("result2: 👆👆👆👆👆👆👆", result2);
