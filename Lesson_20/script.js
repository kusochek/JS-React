// CLIENT SERVER MODEL
// XMLHttpRequest
// GET, POST, PUT, PATCH, DELETE
// STATUS CODES

// const wrapp = document.querySelector('.wrapp');

// console.log(1);

// const xml = new XMLHttpRequest();
// xml.open('GET', 'request/fileA.json');
// xml.send();

// xml.addEventListener('readystatechange', () => {
//   if (xml.readyState === 4 && xml.status < 400) {
//     const data = JSON.parse(xml.response);
//     console.log(data);
    
//     data.data.fruits.forEach((fruit) => {
//       console.log(fruit);
//       // const p = document.createElement('p');
//       // p.innerText = fruit;

//       // wrapp.append(p);
//     });
//   }
// });


// console.log(2);

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }



// render friends

function getData(method, url, cb) {
  const xml = new XMLHttpRequest();
  xml.open(method, url);
  xml.send();

  xml.addEventListener('readystatechange', () => {
    if (xml.readyState === 4 && xml.status < 400) {
      const response = JSON.parse(xml.response);
      
      cb(response.data);
    }
  });
}

const wrapp = document.querySelector('.wrapp');

function createCardPrincess(user) {
  const card = document.createElement('div');
  const image = document.createElement('img');
  const name = document.createElement('h3')
  const age = document.createElement('p');

  image.src = user.avatar;
  image.alt = user.name;
  name.innerText = user.name;
  age.innerText = user.age;

  card.classList.add('card');
  age.classList.add('age');

  card.append(image, name, age);
  return card;
}

function renderPrincess(princessList) {
  princessList.forEach((princess) => {
    const cardWithPrincess = createCardPrincess(princess);
    wrapp.append(cardWithPrincess);
  });
}

// function renderFruits(fruits) {
//   fruits.fruits.forEach((fruit) => {
//     const p = document.createElement('p');
//     p.innerText = fruit;

//     wrapp.append(p);
//   });
// }

getData('GET', 'request/fileB.json', renderPrincess);
// getData('GET', 'request/fileA.json', renderFruits);

// const xml = new XMLHttpRequest();
// xml.open('GET', 'request/fileB.json');
// xml.send();

// xml.addEventListener('readystatechange', () => {
//   if (xml.readyState === 4 && xml.status < 400) {
//     const data = JSON.parse(xml.response);

//     data.data.forEach((user) => {
//       const card = document.createElement('div');
//       const image = document.createElement('img');
//       const name = document.createElement('h3')
//       const age = document.createElement('p');
  
//       image.src = user.avatar;
//       image.alt = user.name;
//       name.innerText = user.name;
//       age.innerText = user.age;
  
//       card.classList.add('card');
//       age.classList.add('age');

//       card.append(image, name, age);
//       wrapp.append(card);
//     });
//   }
// });


// Promise
// fetch
