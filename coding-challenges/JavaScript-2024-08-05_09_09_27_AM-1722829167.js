const a = { value: 1 };
const b = Object.create(a);
b.value = 2;

console.log(b.value); // 2
console.log(a.value); // 1

/* Explanation:
The value of b.value is 2 because the value property is created on the b object itself. 
 */
