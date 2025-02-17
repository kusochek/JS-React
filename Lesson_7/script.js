// 1️⃣ Extract all winter sports (such as skiing, snowboarding, hockey, and ice skating) into a new array winter_sports using .slice().
// 2️⃣ Extract all summer sports (such as swimming, surfing, rowing, and cycling) into a new array summer_sports using .slice().
// 3️⃣ Extract only the fruits (such as apple, watermelon, and lemon) into a new array fruits from the two extracted arrays (summer_sports and winter_sports).
// 4️⃣ Display all three arrays (winter_sports, summer_sports, fruits) in the console in a structured way, as shown in the reference image console.png.

// sports = [
//   ['skier', '⛷'],
//   ['snowboarder', '🏂'],
//   ['apple', '🍎'],
//   ['hockey', '🏒'],
//   ['ice skate', '⛸'],
//   ['swimmer', '🏊'],
//   ['surfer', '🏄‍'],
//   ['watermelon', '🍉'],
//   ['lemon', '🍋'],
//   ['rowboat', '🚣'],
//   ['bicyclist', '🚴‍'],
// ];

// winter_sports = sports.slice(0, 5);
// summer_sports = sports.slice(5);

// fruits = winter_sports.splice(2, 1).concat(summer_sports.splice(2, 2));

// console.log('Winter sports:', winter_sports);
// console.log('Summer sport', summer_sports);

// console.log('fruits', fruits);

// HW 11 / 9

//9️⃣ Multiply all positive numbers together and display the result.
// numbers = [12, -45, 67, -3, 89, -90, 23, 5, -22, 56, 43, -78, 91, -10, 38, 62, -41, 7, -99, 34, 55, -60, 14, 80];
// multipleValue = 1;

// for (i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 0) {
//     multipleValue *= numbers[i];
//   }
// }

// console.log(multipleValue);


// Chess
// alphabet = 'abcdefgh';
// figures = ['rook', 'horse', 'bishop', 'queen', 'king'];
// fullFigures = figures.concat(figures.slice(0, 3).reverse());

// TRs = [];

// for (i = 0; i < 10; i++) {
//   TDs = [];
//   color = i < 5 ? 'black' : 'white';

//   for (j = 0; j < 10; j++) {
//     data = '';

//     if ((i === 2 || i === 7) && j !== 0 && j !== 9) {
//       data = `<img src="images/chess/${color}/pawn.svg" />`;
//     }

//     if ((i === 1 || i === 8) && j !== 0 && j !== 9) {
//       data = `<img src="images/chess/${color}/${fullFigures[j - 1]}.svg" />`;
//     }

//     if ((i === 0 || i === 9) && j !== 0 && j !== 9) {
//       data = `${alphabet[j - 1]}`;
//     }

//     if (i > 0 && i < 9 && (j === 0 || j === 9)) {
//       data = i;
//     }

//     TDs.push(`<td>${data}</td>`);
//   }

//   TRs.push(`<tr>${TDs.join('')}</tr>`);
// }

// document.write(
//   `
//     <table class="chess">${TRs.join('')}</table>
//   `
// );


// new Array();
// random

// array = new Array(+prompt('How much random colors do you want?'));

// divsList = [];

// for ( i = 0; i < array.length; i++) {
//   randomValueOne = Math.round(Math.random() * (255 - 0) + 0);
//   randomValueTwo = Math.round(Math.random() * (255 - 0) + 0);
//   randomValueThree = Math.round(Math.random() * (255 - 0) + 0);

//   divsList.push(`<div class="box" style="background: rgb(${randomValueOne}, ${randomValueTwo}, ${randomValueThree})"></div>`);
// }

// document.write(divsList.join(''));

// Function
// much call
// different data, function arguments
// default arguments
// return, anything after
// more then 1 return

// debugger;

operations = ['*', '-', '/', '+']

do {
  userSelectedOperation = prompt('Please enter opreation would you like to do');
} while (!operations.includes(userSelectedOperation));


do {
  countOperation = parseInt(prompt('Please enter count of operation from 2 to 6'));
} while (!isNaN(countOperation) && countOperation >= 2 && countOperation <= 6);

// do (i = 0; i < countOperation; i++) {
//   userNumber = parseFloat(prompt(`Please enter number ${i + 1}:`));
// } while (isNaN(userNumber));

userResult = userSelectedOperation === '*' || userSelectedOperation === '/' ? 1 : 0;

for (i = 1; i <= +countOperation; i++) {

  do {
    userNumber = parseFloat(prompt(`Please enter number ${i}:`));
  } while (isNaN(userNumber));

  switch(userSelectedOperation) {
    case '+':
      userResult += parseInt(userNumber);
      break;
    case '-':

  }

  // if (userSelectedOperation === '+') {
  //     userResult += parseInt(userNumber);
  // } else if (userSelectedOperation === '-') {
  //     userResult -= parseInt(userNumber);
  // } else if (userSelectedOperation === '*') {
  //     userResult *= parseInt(userNumber);
  // } else if (userSelectedOperation === '/') {
  //     userResult /= parseInt(userNumber);
  // }

}


console.log(userResult);
alert(userResult);
