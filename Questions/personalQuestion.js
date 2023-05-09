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

console.log(value1 === value2)                          // ?
console.log(value1 == value2)                           // ?
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

const obj3 = Object.assign({}, obj1, obj2);                 // guess the Output
const obj4 = Object.assign(obj1, obj2);                     // guess the Output
console.table([obj1, obj2, obj3, obj4]); 
*/

/* 
const obj5 = Object.assign(<what is first argument>, <what is second argument>); 
*/

/*  
// Guess the output why and what will be
const obj1 = {
   name: "Mohit",
   age: 26,
 };

 const obj2 = {
   address: "Pune",
   mobile: 12345,
 };


 const obj3 = Object.assign({}, obj1, obj2);                // Guess the output why and what
 
 const obj4 = Object.assign(new Object(), obj1, obj2);      // Guess the output why and what
                                                            //  is it right or upper one is right
 console.log(obj3);
 console.log(obj4); 
 */

/* 
const objArray = [
  {
    name: "Mohit",
    age: 26,
  },
  {
    address: "Pune",
    mobile: 12345,
  },
  {
    "first name": "Mohit",                                  // how will you access this property of object
  },
];

console.log(); // write logic here
*/

/* 
// check object property is present or not if else condition
const obj1 = {
   name: "Mohit",
   age: 26,
 };

 if (!obj1.test) {                                          // it will work but not recommended

   console.log(typeof obj1.test);                           // guess the type
   console.log(obj1.test);                                  // guess the output
   console.log("property is not present");
 }

 if (<whats other way>) {                                   // find other way its recommended 

   console.log();                                           // typeof <data type of 2nd way>
   console.log();                                           // return value <of 2nd way>
   console.log("property is not present");
 } 
 */

/*
//  in 1 line destructure obj and rename name to firstName then log it
 
 const obj = {
    name :"Mohit"
}

const {} = obj                                          // do something to rename <name to firstName>. only in one line

console.log(firstName); // Mohit 
 */

/* 
// today is Tuesday 09-05-2023 question is 
// from sun day to sat day make object like below it
// when you wright code 
// take start of week till end of week total 7 days 

i need object in this from 
const array = {
    07-05-2023 :{
        dayName:"sunday"
    }
    08-05-2023 :{
        dayName:"monday"
    }
    09-05-2023 :{
        dayName:"tuesday"
    }
    10-05-2023 :{
        dayName:"wednesday"
    }
    11-05-2023 :{
        dayName:"thursday"
    }
    12-05-2023 :{
        dayName:"friday"
    }
    13-05-2023 :{
        dayName:"saturday"
    }
} 
*/

/* 
// JSON relates questions

1) what is JSON
2) full from of JSON
3) JSON is ____ based data format
4) method name which convert string to JSON
4) what is used before JSON
5) name data types supported by JSON tip:  total 6 datatype
6) method name convert JSON to string
*/
