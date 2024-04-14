console.log({} + []); // Output: [object Object]

// Explanation: The {} object and [] array are converted to strings before concatenation.
// The {} object is converted to "[object Object]" and [] array is converted to an empty string.
// The concatenation of both strings results in the output [object Object].

console.log([] + {}); // Output: [object Object]

// Explanation: The {} object and [] array are converted to strings before concatenation.
// The {} object is converted to "[object Object]" and [] array is converted to an empty string.
// The concatenation of both strings results in the output [object Object].

console.log({} + [1, 2, 3]); // [object Object]1,2,3
