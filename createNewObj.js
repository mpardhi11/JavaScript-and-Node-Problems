// Way 1
const obj1 = new Object();
obj1.age = 25;
obj1.name = "Mohit";

// Way 2
const obj2 = Object.create(null);
obj2.age = 26;
obj2.name = "John";

// Way 3
const obj3 = {
  age: 27,
  name: "Joy",
};

// Way 4

function Person(name) {
  this.age = 26;
  this.name = name;
}

const obj4 = new Person("Kia");

// way 5

class Person2 {
  age = 26;
  name;

  constructor(nav) {
    this.name = nav;
  }
}

const obj5 = new Person2("BackTack");

//

const person3 = (name) => {
  age = 26;
  name = name;
};

const obj6 = new person3("Kia");
