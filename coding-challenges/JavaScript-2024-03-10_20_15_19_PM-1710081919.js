/* Count Words in a Sentence:

Description: Write a function to count the number of words in a sentence.
Input: "This is a sample sentence."
Expected Output: 5

Example 2:
Input: "The quick brown fox jumps over the lazy dog."
Expected Output: 9

Example 2:
Input: "   Coding is fun,   isn't it?   "
Expected Output: 5

Example 3:
Input: "One, two, three! Count with me."
Expected Output: 7

Example 4:
Input: "  Spaces at the beginning and end should not affect the count.  "
Expected Output: 10

 */

function countWordsInSentence(sentence) {
  if (!(typeof sentence === "string" || sentence instanceof String)) return 0;

  const arr = sentence.split(" ");

  function foo(total, currentValue) {
    currentValue = currentValue.trim();
    if (currentValue !== "") total++;
    return total;
  }

  const result = arr.reduce(foo, 0);
  console.log("countWordsInSentence ~ result: 👆👆👆👆👆👆👆", result);
}

countWordsInSentence(
  "  Spaces at the beginning and end should not affect the count.  "
);
