// import axios from "axios";

import sum from "./modules/modules.js";
import { a, b } from "./variables/vriables.js";

// Деструктуризація
// { data }

// data from server
// const statuses = ['SUCCESS', 'REJECTED', ['Anna', 'Lilia', [1,2]]];
// const REJECTED = statuses[1];
// const SUCCESS = statuses[0];
// const ON_HOLD = statuses[2];

// const [success, rejected, [anna, lilia, [one, two]]] = statuses;

// const anna = names[0];
// console.log(success, rejected, anna, lilia, one);

// const colors = ['red', 'blue', 'green', ['gold', 'milk', ['white', 'beague']]];

// const [RED, BLUE, GREEN, otherColor] = colors; // otherColor - ['gold', 'milk', ['white', 'beague']]
// const [gold, milk] = otherColor;

// const [RED, BLUE, ...color] = colors;

// console.log(color);

// if (user.status === REJECTED) {
//   console.log(111);
// }
// <p>REJECTED</p>


// const user = {
//   firstName: 'Anna',
//   lastName: 'Blanka',
//   age: 45,
//   hasWork: true,
//   car: {
//     mark: 'BMW',
//     model: 'X5',
//     color: 'black',
//   }
// };

// const userTwo = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 29,
//   hasWork: true,
// };

// console.log(user);

// const firstName = user.firstName;


// const { firstName: userFirstName, lastName: userLastName, hasWork: userWork } = user;
// console.log(userFirstName, userLastName, userWork);

// const { firstName, lastName, hasWork, car: { mark, model, color } } = user;
// const { car: { model, color }, firstName, lastName } = user;
// console.log(firstName, lastName, hasWork, mark);

// const { firstName: firstNameTwo, lastName: lastNameTwo, hasWork: hasWorkTwo } = userTwo;
// console.log(firstNameTwo, lastNameTwo, hasWorkTwo);


// const API = 'https://67f3edc4cbef97f40d2cb51f.mockapi.io/api/v1';

// const ex = {
//   data: [],
//   currentPage: 2,
//   range: 10,
//   total: 190,
// };


// async function getUsers() {
//   const response = await axios.get(`${API}/users`);

//   console.log(response);
// }

// getUsers();


// MODULES
// MVC - pattern
// MODEL VIEW CONTROLLER


// npm
// nvm
// node

const result = sum(a, b);
console.log(result);

