// SOLID
// S - Single Responsibility
// O - Open Close
// L - Liscov
// I
// D


// Define Property
// Object.freeze, Object.seal
// ? in object
// privet (#) and safe properties (_)
// getter, setter

// const dish = undefined;

// const someDish = dish?.dessert?.ukr?.nalisnik || 'українські десерти закінчились';

// if (dish && dish.dessert && dish.dessert.ukr && dish.dessert.ukr.nalisniki)

// console.log(someDish);


// Object.freeze(dish);
// Object.seal(dish);
// dish.soup = 'solynka';
// delete soup;

// Object.defineProperty(dish, 'soup', {
//   //  enumerable: false, // disable iteration for this filed
//   writable: false, // disable rewrite this field
//   configurable: false, // disable delete this field
// });

// Object.defineProperty(dish, 'fish', {
//   value: 'karp',
//   enumerable: true,
// });

// dish.soup = 'solynka';
// dish.starter = 'solynka';
// delete dish.soup;

// console.log(dish);

// for (let key in dish) {
//   console.log(key);
// }

// class CoffeeMachine {
//   #waterValue = 0;

//   getWaterValue() {
//     return this.#waterValue;
//   }
  
//   setWaterValue(value) {
//     this.#waterValue = value;
//   }

//   // get waterValue() {
//   //   return this.waterValue;
//   // }

//   // set waterValue(value) {
//   //   this.waterValue = value;
//   // }
// }

// const coffeeMachine = new CoffeeMachine();

// console.log(coffeeMachine._waterValue); // FORBIDEN!!!
// coffeeMachine.setWaterValue(200);
// console.log(coffeeMachine.getWaterValue());



// window
// location
// history (back, forward)

// console.log(document.body);
// const div = document.getElementsByTagName('div');
// const div = document.getElementById('wrapper');
// const div = document.getElementsByClassName('elem');

// const div = document.querySelectorAll('.type > div');
// const div = document.querySelector('.type');
// const allDiv = document.querySelectorAll('.elem');

// console.log(div);

// const div = document.querySelector('.type');
// div.innerText = 'Hello!';
// div.innerHTML = '<ul><li>apple</li><li>orange</li><li>banana</li></ul>';

// const newDiv = document.createElement('div');
// newDiv.innerText = 'Hello!';

// div.appendChild(newDiv);


