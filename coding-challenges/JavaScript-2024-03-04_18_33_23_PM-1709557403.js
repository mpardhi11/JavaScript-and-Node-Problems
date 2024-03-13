/*
Check for Anagrams:
Write a function to check if two words are anagrams of each other.
*/

function areAnagrams(str1, str2) {
  try {
    str1 = str1.replace(/\s/g, "")?.split("").sort()?.join();
    str2 = str2.replace(/\s/g, "")?.split("").sort()?.join();

    return str1 === str2;
  } catch (error) {
    throw error;
  }
}

const result1 = areAnagrams("car", "cra");
console.log("result1: ", result1);

const result2 = areAnagrams("modi", "manu");
console.log("result2: ", result2);
