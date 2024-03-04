/*
FizzBuzz:
Write a program that prints the numbers from 1 to 100. 
But for multiples of three, print "Fizz" instead of the number, and 
for the multiples of five, print "Buzz." 
For numbers that are multiples of both three and five, print "FizzBuzz."

Ex. 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
Result:  [1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz',11,'Fizz',13,14,'FizzBuzz']
*/

function fizzBuzz() {
  const data = [];

  for (let index = 1; index <= 15; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      data.push("FizzBuzz");
    } else if (index % 3 === 0) {
      data.push("Fizz");
    } else if (index % 5 === 0) {
      data.push("Buzz");
    } else {
      data.push(index);
    }
  }

  return data;
}

console.log("Result: ", fizzBuzz());

function fizzBuzzOptimized() {
  const result = [];

  for (let i = 1; i <= 100; i++) {
    let output = "";

    if (i % 3 === 0) output += "Fizz";

    if (i % 5 === 0) output += "Buzz";

    result.push(output || i);
  }

  return result;
}

console.log("Result: ", fizzBuzzOptimized());
