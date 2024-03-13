if ([]) {
  // meaning if array is present // empty or has elements i wll execute the block
  console.log('Hey there!');
  // an empty array is considered a truthy value,
  // so the code inside the block will be executed.
  // Therefore, 'Hey there!' will be printed to the console.
}

if ([] == false) {
  // step 1 due to == operator, [] is converted to ""
  // step 2 "" == false
  // step 3 due to == operator "" and false both of different type (== convert into same type) so converted to 0 == 0

  console.log('I am here!');
} else {
  console.log('are u looking for me!');
}
