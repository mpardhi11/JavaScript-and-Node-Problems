/* Reverse Words in a Sentence:
Reverse Words in a Sentence (with Punctuation):
Description: Write a function to reverse the order of words in a sentence while preserving the punctuation and spaces.

Input:"Hello,   World! How are you?"
Expected Output: "you? are How World! Hello,"

Constraints:
            Preserve the order of punctuation marks and spaces in the original sentence.
            Handle multiple spaces between words.
 */

function reverseSentence(sentence) {
  const trimmed = sentence.split(" ").map((element) => element.trim());
  const reverse = trimmed.reverse().join(" ");
  return reverse;
}

const input = "Hello, World! How are you?";

console.log("reverseSentence: 👆👆👆👆👆👆👆", reverseSentence(input));
