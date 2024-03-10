/* Find Longest Word:

Description: Write a function to find the longest word in a given sentence.
Input: "find the longest word in a given sentence"
Expected Output: "sentence"
 */

function longestWord(sentence) {
  let word = "";
  const words = sentence.split(" ");

  words.forEach((item) => (word = word?.length < item.length ? item : word));

  console.log("longestWord ~ word: 👆👆👆👆👆👆👆", word);
  return word;
}

let sentence = "find the longest word in a given sentence";
const result1 = longestWord(sentence);
console.log("result: 👆👆👆👆👆👆👆", result1);
