const obj = {
  a: 1,
  b() {
    return this.a + 1;
  },
};

const { b } = obj;
console.log(b());

/* What is the output?
1) 1
2) 2
3) NaN
4) ReferenceError
*/
