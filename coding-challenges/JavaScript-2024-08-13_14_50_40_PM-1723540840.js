const weekMap = new WeakMap();

const obj1 = { name: 'John' };
const obj2 = { name: 'Jane' };

weekMap.set(obj1, 'Value 1');
weekMap.set(obj2, 'Value 2');

const arr = [obj1, obj2];
const result = arr.map((obj) => weekMap.get(obj)).join(', ');

console.log(result); // Value 1, Value 2
// -----------------------------------------------------------
/*
// Set key-value pairs in the WeakMap
weakMap.set(obj1, "value associated with obj1");
weakMap.set(obj2, "value associated with obj2");

// Retrieve values
console.log(weakMap.get(obj1)); // "value associated with obj1"
console.log(weakMap.get(obj2)); // "value associated with obj2"

// Check for presence of a key
console.log(weakMap.has(obj1)); // true

// Delete a key-value pair
weakMap.delete(obj1);
console.log(weakMap.has(obj1)); // false
*/
