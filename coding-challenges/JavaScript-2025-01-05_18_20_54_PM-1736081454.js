// From given stream reverse each word and return that strength.
// Example : Hello how are you?
//          olleH woh era ?uoy

function reverseWordsOfString(str) {
  const rev = str
    .split(' ')
    .map((word) => {
      return [...word].reverse().join('');
    })
    .join(' ');

  return rev;
}

let rev = reverseWordsOfString('Hello how are you?');

console.log(rev);
