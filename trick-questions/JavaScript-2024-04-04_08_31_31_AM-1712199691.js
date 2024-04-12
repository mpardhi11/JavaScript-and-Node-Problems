const a = {
  a: 1,
  address: {
    city: 'Amravati',
    state: 'MH',
    country: { name: 'India', code: 'IN' },
  },
};
const b = Object.assign({}, a);
const c = structuredClone(a);
b.a = 2;
console.log(a.a); // Answer: 1
console.log(b.a); // Answer: 2
b.address.country = 'UK';

console.log('a.address.country', a.address.country); // Answer: UK due to shallow copy
console.log('b.address.country', b.address.country); // Answer: UK
console.log('c.address.country', c.address.country); // Answer: { name: 'India', code: 'IN' } due to deep copy

// Object.assign() method creates a new object
// Object.assign() method creates a shallow copy of the object
// structuredClone() method creates a deep copy of the object
