// 1️⃣ Concatenation of Strings
//    •    Ask the user to enter three different strings.
//    •    Display these three strings in any random order using one command (string concatenation).
//    •    Example:
//    •    User input: "apple", "banana", "cherry"
//    •    Output: "banana cherry apple" (the order can be different)
// 2️⃣ Splitting a Five-Digit Number
//    •    Ask the user to enter a five-digit number using prompt().
//    •    Extract each digit separately and display them in their original order, separated by a space.
//    •    Example:
//    •    User input: 54321
//    •    Output: 5 4 3 2 1
// 📌 Requirements:
//    •    Make sure to test your code before submitting.
//    •    Submit your work as a pull request (PR) on GitHub.
//    •    A successfully completed assignment is an approved PR.


// firstValue = prompt('Enter first value');
// secondValue = prompt('Enter second value!');
// thirdValue = prompt('Third value');

// alert(`${secondValue}, ${firstValue}, ${thirdValue}`);


// ===, ==, >, <, >=, <=, !=, !==
// === - строге порівняння
// == - не строге порівняння

// x = 20;

// console.log(3 > 5); // false
// console.log(3 < 10); // true
// console.log(5 >= 5); // true
// console.log(5 <= 5); // true
// console.log('Sasha'.length < 'Pasha'.length); // false
// console.log(5 === 5); // true
// console.log(5 === '5'); // false
// console.log(5 == '5'); // true

// console.log('Sasha' === 'Pasha'); // false
// console.log('Sasha' === 'Sasha'); // true
// console.log('Sasha'.toLowerCase() === 'sasha'); // true
// console.log(0 == false); // true
// console.log(0 === false); // false
// console.log('Olha' !== 'Oleksii'); // false
// console.log('Olha' != 'Oleksii'); // false


// slice
// firstName = prompt('Enter your first name'); // Pasha

// correctFirstName = `${firstName[0].toUpperCase()}${firstName.slice(1, firstName.length).toLowerCase()}`;
// console.log(correctFirstName);




// &&, ||
// && - AND
// if all values are true it return the last one
// or first false value

// || - OR
// first true value
// if all values are false return the last one

// debugger;

// console.log('firstName' && '' && 15);

// console.log('bmw' && 'audi'); // audi
// console.log('bmw' && ''); // ''
// console.log(0 && undefined && null); // 0



// console.log('bmw' || 'audi'); // bmw
// console.log('' || 'audi'); // audi
// console.log(0 || undefined); // undefined

// console.log('apple' && 'orange' && 'banana'); // banana
// console.log('apple' && undefined && 'orange'); // undefined
// console.log('false' && null && 'potato'); // null
// console.log(('apple' && false) || 'orange'); // orange
// console.log('apple' && ('orange' || 0)); // orange
// console.log((0 && 'potato') || 'orange' || ('lemon' && null)); // orange


// userName = prompt('Your username');

// document.write(`<h1>username: ${userName || 'User Name'} </h1>`);


// if else
// debugger;
// +=, -=, ++, --
// goods to buy

// userName = prompt('Your username');

// console.log(!!'Sasha'); //true
// console.log(!!null); // false

// debugger;

// if (userName) {
//   console.log(`Hello ${userName}! Nice to sse you!`);
// } else {
//   console.log('Ooops! I don\'t know you!');
// }

// listOfGoods = 'Banana, Apple, Coconut';
// buscket = 0;

// debugger;

// shop = 'Potato, Banana, Apple, Tomato, Cucumber';

// if (shop.indexOf('Banana') !== -1) {
//   // buscket++;
//   // ++buscket;
//   // buscket = buscket + 1;
//   // buscket += 5;
//   // buscket = buscket + 5; // DONT USE IT
// } else if (shop.indexOf('Apple') !== -1) {
//   buscket = buscket + 1;
// } else if (shop.indexOf('Coconut') !== -1) {
//   buscket = buscket + 1;
// }

// console.log(buscket); // 1


// example with check email
// required - more then 5 symbols
// @ must appear in email
// @ cannot be on the start of string
// @ cannot be on the end of string

// email = prompt('Put your email!');

// if (email.length <= 5) {
//   console.log('Your email should be more then 5 symbols');
// } else if (email.indexOf('@') === -1) {
//   console.log('Your email should contain @');
// } else if (email[0] === '@') {
//   console.log('@ cannot be on the start of string');
// } else if (email[email.length - 1] === '@') {
//   console.log('@ cannot be on the end of string');
// } else {
//   console.log(`Your email ${email} saved`);
// }



// dictionary
// colors 
// best practices switch...case

status = prompt('status');
newStatus = '';

// if (status === 'Approved') {
//   newStatus = 'Прийнятий';
// } else if (status === 'Declined') {
//   newStatus = 'Відмова';
// }  else if (status === 'On Hold') {
//   newStatus = 'На утриманні';
// }  else if (status === 'In Progress') {
//   newStatus = 'В процесі';
// }  else if (status === 'Done') {
//   newStatus = 'Готовий';
// } else {
//   newStatus = 'Невідомий';
// }

switch (status) {
  case 'Approved':
    newStatus = 'Прийнятий';
    break;
  case 'Declined':
    newStatus = 'Відмова';
    break;
  case 'On Hold':
    newStatus = 'На утриманні';
    break;
  case 'In Progress':
    newStatus = 'В процесі';
    break;
  case 'Done':
    newStatus = 'Готовий';
    break;
  default:
    newStatus = 'Невідомий'
}

console.log(newStatus);

