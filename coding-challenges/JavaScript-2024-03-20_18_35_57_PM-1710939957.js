/*
write code to reverse words of sentence while white space remains same
Input : 'Mohit              Pardhi'
Output :'tihoM             ihdraP'

Input : 'John  kill wick'
Output :

Input : '  Hello  '
Output :
*/

function reverse(sentence) {
  const arr = sentence?.split(/\s+/g);
  let rev = '';

  for (let idx in arr) {
    let element = arr[idx];
    arr[idx] = element?.split('').reverse().join('');
  }

  for (let index = 0; index < sentence.length; index++) {
    const element = sentence[index];

    if (element === ' ') {
      rev = rev + element;
    } else if ((element !== ' ' && rev.charAt(rev.length - 1) === ' ') || rev.charAt(rev.length - 1) === '') {
      rev = rev + arr.shift();
    }
  }
  return rev;
}

const result1 = reverse('  Mohit  Pardhi  tt  ');
console.log('result1: 👆👆👆👆👆👆👆', result1); // '  tihoM  ihdraP  tt  '
const result2 = reverse('John  kill wick'); // 'nhoJ  llik kciw'
console.log('result2: 👆👆👆👆👆👆👆', result2);
const result3 = reverse('  Hello  '); //   olleH
console.log('result3: 👆👆👆👆👆👆👆', result3);
