// Function
// arguments
// few calls

// classicIngredients = ['cheese', 'tomato', 'onion'];
// classicIngredientsWithoutOnion = ['cheese', 'tomato'];

// function cookEgg(countOfEgg, ingredients, withSalt = true) { // function argument 
//   console.log(withSalt);
  
//   return `${countOfEgg} eggs with ${ingredients.join(', ')}, ${withSalt ? 'with' : 'without'} salt had been cooked!`;
// }

// mamaPlate = cookEgg(5, classicIngredients, false);
// cookEgg(5);
// cookEgg(10, classicIngredientsWithoutOnion, true);
// cookEgg(3);
// cookEgg(4);
// debugger;
// function getNumber() {
//   debugger;
//   value = 10;
//   console.log(value);
  
//   function getString() {
//   debugger;
//     string = 'apple';
//     console.log(string);
//   }

//   getString();
// }

// function getBool() {
//   debugger;
//   console.log(true);
//   getNumber();
//   // getString(); // NOT WORK
// }

// getNumber();
// getBool();
// getString(); // NOT WORK

// a = 2;
// b = 10;

// c = a + b;

// function sumValue(a, b) {
//   return a + b;
// }

// resultOne = sumValue(1, 2);
// resultTwo = sumValue(57, 3278);
// resultThree = sumValue(3, 10);

// console.log(resultOne, resultTwo, resultThree);
// debugger;
// vasya = [10, 6, 8, 10, 11];
// vlad = [10, 11, 11, 12, 9, 8, 9];
// oleksii = [9, 11, 12, 9, 10];

// function getRoundedScore(score) {
//   debugger
//   sumScore = 0;
//   for (i = 0; i < score.length; i++) {
//     sumScore += score[i];
//   }

//   return sumScore / score.length;
// };

// mediumForVasya = getRoundedScore(vasya);
// mediumForVlad = getRoundedScore(vlad);
// mediumForOleksii = getRoundedScore(oleksii);

// console.log(mediumForVasya);
// console.log(mediumForVlad);
// console.log(mediumForOleksii);



// example animal's age to human
// clone array problem

// koeficient = 5;
// koeficientWild = 8;

// animals = [
//   ['cat', 6],
//   ['dog', 2],
//   ['fox', 4],
// ];

// for (i = 0; i < animals.length; i++) {
//   console.log(animals[i]); // ['cat', 6], ['dog', 2], ['fox', 4],
//   console.log(animals[i][0]); // 'cat' 'dog' 'fox'
//   console.log(animals[i][1]); // 6 2 '4
  
//   // console.log(`${} has age ${} to human`);
// }

// console.log(animals[0][0]);

// wildAnimals = [
//   ['lion', 4],
//   ['bear', 9],
//   ['owl', 3],
// ];

// koofBugs = 10;

// bugs = [
//   ['butterfly', 1],
//   ['sun', 0.5],
//   ['warm', 0.1],
// ];

// function calculateAnimalsAgeToHuman(koef, animalType) {
//   for (i = 0; i < animalType.length; i++) {
//     console.log(animalType[i]); 
    
//     console.log(`${animalType[i][0]} has age ${animalType[i][1] * koef} to human`);
//   }
// }

// calculateAnimalsAgeToHuman(koeficient, animals);
// calculateAnimalsAgeToHuman(koeficientWild, wildAnimals);
// calculateAnimalsAgeToHuman(koofBugs, bugs);

// string = 'value';
// number = string;

// string = 'apple';

// console.log(string);
// console.log(number);

// array = ['apple', 'pear', 'peach', 'melon', [1,2,3]];
// arrayTwo = array.slice();

// array[4].push(5,6,7,8);

// array.push('watermelon');
// array.shift();

// console.log('array', array);
// console.log('arrayTwo', arrayTwo);

// array = [1, 2, 3, 4, [100,200,300, [0.1, 0.2, 0.3]], 5, [1000, 2000, 3000]];

// function deepCopy(prevArray) {
//   newArray = [];
//   for (i = 0; i < prevArray.length; i++) {
//     if (Array.isArray(prevArray[i])) {
//       deepArray = [];
//       for (j = 0; j < prevArray[i].length; j++) {
//         deepArray.push(prevArray[i][j]);
//       }

//       newArray.push(deepArray);
//     } else {
//       newArray.push(prevArray[i]);
//     }
//   }
//   return newArray;
// }


// copiedArray = deepCopy(array);
// array[4][3][1] = 100;
// console.log(array);
// console.log(copiedArray);



// Lexical environment, scopes
// var - застаріле ключове слово для визначення змінних
// Глобальна і локальна

// let
// const
// Глобальна, локальна, блочна

// console.log(a); // Temporary dead zone
// console.log(a); // const error initialization
// console.log(a); // let error initialization
// console.log(a); // var undefined
// var a = 10; // NEVER!!!!

// GLOBAL
// debugger;
// const b = 200;
// const a = 100;

// function getValue() {
//   console.log(b, a);
// }


// LOCAL
// function getValue() {
//   // debugger;
//   const a = 10;
//   // const b = 20;
//   // console.log(b, a);

//   function getAnotherValue() {
//     const x = 50;
//     console.log(b);
//   }

//   getAnotherValue();
// }

// console.log(a, b); // ERROR a b local variables

// getAnotherValue(); // NOT WORK
// getValue();


// BLOCK
// debugger;
// if (true) {
//   const a = 10;
// }
// console.log(a);

// var x = 10;

// hoisting

// closure
// debugger;
// function init() {
//   debugger;
//   let name = 'S';

//   function displayFullName(newLetter) {
//     debugger;
//     name += newLetter;
//     console.log(name);
//   }

//   return displayFullName;
// }

// const initResult = init(); // displayFullName()
// initResult('a');
// initResult('s');
// initResult('h');
// initResult('a');


numbers = [12, -45, 67, -3, 89, -90, 23, 5, -22, 56, 43, -78, 91, -10, 38, 62, -41, 7, -99, 34, 55, -60, 14, 80];
maxValue = 0;
for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxValue) {
      maxValue = numbers[i];
    }
}

indexOfMaxValue = numbers.indexOf(maxValue);
for (j = 0; j < numbers.length; j++) {
  if (j !== indexOfMaxValue) {
      numbers[j] = 0;
  }
}
console.log(numbers);
