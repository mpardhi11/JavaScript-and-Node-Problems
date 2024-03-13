function testHoisting() {
  return foo;
  console.log('here i am');
  foo = 10;
  function foo() {
    console.log(' i am inside foo function');
  }
  var foo = 11;
}

console.log(testHoisting()); // [Function: foo]
console.log(testHoisting()()); //  i am inside foo function
console.log(typeof testHoisting()); // function

/*
testHoisting start executing js engine will hoist the function first 
then start executing the function
now due to return statement foo is a function so it will return foo function
and rest of the code will not execute
*/
