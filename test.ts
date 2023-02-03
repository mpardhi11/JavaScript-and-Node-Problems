// Reverse Words in a String
// Given an input string, reverse the string word by word, the first word will be the last, and so on.
// Notes
// A word is defined as a sequence of non-space characters.
// The input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
// You need to reduce multiple spaces between two words to a single space in the reversed string.
// Try to solve this in linear time.

// -----------------------------------------------------------------------------------------------------------------

// Examples
reverseWords(" the sky is blue"); // ➞ "blue is sky the"

reverseWords("hello   world!  "); // ➞ "world! hello"

reverseWords("a good example"); // ➞ "example good a"

function reverseWords(givenString: string) {
  //   let x = givenString.trim();
  //   let y = x.split(" "); // ["the", "sky", "is", "blue"][("hello", "", "", "world!")] [ ("a", "good", "example") ];
  //   let z = y.reverse().reduce((acc, value) => {
  //     if (value !== "" && value !== null) {
  //       acc += " " + value;
  //     }
  //     return acc;
  //   }, "");

  const result = givenString
    .trim()
    .split(" ")
    .reverse()
    .reduce((acc, value) => {
      if (value !== "" && value !== null) {
        acc += " " + value;
      }
      return acc;
    }, "");
  console.log(result);
  return result;
}
