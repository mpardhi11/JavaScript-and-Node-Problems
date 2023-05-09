/* 
1) this way of declaration called <singleton object>
const person1 = new Object(); 
*/

/* 
2) this way of declaration called <non singleton object>
const person2 = {}; 
*/

/* 
3) what is single ton object
*/

/* 
4) how to declare object property this way

key : value             key     :   value 
1 : "b"                 number  :   string
2 : "c"                 number  :   string
3 : "d"                 number  :   string
4 : "abc"               number  :   string
key is numeric and 
value is string 
*/

// 5) in object key or property is numeric how will you access it
// {
//   11: "numericValue",
//   12: 12345,
//   14: "Mohit"
// }
//  access all keys

/* 
6) whats name of operator "?." or  ?.
question dot operator
*/

/* 
7) explain optional chaining [theory question]
*/

/* 
8) what will be the output

const obj = {};

obj.id=12345
obj.name="Mohit"

const guessTheOutput = obj?.address

console.log(guessTheOutput)
*/

/* 
9) what will be the output
const value1 = undefined
const value2 = null

console.log(value1 === value2) // ?
console.log(value1 == value2) // ?
*/

/* 
const obj1 = {
  name: "Mohit",
  age: 26,
};

const obj2 = {
  address: "Pune",
  mobile: 12345,
};

const obj3 = Object.assign({}, obj1, obj2); // guess the Output
const obj4 = Object.assign(obj1, obj2); // guess the Output
console.table([obj1, obj2, obj3, obj4]); 


*/

/* 
const obj5 = Object.assign(<what is first argument>, <what is second argument>); 
*/

/*  

// Guess the output why and
const obj1 = {
   name: "Mohit",
   age: 26,
 };

 const obj2 = {
   address: "Pune",
   mobile: 12345,
 };

 
 const obj3 = Object.assign({}, obj1, obj2); // Guess the output why and what
 
 const obj4 = Object.assign(new Object(), obj1, obj2); // Guess the output why and what
                    //  is it right or upper one is right
 console.log(obj3);
 console.log(obj4); 
 */
