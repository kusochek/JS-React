// FOR LOOP
// debugger;
// for(i = 0; i < 10; i++) {
//   console.log(i);
// }

// city = 'Buenos Aires'; // Buenos🌺Aires
// // city[1] = 'H'; // DONT WORK
// // updatedCity = '';

// // firstLetter = city[0];
// // 2 = city[1];
// // 3 = city[2];
// // 4 = city[3];
// // 5 = city[4];
// // debugger;
// for (i = 0; i < city.length; i++) {
//   // console.log(i); // 0 1 2 3...11
//   console.log(city[i]); // B u///
//   if (city[i] === ' ') {
//     updatedCity += '🌺';
//   } else {
//     updatedCity += city[i];
//   }
// }

// console.log(updatedCity);


// FACTORIAL
// Ввести з клавіатури a і b, де b більше a (перевірку написати кодом).
// Запустити цикл перебору a до b з кроком h (введення з клавіатури).
// Порахувати суму факторіалів * чисел, які трапляються під час перебору.

// 6! = 1 * 2 * 3 * 4 * 5 * 6;

// do {
//   a = parseInt(prompt('Enter first number')); // 3
// } while (a < 1 || isNaN(a));

// do {
//   b = parseInt(prompt('Enter second number'));
// } while (b < a || isNaN(b));

// do {
//   h = parseInt(prompt('Enter increment?'));
// } while (h < 1 || isNaN(h) || h > b - a);

// sum = 0;

// console.log('input', a, b, h);
// debugger;
// for (; b >= a; a += h) {
//   console.log('number to calculate', a); // 3
//   factorial = 1;

//   for (i = 1; i <= a; i++) {
//     factorial *= i; // 1 2 3
//   }
//   console.log(`factorial ${a} = ${factorial}`);
//   sum += factorial;
// }

// console.log(`sum of factorial ${sum}`);


// ARRAY
// get index
// get index with length
// set some biggest index
// edit index
// push pop shift unshift
// loop for array

// listFruits = ['apple', 'banana', 'kiwi', 'mango', 'mango', 'mango', 'mango'];
// arrayOfEverything = [true, 0, false, undefined, 'Hello', null, 100, 'Hi'];
// 'mango' === 'mango'
// console.log(array[2]);
// console.log(arrayOfEverything[0]);
// console.log(array.length);
// console.log(arrayOfEverything[arrayOfEverything.length - 1]);

// array[3] = 'orange';
// delete array[3];

// array[100] = 'Dragon fruit';
// console.log(array);
// listFruits.push('Dragon Fruit', 'Orange');
// someFruit = listFruits.pop();
// console.log(someFruit);

// listFruits.shift();
// listFruits.unshift('Dragon Fruit');
// console.log(['Dragon fruit', ...listFruits]);

// goods = 0;
// debugger;
// for (i = 0; i < listFruits.length; i++) {
//   console.log(listFruits[i]); // apple banana ....
//   if (listFruits[i] === 'mango') {
//     goods++;
//   }
// }

// console.log(goods);

