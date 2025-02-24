// Сконвертувати час витрачене виконання завдань у години, замість хвилин.
// Залишити ті завдання, виконання яких потрібно понад 2-х годин.
// Помножити результат на годинну ставку (amount) і додати отримане значення як третій елемент масив.
// Вивести в html таблицю, яка складається з осередків із завданнями у вигляді:

// <tr>
//  <td>Task name: Write a tutorial</td>
//  <td>Task duration: 3 hours</td>
//  <td>Task amount: $300</td>
// </tr>
// debugger;
// const amount = 100;
// const monday = [
//   ['Write a tutorial', 180],
//   ['Some web development', 120],
// ];
// const tuesday = [
//   ['Keep writing that tutorial', 240],
//   ['Some more web development', 360],
//   ['A whole lot of nothing', 90],
// ];

// const tasks = monday.concat(tuesday);

// const tasksList = tasks
//   .map(function(task) {
//     debugger;
//     const minutesInHour = 60;
//     const hours = task[1] / minutesInHour;
    
//     return [task[0], hours];
//   })
//   .filter(function(task) {
//     debugger;

//     return task[1] > 2;
//   })
//   .map(function(task) {
//     debugger;

//     return [task[0], task[1], task[1] * amount];
//   })
//   .map(function(task) {
//     debugger;

//     return `
//       <tr>
//         <td>Task name: ${task[0]}</td>
//         <td>Task duration: ${task[1]} hours</td>
//         <td>Task amount: $${task[2]}</td>
//       </tr>
//     `
//   });
  

// const filteredTasksList = tasksList.filter(function(task) {
//   return task[1] > 2;
// });

// const updatedTasksList = filteredTasksList.map(function(task) {
//   return [task[0], task[1], task[1] * amount];
// });

// document.write(
//   `
//     <table>
//       ${tasksList.join('')}
//     </table>
//   `
// );

// const values = [1,2,3,4];

// const foundItem = values.find(function(item) { 
//   return item > 3;
// }) // 4

// const filteredArray = values.filter(function(item) { // []
//   return item > 100;
// });


// forEach - undefined
// map - []
// filter - [] - if you need to fine all use this method
// find - everything // [], number, string, undefined // if you want to find first - use this
// findIndex // index (number of index)
// some/every // true|false
// reduce

// const tuesday = [
//   ['Keep writing that tutorial', 240],
//   ['Some more web development', 360],
//   ['A whole lot of nothing', 90],
// ];


// const foundItem = tuesday.find(function(task) {
//   return task[1] > 200;  
// });
// console.log(foundItem); // ['Some more web development', 360],


// const foundItem = tuesday.findIndex(function(task) {
//   return task[1] > 300;  
// });
// console.log(foundItem); // 0


// const isEveryItemHaveMoreThenTwoWorkHours = tuesday.every(function(task) {
//   return task[1] > 200;
// }); // false

// const isSomeItemHaveMoreThenTwoWorkHours = tuesday.some(function(task) {
//   return task[1] > 200;
// }); // true

// console.log(isSomeItemHaveMoreThenTwoWorkHours);

// let sum = 0;

// tuesday.forEach(function(task) {
//   sum += task[1];
// });

// console.log(sum);

// const tuesday = [
//   ['Keep writing that tutorial', 240],
//   ['Some more web development', 360],
//   ['A whole lot of nothing', 90],
// ];


// const sum = tuesday.reduce(function(accumulator, item) {
//   debugger;
//   console.log('accumulator', accumulator);
//   console.log('item', item);

//   return accumulator + item[1];
// }, 0);

// console.log(sum);



// Object, delete user.age
// for...in

// const values = [1,2,3,4];
// console.log(values.join(''));


// const user = {
//   firstName: 'Dariia',
//   lastName: 'Popova',
//   age: 34,
//   pets: ['cat', 'dog'],
//   children: undefined,
//   getName: function() { return 'Hello! I\'m Dasha!' },
// };

// const key = 'firstName';

// delete user.age;

// console.log(user[key]);
// console.log(user.lastName);
// console.log(user.age);
// console.log(user.getName());

// for (let key in user) {
//   console.log(key, 'key');
//   console.log(user[key]);
// }

// const usersList = [
//   {
//     id: 1,
//     userName: 'Sasha',
//     age: 29,
//     salary: 10000,
//     homeAddress: 'Poland, Wroclaw'
//   },
//   {
//     id: 2,
//     userName: 'Vlad',
//     age: 18,
//     salary: 5000,
//     homeAddress: 'Ukraine, Kyiv',
//   },
//   {
//     id: 3,
//     userName: 'Oleksii',
//     age: 18,
//     salary: 5000,
//     homeAddress: 'Poland, Wroclaw',
//   },
// ];

// usersList.forEach(function(user) {
//   document.write(
//     `
//       <p>Name ${user.userName}. Age: ${user.age}. Address: ${user.homeAddress}</p>
//     `
//   );
// });
