const obj = {
  1: 'a',
  1: 'b',
  [1]: 'c',
};

console.log(obj); // {1: 'c'}
// The object obj has three properties with the key 1.
// The last value assigned to the key 1 is 'c', so the output is {1: 'c'}.
