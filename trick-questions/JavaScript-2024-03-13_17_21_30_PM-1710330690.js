// guess the output
let { x, x: y } = { x: 2 };

console.log('y: ', y); //y:  2
console.log('x: ', x); //x:  2

/*

let { x, x } = { x: 2 }; // error
console.log('y: ', y); //y:  2
console.log('x: ', x); //x:  2

will give error
we can not destructured same key twice, however we can assign the key to another variable multiple times
let { x, x: y, x: z } = { x: 2 }; // allowed
*/

/*
In the  JavaScript destructuring assignment, the term "renaming assignment" or "aliasing" refers to the ability to assign the value of a property to a variable with a different name during the destructuring process. This allows you to create a new variable that holds the same value as an existing property, but with a different identifier.

javascript
Copy code
let { x, x: y } = { x: 2 };

*/
