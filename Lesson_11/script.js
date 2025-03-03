// Створити об'єкт із такою структурою: obj = { x: 10, y: 20, inner: { x: 20, z: 30 }, foo2: { k: 23, p: 13 } } 
// Написати функцію convert(obj), яка одержує аргументом obj. Функція має повернути новий об'єкт виду:

const obj = {
  x: 10,
  y: 20,
  inner: {
    x: 20,
    z: 30,
  },
  foo2: {
    k: 23,
    p: 13,
  },
};

// function deepClone(object) {
//   debugger;
//   const copiedObj = {};

//   for (let key in object) {
//     if (typeof object[key] === 'object') {
//       const innerObject = deepClone(object[key]);
//       copiedObj[key] = innerObject;
//     } else {
//       copiedObj[key] = object[key];
//     }
//   }

//   return copiedObj;
// }

// const copiedObj = deepClone(obj);

// obj.inner.x = 100

// console.log(copiedObj);

// const arr = new Array();
// const str = new String();
// const num = new Number();
// const bool = new Boolean();

// str.charAt();

// console.log(arr);
// console.log(str);
// console.log(num);
// console.log(bool);



// __proto__
// prototype
// myMethod (str)

// arr.concat([123, 1245, 333]);
// let arr = [
//     1,
//     2,
//     length: 2,
//     __proto__: Array(0)
//     at: ƒ at()
//     concat: ƒ concat()
//     constructor: ƒ Array()
//     copyWithin: ƒ copyWithin()
//     entries: ƒ entries()
//     every: ƒ every()
//     fill: ƒ fill()
//     filter: ƒ filter()
//     find: ƒ find()
//     findIndex: ƒ findIndex()
//     findLast: ƒ findLast()
//     findLastIndex: ƒ findLastIndex()
//     flat: ƒ flat()
//     flatMap: ƒ flatMap()
//     forEach: ƒ forEach()
//     includes: ƒ includes()
//     indexOf: ƒ indexOf()
//     join: ƒ join()
//     keys: ƒ keys()
//     lastIndexOf: ƒ lastIndexOf()
//     length: 0
//     map: ƒ map()
//     pop: ƒ pop()
//     push: ƒ push()
//     reduce: ƒ reduce()
//     reduceRight: ƒ reduceRight()
//     reverse: ƒ reverse()
//     shift: ƒ shift()
//     slice: ƒ slice()
//     some: ƒ some()
//     sort: ƒ sort()
//     splice: ƒ splice()
//     toLocaleString: ƒ toLocaleString()
//     toString: ƒ toString()
//     unshift: ƒ unshift()
//     values: ƒ values()
//     Symbol(Symbol.iterator): ƒ values()
//     Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}
//     [[Prototype]]: Object
//     constructor: ƒ Object()
//     hasOwnProperty: ƒ hasOwnProperty()
//     isPrototypeOf: ƒ isPrototypeOf()
//     propertyIsEnumerable: ƒ propertyIsEnumerable()
//     toLocaleString: ƒ toLocaleString()
//     toString: ƒ toString()
//     valueOf: ƒ valueOf()
//     __defineGetter__: ƒ __defineGetter__()
//     __defineSetter__: ƒ __defineSetter__()
//     __lookupGetter__: ƒ __lookupGetter__()
//     __lookupSetter__: ƒ __lookupSetter__()
//     __proto__: (...)
//     get __proto__: ƒ __proto__()
//     set __proto__: ƒ __proto__()
// ];

// const apple = 10;
// // const alalal = 'lalallalalala';

// apple.__proto__.setMediumLetterToUpperCase = function() {
//   console.log(this); // 'apple'
  
//   const mediumIndex = Math.round(this.length / 2);
//   return `${this.slice(0, mediumIndex)}${this[mediumIndex].toUpperCase()}${this.slice(mediumIndex + 1)}`;
// }

// const arr = new Array();
// const str = new String();
// const num = new Number();
// const bool = new Boolean();


// console.log(arr);
// console.log(str);
// console.log(num);
// console.log(bool);


// console.log(new String());


// console.log(apple.setMediumLetterToUpperCase());
// console.log(alalal.setMediumLetterToUpperCase());
// console.log('strimg'.setMediumLetterToUpperCase());
// console.log('loveyou'.setMediumLetterToUpperCase());
// console.log('laptop'.setMediumLetterToUpperCase());
// console.log(''.setMediumLetterToUpperCase('alalalalal'));

// this - CONTEXT
// Prototype

// const today = new Date;
// const currentYear = today.getFullYear();

// const user = {
//   firstName: 'Galya',
//   lastName: 'Baluvana',
//   age: 25,
//   getFullName: function() {
//     return `${this.firstName} ${this.lastName}`
//   },
//   getYearOfBirth: function() {
//     return currentYear - this.age;
//   }
// }

// console.log(user.getFullName());
// console.log(user.getYearOfBirth());

// String.prototype.setMediumLetterToUpperCase = function() {  
//   const mediumIndex = Math.round(this.length / 2);
//   return `${this.slice(0, mediumIndex)}${this[mediumIndex].toUpperCase()}${this.slice(mediumIndex + 1)}`;
// }

// console.log('apple'.setMediumLetterToUpperCase());
// console.log('laptop'.setMediumLetterToUpperCase());
// console.log('computer'.setMediumLetterToUpperCase());


// myPush
// arguments

// const arr = [1,2,3,4];
// const arr2 = [100,200,300,400];

// Array.prototype.myPush = function() {
//   // this - [1,2,3,4]
//   // this.length - [1,2,3,4].length - 4
//   // arr[4] = newValue

//   for (let i = 0; i < arguments.length; i++) {
//       this[this.length] = arguments[i];
//   }
// }

// arr.myPush(5, 6, 7, 8);
// arr2.myPush(500)

// console.log(arr);
// console.log(arr2);

// function func(a, b) {
//   return a + b;
// }

// function func2() {
//   console.log(arguments);
// }

// func(1,2);
// func2(1,2,3,4,5, ...100)

// const arr = [1,2,3,4];

// Array.prototype.myPop = function() {
//   this.splice(this.length - 1, 1);
// };

// arr.myPop();
// console.log(arr);

// [1,2,3].filter(function(item, index, array) {
//   return item > 2;
// })

// Array.prototype.filter = function(cb) {
//   const newArray = [];

  
//   for (let i = 0; i > this.length; i++) {
//     newArray.push(cb(this[i], i, this));
//   }

//   return newArray;
// }

