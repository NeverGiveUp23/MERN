const person = {
  firstName: 'Bob',
  lastName: 'Marley',
  email: 'bob@marley.com',
  password: 'sekureP@ssw0rd9',
  username: 'barley',
  addresses: [
    {
      address: '1600 Pennsylvania Avenue',
      city: 'Washington, D.C.',
      zipcode: '20500',
    },
    {
      address: '221B Baker St.',
      city: 'London',
      zipcode: 'WC2N 5DU',
    }
  ],
  createdAt: 1543945177623
};
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

// AFTER ES6
const {addresses : [, mySecondHome]} = person;
const { email: myEmail, firstName } = person;
const [, secondAnimal, thirdAnimal] = animals;
const {addresses : [ , {city: felix}]} = person;
console.log(secondAnimal, thirdAnimal)
console.log( mySecondHome)
console.log(felix)
// => horse