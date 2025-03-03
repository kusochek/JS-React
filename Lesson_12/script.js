// Object.assign()
// spread/rest

// const obj_1 = {
//   a: 10,
//   b: 20,
//   k: {
//     x: 100,
//     y: 200,
//     p: {
//       x: 300,
//     }
//   }
// };
// const obj_2 = {
//   c: 30,
//   d: 40,
//   y: ['cat', 'dog']
// };
// const obj_3 = {
//   a: 50,
//   f: 60,
//   ee: function () {
//     console.log('here');
//   }
// };

// const assignedObj = Object.assign({}, obj_1, obj_2, obj_3);

// obj_1.k.x = 1230;
// console.log(assignedObj);

// SPREAD

// function showAllData(...params) { // spread
//   params.forEach(function(item) {
//     console.log(item);
//   });
// }

// showAllData('hello', 'olha', 'vlad', 'mouse', 'tree', 'sweet', 10, true);


// REST
// const fruits = ['apple', 'orange', 'banana', 'mango', [1,2,3]];

// const copiedFruits = fruits.concat(); // DEPRICATED
// const copiedFruits = [...fruits];

// const user = {
//   name: 'Daniil',
//   age: 23,
//   isSmoking: true,
//   child: {
//     name: 'Eva',
//   },
// };

// const copiedUser = { ...user };

// fruits[4][1] = 4;
// user.child.name = 'Adam';
// console.log(copiedFruits);
// console.log(copiedUser);

// function deepClone(obj) {
//   let copiedObj = {};

//   for (let key in obj) {
//     if (typeof obj[key] === 'object') {
//       copiedObj = { ...copiedObj, [key]: deepClone(obj[key]) };
//     } else {
//       copiedObj = { ...copiedObj, [key]: obj[key] };
//     }
//   }

//   return copiedObj;
// }

// const copiedObj = deepClone(user);
// user.child.name = 'Adam';

// console.log(copiedObj);



// Object prototype
// Object.create()

// const Parent = {
//   firstName: 'Vova',
//   lastName: 'Lokushyn',
//   age: 39,
//   getInfo: function() {
//     return `Hello! My name is ${this.firstName} ${this.lastName}`;
//   },
// };

// const Child = {
//   firstName: 'Ahdrii',
//   lastName: 'Lokushyn',
//   age: 12,
// }
// console.log(Child.getInfo());

// console.log(Parent.getInfo());

// const child = Object.create(Parent);
// child.firstName = 'Andrii';
// child.age = 12;

// console.log(child);
// console.log(child.firstName);
// console.log(child.lastName);
// console.log(child.age);
// console.log(child.getInfo());


// Function-constructor
// Human, getInfo
// render users

// function func() {
//   console.log(this); // WINDOW
// }

// func();

// function Human(name, age, eyesColor) {
//   this.name = name;
//   this.age = age;
//   this.eyesColor = eyesColor;

//   this.getInfo = function() {
//     return `Hello! My name is ${this.name}. I'm ${this.age} years old.`;
//   }
// };

// const sasha = new Human('Sasha', 29, 'green');
// const vlad = new Human('Vlad', 18, 'green');
// const oleksii = new Human('Oleksii', 18, 'brown');

// console.log(sasha.getInfo());
// console.log(vlad.getInfo());
// console.log(oleksii.getInfo());

const productList = [
  {
    image: 'https://mac-shop.pl/userdata/public/gfx/21216/Apple-iPhone-15-128GB-rozowy-MTP13PX-A-2.jpg',
    name: 'IPhone 15',
    description: 'Przełomowa Wydajność Zmienia Reguły Gry. Wybierz Swój iPhone 15. Zaawansowany System Dwóch Aparatów i Zdjęcia o Ultrawysokiej Rozdzielczości.',
    price: '32.000 uah',
    isFav: true,
  },
  {
    image: 'https://image.ceneostatic.pl/data/products/165592090/i-dyson-supersonic-hd07-niebieski-rozowy.jpg',
    name: 'Dyson',
    description: 'Sprawdź Ofertę Suszarek do Włosów. Kupuj Tanio w Media Expert. Zamów Online! Duży Wybór Produktów, Super Ceny. Możliwy Odbiór w Ponad 500 Sklepach.',
    price: '20.000 uah',
    isFav: false,
  },
  {
    image: 'https://f00.esfr.pl/foto/9/139116528857/f134e9bdbe68972ca8f9b124ef92847d/samsung-telewizor-qe75qn85dbtxxh,139116528857_5.webp',
    name: 'Samsung TV',
    description: 'Kup w ofercie promocyjnej — Użyj kodu rabatowego MULTI w koszyku i skorzystaj z promocji. 99% zniżki na piąty produkt. Skorzystaj z Programu',
    price: '18.000 uah',
    isFav: false,
  },
];

function Product(image, title, description, price, isFav) {
  this.image = image;
  this.title = title;
  this.description = description;
  this.price = price;
  this.isFav = isFav;

  this.cardRender = function() {
    return `
      <div class="card">
        <img src="${this.image}" />
        <h3>${this.title}</h3>
        <p>${this.description}</p>
        <h4>${this.price}</h4>
        <p>${this.isFav ? '💜' : '🤍'}</p>
      </div>
    `
  };
}

const productCardList = productList
  .map(function(product) {
    debugger;
    return new Product(product.image, product.name, product.description, product.price, product.isFav);
  })
  .map(function(product) {
    debugger;
    return product.cardRender();
  });

console.log(productCardList);



document.write(
  `
    <div class="wrapp">${productCardList.join('')}</div>
  `
);

