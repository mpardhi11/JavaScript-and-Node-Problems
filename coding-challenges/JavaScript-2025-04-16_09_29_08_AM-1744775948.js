// eslint-disable-next-line no-constant-condition
if ([]) {
  console.log('This is true');
}
// Output: This is true

if ([].length) {
  console.log('This is false'); // This will not be executed
}

/* Why does this happen? output: This is true
    - In JavaScript, an empty array is considered a truthy value. 
    - When you use an empty array in a conditional statement (like an if statement), it evaluates to true.
    - Therefore, the code inside the if block gets executed, and "This is true" is printed to the console.
 */
