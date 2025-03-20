// cut, copy, paste
// const firstName = document.querySelector('#firstName');

// firstName.addEventListener('copy', () => {
//   console.log('copy');
// });


// firstName.addEventListener('paste', () => {
//   console.log('paste');
// });


// firstName.addEventListener('cut', () => {
//   console.log('cut');
// });


// Bubbling and capturing
// stopPropagation

// const span = document.querySelector('#span');
// const p = document.querySelector('#p');
// const div = document.querySelector('#div');
// const anotherDiv = document.querySelector('.another-div');

// span.addEventListener('click', (e) => {
//   e.stopPropagation();
//   console.log('span');
// })

// p.addEventListener('click', (e) => {
//   e.stopPropagation();
//   console.log('p');
// })

// div.addEventListener('click', () => {
//   console.log('div');
// })


// anotherDiv.addEventListener('click', () => {
//   console.log('anotherDiv');
// })


// localStorage/sessionStorage
// setItem(key, value)
// getItem(key)
// removeItem(key)
// JSON.parse/JSON.stringify

// localStorage.setItem('firstName', 'Oleksandra');
// localStorage.setItem('lastName', 'Dontsova');
// localStorage.setItem('age', 29);
// localStorage.setItem('haveCat', true);
// localStorage.setItem('firstName', 'Sasha');

// localStorage.removeItem('firstName')


// console.log(localStorage.getItem('firstName'));

// const user = {
//   firstName: 'Oleh',
//   lastName: 'Borohovych',
//   age: 30,
// };

// localStorage.setItem('user', JSON.stringify(user));


// const user = localStorage.getItem('user');
// const parsedUser = JSON.parse(user);
// console.log(parsedUser);



