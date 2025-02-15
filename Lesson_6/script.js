// cat's render
// render special cat
// cats = ['lion', 'puma', 'leopard', 'cat'];

// for (i = 0; i < cats.length; i++) {
//   document.write(`<img src="images/${cats[i]}.jpeg" alt="${cats[i]}" width="200" />`)
// }

// do {
//   selectedCat = prompt(`Enter a cat: ${cats.join(' or ')}`);
// } while(!selectedCat || !cats.includes(selectedCat));

// document.write(`<img src="images/${selectedCat}.jpeg" alt="${selectedCat}" />`);


// Example 1
// colors = ['red','yellow','green', 'violet', 'black', 'blueviolet'];
// circleList = [];

// for (i = 0; i < colors.length; i++) {
//   paragraph = `<p class="circle" style="background-color: ${colors[i]}"></p>`;
//   circleList.push(paragraph);
// }

// document.write(
//   `
//     <div class="wrapp">
//       ${circleList.join('')}
//     </div>
//   `
// );


// Example 2
// animalsTypes = ['dog', 'cat', 'mouse', 'fox', 'bear','tiger', 'dolphin', 'whale'];
// animalsIcons = ['🐶','🐱','🐭', '🦊','🐻','🐯','🐬','🐳', '❓'];
// // '❓'

// listToLoop = animalsIcons.length > animalsTypes.length ? animalsIcons : animalsTypes;

// for (i = 0; i < listToLoop.length; i++) {
//   console.log(`Animal ${animalsTypes[i] || 'unknown'} - ${animalsIcons[i] || '❓'}`);

//   // if (!animalsTypes[i]) {
//   //   console.log(`Animal unknown - ${animalsIcons[i]}`);
//   // } else if (!animalsIcons[i]) {
//   //   console.log(`Animal ${animalsTypes[i]} - ❓`);
//   // } else {
//   //   console.log(`Animal ${animalsTypes[i]} -  ${animalsIcons[i]}`);
//   // }
// }


// Example 3
// arr_1 = [10,4,2,9,7,7];
// arr_2 = [8,2,1,6,4,10,6];
// arr_3 = []; // 9 7 8 1 6


// багатомірні масиви
// Array.isArray

// array = [1,2,3,4,5];
// bigArray = [
//   1,
//   ['Anna', 'Elza', 'Olaf'],
//   ['BMW', 'Audi', 'Mercedes'],
//   true,
//   10,
//   'Hello!'
// ];


// console.log(bigArray[1][1]);
// console.log(bigArray[2][2]);
// console.log(bigArray[2][3][0]);


// for (i = 0; i < bigArray.length; i++) {
//   if (Array.isArray(bigArray[i])) {
//     for (j = 0; j < bigArray[i].length; j++) {
//       console.log(bigArray[i][j]);
//     }
//   } else {
//     console.log(bigArray[i]);
//   }
// }


// concat
// join
// split

// array = ['What', 'is', 'the', 'happy', 'mean?'];
// arrayTwo = [1,2,3,4];
// string = 'What❓is❓the❓happy❓mean?';
// string = 'Anna, Derhii, Omar';

// console.log(array.join('❓'));
// console.log(string.split(', '));

// arrayThree = array.concat(arrayTwo);
// console.log(arrayThree);
// console.log(array);
// console.log(arrayTwo);


