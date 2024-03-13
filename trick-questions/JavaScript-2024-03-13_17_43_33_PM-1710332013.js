/* function isThatTrue() {
  return 'yes it is';
}

function isThatTrueAlso() {
  return 'yes why not';
}

console.log('Guess the O/P : ', isThatTrue() && isThatTrueAlso()); */
/*
isThatTrue returns truthy value, so the second function isThatTrueAlso executes and returns 'yes why not'
*/

function isThatTrue() {
  // example of falsy value "" or 0 or null or undefined or NaN
  return null; // falsy
}

function isThatTrueAlso() {
  return 'yes why not';
}

console.log('Guess the O/P : ', isThatTrue() && isThatTrueAlso());
// Guess the O/P :
// Guess the O/P :  undefined // undefined
// Guess the O/P :  null // null
