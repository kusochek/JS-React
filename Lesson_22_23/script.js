// const parse = (response) => JSON.parse(response);
// const controller = (method, action) => {
//   const xml = new XMLHttpRequest();
//   xml.open(method, action);
//   xml.send();

//   return new Promise((resolve, reject) => {
//     xml.addEventListener('readystatechange', () => {
//       if (xml.readyState === 4) {
//         xml.status < 400 ? resolve(parse(xml.response)) : reject(xml.status);
//       }
//     });
//   });
// };

// controller('GET', 'json/animals.json')
//   .then((data) => {
//     const animals = data.animals;
    
//     Promise.all(animals.map((animal) => controller('GET', `json/${animal}.json`)))
//       .then((data) => {
//         data.forEach((animalInfo) => {
//           console.log(animalInfo.name);
//         });
//       });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Promise.all([
//   controller('GET', 'json/cat.json'),
//   controller('GET', 'json/fox.json'),
//   controller('GET', 'json/dog.json'),
// ]).then((data) => {
//   console.log(data);
//   // data.forEach((response) => {
//   //   console.log(response.name);
//   // });
// });

// Promise.allSettled([
//   controller('GET', 'json/cats.json'),
//   controller('GET', 'json/foxy.json'),
//   controller('GET', 'json/dogs.json'),
// ]).then((data) => {
//   console.log(data);
  
  // data.forEach((promise) => {
  //   if (promise.status === 'fulfilled') {
  //     console.log(promise.value.name);
  //   }
  // })
// });

// Promise.race([
//   controller('GET', 'json/cat.json'),
//   controller('GET', 'json/fox.json'),
//   controller('GET', 'json/dog.json'),
// ]).then((data) => {
//   console.log(data);
//   // data.forEach((response) => {
//   //   console.log(response.name);
//   // });
// });

// Promise.any([
//   controller('GET', 'json/cat.json'),
//   controller('GET', 'json/foxy.json'),
//   controller('GET', 'json/dogs.json'),
// ]).then((data) => {
//   console.log(data);
//   // data.forEach((response) => {
//   //   console.log(response.name);
//   // });
// });

