/*
Title Case a Sentence:
Write a function that takes a sentence and capitalizes the first letter of each word while making sure the rest of the word is in lowercase.

Input: "the quick brown fox"
Expected Output: "The Quick Brown Fox"

*/

import pkg from "lodash";
const { startCase, toLower } = pkg;

const str = "the quick brown fox";
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const caps = str.split(" ").map(capitalize).join(" ");

console.log("caps: 👆👆👆👆👆👆👆", caps);

// using lodash

console.log(startCase(toLower(str)));
