/* Given a string, the task is to check if every vowel is present or not. 
We consider a vowel to be present if it is present in 
upper case or lower case. i.e. ‘a’, ‘e’, ‘i’.’o’, ‘u’ or ‘A’, ‘E’, ‘I’, ‘O’, ‘U’ .
Input : geeksforgeeks
Output : Not Accepted
All vowels except 'a','i','u' are not present

Input : ABeeIghiObhkUul
Output : Accepted
All vowels are present
 */

function checkVowels(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let strArr = str.toLowerCase().split('');
  let result = vowels.every((vowel) => strArr.includes(vowel));
  return result ? 'Accepted' : 'Not Accepted';
}

console.log(checkVowels('ABeeIghiObhkUul')); // Accepted
console.log(checkVowels('geeksforgeeks')); // Not Accepted
