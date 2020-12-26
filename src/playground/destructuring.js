//
// Object Destructuring
//

// const person = {
//   name: "Era",
//   age: 28,
//   location: {
//     city: "Tokyo",
//     temp: 10,
//   },
// };

// const { name, age } = person;
// console.log(`${name} is ${age}`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin",
//   },
// };

// const { name: publisheName = "Self-published" } = book.publisher;

// console.log(publisheName);

//
// Array Destructuring
//

const address = [
  "1299 S Juniper Street",
  "Philadelphia",
  "Pennsylvania",
  "19147",
];

const [, city, state = "New york"] = address;

console.log(`Your in ${city} ${state}`);

console.log(`You're in ${state}`);

const item = ["Coffee (hot)", "$2", "$2.50", "$2.75"];

const [itemName, , medium] = item;

console.log(`A medium ${itemName} costs ${medium}`);
