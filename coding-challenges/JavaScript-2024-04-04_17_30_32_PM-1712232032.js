/* 
Splitting Objects Inside an Array
You bought a few bunches of fruit over the weekend. 
Create a function that splits a bunch into singular objects inside an array.

Examples
Notes
The input array will never be empty.
Objects will always have a name and quantity over 0.
The returned object should have each fruit in the same order as the original. 
*/

splitBunches([{ name: 'grapes', quantity: 2 }]);
// ➞ [({ name: 'grapes', quantity: 1 }, { name: 'grapes', quantity: 1 })];

splitBunches([
  { name: 'currants', quantity: 1 },
  { name: 'grapes', quantity: 2 },
  { name: 'bananas', quantity: 2 },
])[ // ➞
  ({ name: 'currants', quantity: 1 },
  { name: 'grapes', quantity: 1 },
  { name: 'grapes', quantity: 1 },
  { name: 'bananas', quantity: 1 },
  { name: 'bananas', quantity: 1 })
];

function splitBunches(obj) {
  const result = [];

  obj.map((ele) => {
    let quantity = ele?.quantity;

    if (quantity > 1) {
      while (quantity > 0) {
        result.push({ ...ele, quantity: 1 });
        quantity--;
      }
    } else {
      result.push(ele);
    }
  });
  console.log('splitBunches ~ result: 👆👆👆👆👆👆👆', result);
  return result;
}
