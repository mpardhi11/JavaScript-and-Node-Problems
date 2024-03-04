/*
Reverse a String:
Write a function to reverse a string without using the built-in reverse method.
*/

function reverseString(str) {
  let data = "";
  str.split("").forEach((element) => (data = `${element}${data}`));

  return data;
}

console.log("Result", reverseString("Mohit Pardhi"));

function reverseStringWay2(str) {
  return str.split("").reduce((reversed, char) => char + reversed, "");
}

console.log("Result:", reverseStringWay2("Mohit Pardhi"));
