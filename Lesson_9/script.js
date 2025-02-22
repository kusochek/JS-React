// Написати функцію, яка приймає як аргумент(параметр) два масиви
// Порівнює суми всіх ЧИСЛОВИХ елементів.
// Той масив, сума якого більша – повинен повернутись функцією.

// const arrayOne = [1, 200, 300, 230, 123, 458]; // 1312
// const arrayTwo = [30, 36, 98, 102, 234]; // 500

// function calculateSumOfArrayItems(array) {
//   let sum = 0;

//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }

//   return sum;
// }

// function getBiggerArray(listOne, listTwo) {
//   const sumOne = calculateSumOfArrayItems(listOne);
//   const sumTwo = calculateSumOfArrayItems(listTwo);

//   return sumOne > sumTwo ? listOne : listTwo;
// }

// const biggerArray = getBiggerArray(arrayOne, arrayTwo);
// console.log(biggerArray);

// function doSomething(a) {
//   if (a > 100) {
//     return 'too big';
//   }

//   return a;
// }

// doSomething(10);
// doSomething(200);


// Реалізувати функцію copy(list) копіювання масиву.
// Передбачити можливість передачі другим аргументом функції.
// При копіюванні масиву – функція застосовується до кожного елементу копіюваного масиву.

// const arr = [1, 2, [10, 20], [100, 200, [30, 40, [1000, 2000]]]];

// function multiply(item) {
//   return item * 2;
// }

// function sum(item) {
//   return item + 100;
// }

// function copy(list, func) {
//   const copiedArray = [];

//   for (let i = 0; i < list.length; i++) {
//     if (Array.isArray(list[i])) {
//       const currentResult = copy(list[i], func);

//       copiedArray.push(currentResult);
//     } else {
//       const modifiedItem = func(list[i]);
//       copiedArray.push(modifiedItem);
//     }
//   }

//   return copiedArray;
// }

// const copiedArray = copy(arr, multiply);
// const copiedArraySum = copy(arr, sum);

// console.log(copiedArray);
// console.log(copiedArraySum);



// forEach
// map
// filter

// const fruits = ['apple', 'orange', 'banana', 'mango'];

// fruits.forEach(function (item, index, array) {
//   console.log(item, 'item'); // apple => orange => banana => mango
//   console.log(index, 'index');
//   console.log(array, 'array');
// });

// const listItems = [];


// fruits.forEach(function (item) {
//   const itemToUpperCase = item.toUpperCase();
  
//   listItems.push(`<li>${itemToUpperCase}</li>`);
// });

// console.log(list);

// document.write(
//   `
//     <h2>List of Product</h2>
//     <ol>${listItems.join('')}</ol>
//   `
// );

// const fruits = ['apple', 'orange', 'banana', 'mango'];

// const newArray = fruits.map(function (item, index, array) {
//   console.log(item, 'item'); // apple => orange => banana => mango
//   console.log(index, 'index');
//   console.log(array, 'array');
// });

// const listItems = fruits.map(function (item) {
//   debugger;
//   if (item === 'apple') {
//     return `<li>${item.toUpperCase()} 10</li>`;
//   }

//   return `<li>${item.toUpperCase()}</li>`;
// });

// console.log(listItems);

// document.write(
//   `
//     <h2>List of Product</h2>
//     <ol>${listItems.join('')}</ol>
//   `
// );

// const values = [38, 98, 100, 12, -123, 1234, 10, 0, 5, 53];

// const filteredArray = values.filter(function (item) {
//   debugger;
//   return item > 50;
// });

// console.log(filteredArray);


// renders user
// render only men, only women

// const users = [
//   ['Anna', 26, 'female', 'green'],
//   ['Borya', 41, 'male', 'brown'],
//   ['Elza', 31, 'female', 'blue'],
//   ['Vasya', 19, 'male', 'blue'],
//   ['Maksym', 30, 'male', 'brown'],
// ];

// const gender = prompt('What gender of users do you want to see?');

// const usersList = users
//   .filter(function (user) {
//     // user - ['Anna', 26, 'female', 'green'],
//     return user[2] === gender;
//   })
//   .map(function (user) {
//     return `<li>Name: ${user[0]}, age ${user[1]}, gender: ${user[2]}, eyes color: ${user[3]}</li>`;
//   });

// document.write(
//   `
//     <h2>Users List</h2>
//     <ol>
//       ${usersList.join('')}
//     </ol>
//   `
// );


// 1. Array of icons should be reversed.

// 2. Rendered list looks like:
// 	<ul>
// 		<li>dog Pushok 🐶</li>
// 		<li>mouse Jerry 🐭</li>
// 		<li>lion Simba 🦁</li>
// 	</ul>

// 	or

// 	<ol>
// 		<li>dog Pushok 🐶</li>
// 		<li>mouse Jerry 🐭</li>
// 		<li>lion Simba 🦁</li>
// 	</ol>

// 3. Original arrays should not change.

// const types = [`dog`,`mouse`,`lion`];
// const icons = [`🦁`, `🐭`, `🐶`];
// const names = [`Pushok`, `Jerry`, `Simba`];
