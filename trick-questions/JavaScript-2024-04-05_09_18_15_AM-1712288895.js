/*
Can we access the variable declared inside the try block in the catch block?
*/

function sum() {
  try {
    var localVarTry = 'I am inside try block';
    throw new Error('Something went wrong');
    var myVar = 'I am inside try block';
  } catch (error) {
    // Accessing localVarTry
    console.log('sum ~ myVar: ', myVar); // sum ~ myVar:  undefined
    console.log(localVarTry); // I am inside try block
  } finally {
    // Accessing localVarTry
    console.log(localVarTry); // I am inside try block
    console.log('sum ~ myVar: ', myVar); // sum ~ myVar:  undefined
  }
}

sum();
