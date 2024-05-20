/* 
Sentences Case
Given a sentence, return the sentence with the first letter of each word capitalized.
if the input is not a string, return an empty string
if whole word is in uppercase, remain the word in uppercase
Input 1: "hello world"
Output 1: "Hello World"

Input 2: "HELLO WORLD"
Output 2: "HELLO WORLD"

Input 3: 123
Output 3: ""

Input 4: "My Name Is john. I am JAVA Developer"
Output 4: "My name is john. I am JAVA developer"
*/

function sentenceCase(str) {
  if (typeof str !== 'string') return '';

  const arrayOfSentences = str.split('.');
  console.log('result ~ sentence: 👆👆👆👆👆👆👆', arrayOfSentences);

  const result = arrayOfSentences.map((sentence) => {
    sentence = sentence.trim();
    const words = sentence.split(' ');
    const capitalizedSentence = words.map((word, index) => {
      if (word === word.toUpperCase()) return word;
      if (index === 0) return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      return word.toLowerCase();
    });

    const joined = capitalizedSentence.join(' ');
    console.log('capitalizedSentence ~ capitalizedSentence: 👆👆👆👆👆👆👆', joined);
    return joined;
  });
}

console.log(sentenceCase('My Name Is john. I am JAVA Developer'));
