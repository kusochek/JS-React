// Promise

// const AMOUNT = 0;

// const obizianka = new Promise((resolve, reject) => {
//   AMOUNT >= 100 ? resolve('Already have money!') : reject({ message: 'I still wait for the salary!' });
// });

// obizianka
//   // .then(
//   //   (mssg) => {
//   //     console.log(mssg, 'Super, here is your money!');
//   //     return 'Yeaaaaah! Let\s go to the bar!';
//   //   },
//   //   (error) => {
//   //     console.log(`I\'m sorry, but I don\'t have enough money. ${error.message}`);
//   //     return Promise.reject('Please ask me one week later!');
//   //   },
//   // )
//   // .then(
//   //   (mssg) => {
//   //     console.log(mssg);
//   //   },
//   //   (error) => {
//   //     console.log(error);
//   //   }
//   // )
//   .then((mssg) => {
//     console.log(mssg, 'Super, here is your money!');
//   })
//   .catch((err) => {
//     console.log(`I\'m sorry, but I don\'t have enough money. ${err.message}`);
//   })
//   .finally(() => {
//     console.log('Finally it\'s ended!');
//   });


// CONCERT TICKETS
// Make ticket sell
// if sum of sold out ticket > 100 concert will be
// if sum of sold out tickets >= 80 20 tickets should be sell for the student


// const tickets = 100;

// const concert = new Promise((resolve, reject) => {
//   tickets >= 100 ? resolve() : reject();
// });

// concert
//   .then(
//     () => {
//      return `${tickets} tickets were sold out!`;
//     },
//     () => {
//       console.log(`${tickets} were sold out!`);
//       return tickets >= 80
//         ? `Try to sell ${100 - tickets}.` 
//         : Promise.reject(`Concert is canceled. ${tickets} tickets was sold out!`);
//     },
//   )
//   .then((mssg) => {
//     console.log(`${mssg} Concert gonna be!`);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log('P.S Concert by Poplavskii!');
//   });


// fetch

const API = "https://65a57bb252f07a8b4a3f3932.mockapi.io/api/v1/countries";

let itemForRender = null;

fetch(API)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      itemForRender = item;
    })
  });

function renderParagraph(item) {
  const p = document.createElement('p');
  p.innerText = item.country;

  document.body.append(p);
}

renderParagraph(itemForRender);


