// Функція, що самовизивається (IIFE)
// const animal = ((name) => {
//   return {
//     getAnimal: () => {
//       return name;
//     }
//   }
// })('Crocodile');

// console.log(animal.getAnimal()); // Crocodile


// Temporal Dead Zone

// console.log(flower);
// const flower = 'sunflower';


// High Order Function (HOF)

// const ROLES = {
//   basic: 'basic',
//   admin: 'admin',
// };

// const user = {
//   firstName: 'Vova',
//   lastName: 'Galushko',
//   age: 22,
//   birthDay: '01-22-2003',
//   phoneNumber: '+1234567890',
//   roles: [ROLES.admin],
// };

// function renderUser(userRoles) {
//   const { roles } = user; // ['admin']
//   const roleRender = userRoles.find(([role]) => roles.includes(role)); // [ROLES.admin, adminUserFn]
//   const [, renderFn] = roleRender;
//   return renderFn;
// }

// function userFn(basicUserFn, adminUserFn) {
//   return renderUser([
//     [ROLES.basic, basicUserFn],
//     [ROLES.admin, adminUserFn],
//   ]);
// }

// function renderBasicUser() {
//   alert('Render basic user!');
// }

// function renderAdminUser() {
//   alert('Render admin user!');
// }

// const functionToCall = userFn(renderBasicUser, renderAdminUser);
// functionToCall();


// Збір сміття
// Виконувана на даний момент функція, її локальні змінні та параметри.
// Інші функції в поточному ланцюжку вкладених викликів, їх локальні змінні та параметри.
// Глобальні змінні.

// let user = {
//   name: 'Vlad',
// }; 

// user - object - name = Vlad
// user = null;

// function marry(man, woman) {
//   woman.husband = man;
//   man.wife = woman;

//   return {
//     father: man,
//     mother: woman
//   }
// }

// const family = marry({
//   name: 'John'
// }, {
//   name: 'Ann'
// });


// delete family.father;
// delete family.mother.husband;
// console.log(family);
// family = {};

// console.log(family.mother);


// i = i ? i < 0 ? Math.max(0, len + i) : i : 0;

// list → lst.
// userAgent → ua.
// browser → brsr.

// абстрактні імена

// var ssilka

// синоніми - притримуйтесь однакових назв

// Повторно використання імен

// const user
// { const user }

// __ _____ ????


// дужееееее великі ф-ї



// Генератори
// function* generateSequence() {
//   yield 1;
//   yield 2;
//   return 3;
// }

// let generator = generateSequence();

// let one = generator.next();
// alert(one); // {value: 1, done: false}
// let two = generator.next();
// alert(two); // {value: 2, done: false}
// let three = generator.next();
// alert(three); // {value: 3, done: true}

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// EventLoop

// Microtask - Promise (async await, fetch)
// Macrotask - Timeout, Interval, complicated task
// const a = 10;
// const b = 20;

// const button = document.querySelector('#clickBTN');
// button.addEventListener('click', () => console.log(a,b));

// setTimeout(() => console.log('Hello, world!'), 7000);
// setTimeout(() => console.log('Hello, world!'), 200);
// setTimeout(() => console.log('Hello, world!'), 4000);
// setTimeout(() => console.log('Hello, world!'), 5000);
// setTimeout(() => console.log('Hello, world!'), 6000);

// fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json&date=20220917&valcode=EUR')
//   .then(data => data.json())
//   .then(response => console.log(response));

// fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json&date=20220917&valcode=EUR')
//   .then(data => data.json())
//   .then(response => console.log(response));

// window.i = 0;

// for (let i = 0; i < 6; i++) {
//   setTimeout(() => console.log(i), 1000);
//   // console.log(i);
// }

