var employee1 = { firstName: 'John', lastName: 'Rodson' };
var employee2 = { firstName: 'Jimmy', lastName: 'Baily' };

function invite(message1, message2) {
  console.log(`${message1} ${this.firstName} ${this.lastName} ${message2}`);
}

invite.call(employee1, 'Hi', 'How are you');

invite.apply(employee1, ['Hi', 'How are you']);

const newFun = invite.bind(employee1);

newFun('Hi', 'How are you');
