// Return the Objects Keys and Values
// Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.

// Examples
keysAndValues({ a: 1, b: 2, c: 3 });
// ➞ [["a", "b", "c"], [1, 2, 3]]

keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" });
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

keysAndValues({ key1: true, key2: false, key3: undefined });
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]

keysAndValues({ a: "Apple", c: "Microsoft", b: "Google", x: "asd", p: "qwe" });
//[ 'a', 'b', 'c', 'p', 'x' ] [ 'Apple', 'Google', 'Microsoft', 'qwe', 'asd' ]

function keysAndValues(givenObject) {
  const keys = Object.keys(givenObject);
  const values = [];
  keys.sort();

  for (const key of keys) {
    values.push(givenObject[key]);
  }

  console.log(keys, values);
  return [keys, values];
}
