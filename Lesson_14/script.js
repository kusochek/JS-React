// Plane
// Написати "Авіасимулятор" для великих та маленьких літаків
// Авіасимулятор повинен уміти "дозволяти" політ літаком залежно від швидкості вітру
// Для великих літаків має бути ще перевірка на достатню кількість пасажирів
// Метод повинен повертати фразу Takeoff for PLANE is approved/not approved.

// 1. Plane + Airlainer + Aerobatics
// 2. Simple takeoff
// 3. add new params (passenger)
// 4. makeFlightData + getCrosswindApprove
// 5. Airlainer => getPasApproval, makeFlightData

// const CROSSWIND = 30;

// class Plane {
//   constructor(name, maxCrosswind) {
//     this.name = name;
//     this.maxCrosswind = maxCrosswind;
//   }

//   takeoff(passenger) {
//     console.log(this.flightData(passenger));
    
//     return `Takeoff for ${this.name} is ${this.flightData(passenger).every((data) => data) ? '' : 'not'} approved`;
//   }

//   flightData() {
//     return [this.checkCrosswind()];
//   }

//   checkCrosswind() {
//     return this.maxCrosswind >= CROSSWIND;
//   }
// }

// class Airlainer extends Plane {
//   constructor(name, maxCrosswind, minPassenger) {
//     super(name, maxCrosswind);
//     this.minPassenger = minPassenger;
//   }

//   flightData(passenger) {
//     return [...super.flightData(), this.checkValueOfPassengers(passenger)];
//   }

//   checkValueOfPassengers(passenger) {
//     return this.minPassenger < passenger;
//   }
// }

// class Aerobatics extends Plane {
//   constructor(name, maxCrosswind) {
//     super(name, maxCrosswind);
//   }
// }

// const Boeing747 = new Airlainer('Boeing 747', 40, 100);
// const Extra330 = new Aerobatics('Extra 330', 15);

// console.log(Boeing747.takeoff(90));
// console.log(Extra330.takeoff());





// SuperMath

// Створити клас SuperMath із методом check(obj), параметр obj якого має властивості X, Y, znak.
// Приклад об'єкта: obj = {X:12, Y:3, znak: “/”}, можливі варіанти znak+-/*.
// При введенні znak потрібно перевірити коректність введення на можливі математичні дії.
// Метод check повинен підтвердити у користувача, чи хоче він зробити дію znak c Х і У.
// Якщо - так, зробити математичну дію znak(яка описана в класі), інакше - запросити введення нових даних через метод input() з класу SuperMath.

// const OPERATIONS = {
//   '+': (x, y) => x + y,
//   '-': (x, y) => x - y,
//   '*': (x, y) => x * y,
//   '/': (x, y) => x / y,
//   '>': (x, y) => x > y,
// };

// const opertaion = OPERATIONS['-'];

// console.log(opertaion(10, 200));
// console.log(OPERATIONS['-'](10, 200));



// class SuperMath {
//   constructor() {
//     this.input();
//   }

//   input() {
//     do {
//       this.x = +prompt('Enter x?')
//     } while (isNaN(this.x));

//     do {
//       this.y = +prompt('Enter y?')
//     } while(isNaN(this.y));

//     do {
//       this.znak = prompt(`Enter ${this.getOperations()}?`)
//     } while(!OPERATIONS[this.znak]);

//     return this;
//   }

//   check() {
//     const confirmFromUser = confirm(`Do you want to do this ${this.x} ${this.znak} ${this.y}`);

//     return confirmFromUser ? OPERATIONS[this.znak](this.x, this.y) : this.input().check();
//   }

//   getOperations() {
//     return Object.keys(OPERATIONS).join(', ');
//   }
// }

// const math = new SuperMath();
// console.log(math.check());


// const statusInvoice = 'Pending';

// const STATUSES_MAP = {
//   Pending: 'В процесі',
//   Done: 'Готово',
//   'In Progress': 'В очікуванні',
//   Failed: 'Помилка',
//   ...
// };

// STATUSES_MAP[statusInvoice] // В процесі

// if (statusInvoice === 'Pending') {
//   translate = 'В процесі';
// } else if (statusInvoice === 'Done') {
//   translate = 'Готово'
// } else if (statusInvoice === 'Done') {
//   translate = 'Готово'
// } else if (statusInvoice === 'Done') {
//   translate = 'Готово'
// } else if (statusInvoice === 'Done') {
//   translate = 'Готово'
// } else if (statusInvoice === 'Done') {
//   translate = 'Готово'
// } else if (statusInvoice === 'Done') {
//   translate = 'Готово'
// } else if (statusInvoice === 'Done') {
//   translate = 'Готово'
// } else if (statusInvoice === 'Done') {
//   translate = 'Готово'
// } else if (statusInvoice === 'Done') {
//   translate = 'Готово'
// } else if (statusInvoice === 'Done') {
//   translate = 'Готово'
// } else if (statusInvoice === 'Done') {
//   translate = 'Готово'
// } else if (statusInvoice === 'Done') {
//   translate = 'Готово'
// } else if (statusInvoice === 'Done') {
//   translate = 'Готово'
// } else if (statusInvoice === 'Done') {
//   translate = 'Готово'
// }


// OOP

class Dog {
  GavGav() {
    return 'Gav'
  }
}

class Human {}


// SOLID
// S - single responsibility
