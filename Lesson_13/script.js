// Car
// Object.keys
// render info, list (problem)
// add maxSpeed, add default
// arrow function

// const obj = {
//   name: 'aaa',
//   age: 29,
//   hasLove: true,
//   getName: function() { this }
// };

// Object.keys(obj); // ['name', 'age', 'hasLove']

// function Car(mark, model, color, maxSpeed) {
//   this.mark = mark;
//   this.model = model;
//   this.color = color;
//   this.maxSpeed = maxSpeed;
// }

// Car.prototype.renderCar = function() {
//   const list = Object.keys(this).map((key) => {
//     return `<li>${key} - ${this[key]}</li>`;
//   });

//   document.write(`<ul>${list.join('')}</ul>`);
// }

// Car.prototype.maxSpeed = 300;

// const bmw = new Car('BMW', 'X5', 'black', 350);
// const audi = new Car('Audi', 'A5', 'red');

// bmw.renderCar();
// audi.renderCar();

// console.log(bmw);
// console.log(audi);

// a();

// function a() {
//   this
// } // FUNCTION DECLARATION

// a();

// b();
// const b = function() {}; // FUNCTION EXPRESSION

// b();

// const renderInfo = () => {
//   return 'hello world';
// }

// const renderInfo = () => {
//   return 'hello world'
// };

// console.log(renderInfo());

// const arr = [1,2,3,4,5];

// const newArr = arr.map((item) => item * 5);
// console.log(newArr);



// call, apply, bind

// const Elza = {
//   sister: 'Anna',
//   getSister(eyesColor, hair) {    
//     console.log(`Hello, I have sister, her name ${this.sister}. Her eyes color - ${eyesColor}, and ${hair} hair`);
//   },
// };

// const Cinderella = {
//   sister: 'Andrii',
// };

// Elza.getSister('green', 'red');
// // Cinderella.getSister();
// Elza.getSister.call(Cinderella, 'red', 'yellow');
// Elza.getSister.apply(Cinderella, ['red', 'yellow']);

// const resultBind = Elza.getSister.bind(Cinderella, 'red', 'yellow');
// resultBind();
// resultBind();
// resultBind();
// resultBind();




// Human (have different properties), add run
// Then add Man, Woman
// Trying to add the same thing but with different fields

// function Human() {}

// Human.prototype.getRunTime = function() {
//   let time = 10;
//   if (this.isSmoking) time *= 2;

//   return time;
// }

// function Man(name, isSmoking) {
//   this.name = name;
//   this.isSmoking = isSmoking;
// }

// Man.prototype = Object.create(Human.prototype);

// function Woman(name, isSmoking, child) {
//   this.name = name;
//   this.isSmoking = isSmoking;
//   this.child = child;
// }

// Woman.prototype = Object.create(Human.prototype);
// Woman.prototype.getRunTime = function() {
//   let time = Human.prototype.getRunTime.call(this);
//   if (this.child) time /= 1.5;

//   return time;
// }

// const adam = new Man('Adam', true);
// const eva = new Woman('Eva', false, true);

// console.log(adam);
// console.log(eva);

// console.log(adam.getRunTime());
// console.log(eva.getRunTime());



// Class 
// Car
// Human
// run
// Cat


// function Car(mark, model, color, maxSpeed) {
//   this.mark = mark;
//   this.model = model;
//   this.color = color;
//   this.maxSpeed = maxSpeed;
// }

// Car.prototype.renderCar = function() {
//   const list = Object.keys(this).map((key) => {
//     return `<li>${key} - ${this[key]}</li>`;
//   });

//   document.write(`<ul>${list.join('')}</ul>`);
// }

// Car.prototype.maxSpeed = 300;

// const bmw = new Car('BMW', 'X5', 'black', 350);
// const audi = new Car('Audi', 'A5', 'red');

// bmw.renderCar();
// audi.renderCar();

// console.log(bmw);
// console.log(audi);

// class Car {
//   constructor(mark, model, color, maxSpeed = 300) {
//     this.mark = mark;
//     this.model = model;
//     this.color = color;
//     this.maxSpeed = maxSpeed;
//   }

//   renderCar() {
//     const list = Object.keys(this).map((key) => {
//       return `<li>${key} - ${this[key]}</li>`;
//     });

//     document.write(`<ul>${list.join('')}</ul>`);
//   }

//   // getMaxSpped
// }

// const bmw = new Car('BMW', 'X5', 'black', 350);
// const audi = new Car('Audi', 'A5', 'red');

// console.log(bmw);
// console.log(audi);

// bmw.renderCar();
// audi.renderCar();

// class Human {
//   constructor(name, isSmoking) {
//     this.name = name;
//     this.isSmoking = isSmoking;
//   }

//   getRunTime() {
//     let time = 10;
//     if (this.isSmoking) time *= 2;

//     return time;
//   }
// }

// class Man extends Human {
//   constructor(name, isSmoking) {
//     super(name, isSmoking)
//   }
// }

// class Woman extends Human {
//   constructor(name, isSmoking, child) {
//     super(name, isSmoking);
//     this.child = child;
//   }

//   getRunTime() {
//     let time = super.getRunTime();
//     if (this.child) time /= 1.5;

//     return time;
//   }
// }

// const adam = new Man('Adam', true);
// const eva = new Woman('Eva', false, true);

// console.log(adam);
// console.log(eva);

// console.log(adam.getRunTime());
// console.log(eva.getRunTime());




// THIS
// GLOBAL FUNCTION - this = window
// INSIDE OBJECT - this = this object
// FUNCTION CONSTRUCTION - this = created object from this function
// PROTOTYPE - this = look before dot 
// ANONIMUS FUNCTION - this absent
// ARROW FUNCTION - this = this of outside function
// CALL, APPLY, BIND - this = object inside call apply bind
// CLASS - this = created object from this class