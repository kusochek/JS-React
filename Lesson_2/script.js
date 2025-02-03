// HW
// firstName = prompt('Name');
// alert('Your name' + '' + firstName);


// new Date()
// get age

// console.log('21.07.1995');
// date = new Date(); // TODAY
// day = date.getDate(); // DAY
// month = date.getMonth(); // MONTH
// year = date.getFullYear(); // YEAR

// console.log(date);
// console.log(day, 'DAY');
// console.log(month, 'MONTH');
// console.log(year, 'YEAR');

// currentDay = new Date();
// currentYear = currentDay.getFullYear();

// yearOfUserBirth = prompt('What is your year of birth?');
// age = currentYear - yearOfUserBirth;
// alert(`Your age - ${age}`);



// Перетворення типів
// Явне перетворення
// Неявне перетворення


// to Number
// +
// parseInt
// parseFloat
// math operations

// valueOfApple = prompt('How many apples do you have?'); // 27
// myValueOfApple = 10;

// totalValueOfApple = parseInt(valueOfApple) + myValueOfApple;
// console.log(totalValueOfApple); // 37

// console.log(+'Hello!'); // NaN
// console.log(+true); // 1
// console.log(+false); // 0
// console.log(+''); // 0
// console.log(+' '); // 0
// console.log(+'200'); // 200
// console.log(+'200r');
// console.log(+null);
// console.log(+undefined);



// console.log(parseInt('200rdskejc')); // 200
// console.log(parseInt('rdskejc200')); // NaN
// console.log(parseFloat('20.12345jsdehc'));
// console.log(parseFloat('djskehf20.12345jsdehc')); // NaN

// currentDay = new Date();
// currentYear = currentDay.getFullYear();

// yearOfUserBirth = prompt('What is your year of birth?');
// age = currentYear * parseInt(yearOfUserBirth);
// alert(`Your age - ${age}`);



// to String
// myAge = 29;
// console.log(myAge.toString());
// console.log(true.toString());



// to Boolean
// !
// console.log(true);
// console.log(false);

// console.log(Boolean('Hello!')); // true
// console.log(Boolean('')); // false
// console.log(Boolean(' ')); // true
// console.log(Boolean(10)); // true
// console.log(Boolean(-10)); // true
// console.log(Boolean(0)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false

// Boolean() => !!
// ! - not
// !! - not not - yes

// console.log(!!10);

// console.log(!true); // false
// console.log(!'Hello'); // false
// console.log(!0); // true
// console.log(!null); // true
// console.log(!undefined); // true
// console.log(!' '); // false
// console.log(!'true'); // false
// console.log(!'false'); // false



// Tеmplate string
// firstName = prompt('What\'s your name?');
// lastName = 'Book';
// age = 23;

// alert('Hello! Your name is ' + firstName + ' ' + lastName + '. You are ' + age + ' years old!');
// alert(`Hello! Your name is ${firstName} ${lastName}. You are ${age} years old!`);

// document.write()

// document.write('<h1>Hello</h1><p>This code will show on the page!</p>');

// favoriteUserColor = prompt('What is your favorite color?');

// document.write(
//   `
//   <p>Your favorite color is</p>
//   <p class="block" style="background-color: ${favoriteUserColor}">${favoriteUserColor}</p>
//   <div>
//     <p></p>
//   </div>
//   `
// );



// STRING METHODS
// trim()
// replace()/replaceAll()
// toLowerCase()/toUpperCase()
// string[], string.length
// indexOf()

// phoneModel = prompt('Put here your phone model?');

// console.log(phoneModel.trim());
// console.log(phoneModel.replace('12', '16'));
// console.log(phoneModel.replaceAll('12', '16'));
// console.log(phoneModel.toUpperCase());
// console.log(phoneModel.toLowerCase());

// petName = 'Marsik'; // length = 6

// M - 0
// a - 1
// r - 2
// s - 3
// i - 4
// k - 5

// console.log(petName[0]); // M
// console.log(petName[3]); // s
// console.log(petName.length); // 6

// console.log(petName.indexOf('I')); // - 1 if not defined
// console.log(petName.indexOf('i')); // - 4


// putAnything = prompt('put anything?');

// console.log(putAnything.toUpperCase().indexOf('A'));


// NUMBER METHODS
// Math.floor
// Math.ceil
// Math.round
// Math.trunc
// %
// NaN - Not A Number
// typeof 

value = 23.7;

console.log(Math.floor(value)); // 23
console.log(Math.ceil(value)); // 24
console.log(Math.round(value)); // 24

console.log(5%3); // 2
console.log(9%3); // 0

console.log(typeof 'Hello'); // string
console.log(typeof 0); // number
console.log(typeof true); // boolean
console.log(typeof null); // object
console.log(typeof undefined); // undefined



