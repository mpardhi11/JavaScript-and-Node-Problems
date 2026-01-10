// 1. Regular function call
function greet(name) {
  return `Hello, ${name}`;
}
console.log(greet('Alice'));

// 2. Method call (function as an object property)
const person = {
  name: 'Bob',
  greet: function () {
    return `Hello, ${this.name}`;
  },
};
console.log(person.greet());

// 3. Constructor call (using new)
function User() {
  this.name = 'mohit';
}
const user1 = new User(); // new User <without moon barackets >  (this will also execute the function)
console.log(user1.name);

// 4. Indirect call using call() or apply()
function introduce(city) {
  return `${this.name} lives in ${city}`;
}
console.log(introduce.call(user1, 'New York'));
