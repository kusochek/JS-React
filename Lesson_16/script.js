// Global obj
// DOM - document object model
// BOM
// querySelector
// querySelectorAll, forEach

// const wrapp = document.querySelectorAll('.wrapp');

// console.dir(wrapp);

// wrapp.forEach((value, key) => {
//   value.innerText = 'Hello John!';
// });


// Attribute: hasAttribute, getAttribute, setAttribute, removeAttribute
// inner....
// outer
// createElement
// append, prepend, before, after
// style
// getComputedStyle
// class (add/remove, containe, toggle)

// const wrapp = document.querySelector('.wrapp');

// const image = document.createElement('img');
// const ul = document.createElement('ul');

// for(let i = 1; i <= 5; i++) {
//   const li = document.createElement('li');
//   li.innerText = `List - ${i}`;

//   ul.append(li);
// }


// // image.setAttribute('src', 'https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg');
// image.src = 'https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg';
// image.width = '400';

// // console.log(image.getAttribute('width'));

// // ul.style.display = 'flex';
// // wrapp.style.display = 'flex';
// // wrapp.style.alignItems = 'center';
// // wrapp.style.justifyContent = 'center';

// wrapp.classList.add('flex');
// // wrapp.classList.remove('block');
// wrapp.classList.toggle('block');

// // if (wrapp.classList.contains('block')) {
// //   wrapp.classList.remove('block');
// // } else {
// //   wrapp.classList.add('block');
// // }

// wrapp.append(image, ul);



// setTimeout
// setInterval
// 3*3 changeColor Element

// let count = 0;

// // const reminder = setInterval(() => getValue(1), 2000);

// function getValue(value) {
//   console.log(value);
  
//   count++;
//   console.log(`Pay invoice! ${count}`);

//   if (count < 4) {
//     setTimeout(getValue(1), 2000);
//   }
// }

// getValue(1);

// setTimeout(getValue, 3000);

// function getRandomNumber() {
//   return Math.round(Math.random() * (255 - 0) + 0);
// }

// function getRandomColor() {
//   return `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
// };

// function setColorWithInterval(div) {
//   div.style.backgroundColor = getRandomColor();
// }

// console.log(getRandomColor());


// const outerDiv = document.querySelector('.wrapp');

// outerDiv.classList.add('grid-wrapp');

// for (let i = 0; i < 9; i++) {
//   const innerDiv = document.createElement('div');
//   innerDiv.classList.add('grid');
//   setColorWithInterval(innerDiv);
//   setInterval(() => setColorWithInterval(innerDiv), 2000);
  
//   outerDiv.append(innerDiv);
// }


// events
// click
// addEventListener

// const div = document.querySelector('.wrapp');

// div.onclick = () => {
//   const newDiv = document.createElement('div');
//   newDiv.classList.add('inner-div');

//   div.after(newDiv);
// };

// function addElementToList() {
//     const newDiv = document.createElement('div');
//     newDiv.classList.add('inner-div');
  
//     div.after(newDiv);
// }

// div.addEventListener('click', addElementToList);

// const div = document.querySelector('.wrapp');

// div.addEventListener('click', () => {
//   const input = document.querySelector('.input');
//   const inputValue = input.value;

//   const p = document.createElement('p');
//   p.innerText = inputValue;

//   div.after(p);
// });
