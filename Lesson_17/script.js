// events

// onmouseenter
// onmouseleave
// onmouseover
// onmouseout
// onmousemove


// const block = document.querySelector('.block');

// block.onmouseenter = () => {
//   console.log('onmouseenter');
// };

// block.onmouseleave = () => {
//   console.log('onmouseleave');
// };

// block.onmouseover = () => {
//   console.log('onmouseover');
// };

// block.onmouseout = () => {
//   console.log('onmouseout');
// };

// block.onmousemove = () => {
//   console.log('onmousemove');
// };


// onclick
// onmousedown
// onmouseup
// ondblclick
// oncontextmenu

const block = document.querySelector('.block');

block.onclick = (event) => {
  console.log(event);
};

// block.onmousedown = () => {
//   console.log('onmousedown');
// };


// block.onmouseup = () => {
//   console.log('onmouseup');
// };

// block.ondblclick = () => {
//   console.log('ondblclick');
// };

// block.oncontextmenu = () => {
//   console.log('oncontextmenu');
// };



// block.addEventListener('click', () => {})


// drag and drop

// const block = document.querySelector('.block');
// let x = null;
// let y = null;

// let isBlockActive = false;

// block.onmousedown = (event) => {
//   x = event.screenX;
//   y = event.screenY;

//   console.log('onmousedown');
//   isBlockActive = true;
// };

// block.onmousemove = (event) => {
//   if (isBlockActive) {
//     const _x = event.screenX;
//     const _y = event.screenY;

//     const diffX = _x - x;
//     const diffY = _y - y;

//     console.log(`${_x} - ${x} = ${diffX}`);
//     console.log(`${_y} - ${y} = ${diffY}`);

//     console.log(block.style.left);
    

//     block.style.left = !block.style.left ? `${diffX}px` : `${parseInt(block.style.left) + diffX}px`;
//     block.style.top = !block.style.top ? `${diffY}px` : `${parseInt(block.style.top) + diffY}px`;

//     x = _x;
//     y = _y;
//   }
// };

// block.onmouseup = () => {
//   isBlockActive = false;
// };


// keypress, keydown, keyup

// const block = document.querySelector('.block');

// const STEP = 20;

// const OPERATIONS = {
//   37: (block) => block.style.left = !block.style.left ?  `-${STEP}px` : `${parseInt(block.style.left) - STEP}px`,
//   38: (block) => block.style.top = !block.style.top ? `-${STEP}px` : `${parseInt(block.style.top) - STEP}px`,
//   39: (block) => block.style.left = !block.style.left ? `${STEP}px` : `${parseInt(block.style.left) + STEP}px`,
//   40: (block) => block.style.top = !block.style.top ? `${STEP}px` : `${parseInt(block.style.top) + STEP}px`,
// };

// document.addEventListener('keydown', (event) => {
//   OPERATIONS[event.keyCode](block);
// });


// form, e.preventDefault();

// const form = document.querySelector('#form');
// const button = document.querySelector('#submit-form');

// form.addEventListener('submit', (event) => {
//   const firstName = document.querySelector('#firstName').value;
//   const lastName = document.querySelector('#lastName').value;
//   const age = document.querySelector('#age').value;

//   console.log(firstName, lastName, age);
// });

// button.addEventListener('click', (event) => {
//   const firstName = document.querySelector('#firstName').value;
//   const lastName = document.querySelector('#lastName').value;
//   const age = document.querySelector('#age').value;

//   console.log(firstName, lastName, age);
// });
