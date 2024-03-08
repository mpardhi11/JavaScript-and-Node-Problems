/* 
Count Vowels:
Write a function to count the number of vowels in a given string.
Input: "Hello, World!"
Expected Output: 3
*/

function countVowels(str) {
  let counter = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  Array.from(str).forEach((element) => {
    element = element.toLowerCase();
    if (vowels.includes(element)) counter++;
  });

  return counter;
}

const result = countVowels("HellO, World! I am hErE ");
console.log("result:", result); // result: 7
