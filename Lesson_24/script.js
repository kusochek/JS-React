// RENDER EXIST USERS
// json/anna.json
// json/jack.json

// const wrapper = document.querySelector('.wrapp');

// const controller = (url) => fetch(url).then((data) => data.json());

// const usersData = controller('json/users.json')
//   .then((response) => {
//     Promise.allSettled(response.users.map((user) => {
//       return controller(`json/${user.name.toLowerCase()}.json`)
//     }))
//       .then((response) => {
//         const ul = document.createElement('ul');

//         response
//           .filter((data) => data.status !== 'rejected')
//           .map((promiseResponse) => promiseResponse.value)
//           .forEach((user) => {
//             const li = document.createElement('li');
//             li.innerText = `Avatar: ${user.avatar}. Name: ${user.name}`;
          
//             ul.append(li);
//           });

//         wrapper.append(ul);
//       });
//   });




// async/await
// try catch

// const wrapper = document.querySelector('.wrapp');

// async function controller(url) {
//   const response = await fetch(url);
//   const data = await response.json();

//   return data
// }

// async function getUsers() {
//   const data = await controller('json/users.json');
//   const allUsers = await Promise.allSettled(data.users.map((user) => {
//     return controller(`json/${user.name.toLowerCase()}.json`)
//   }));

//   return allUsers;
// }

// async function renderUsers() {
//   const users = await getUsers();
  
//   const ul = document.createElement('ul');
//   users
//     .filter((data) => data.status !== 'rejected')
//     .map((promiseResponse) => promiseResponse.value)
//     .forEach((user) => {
//       const li = document.createElement('li');
//       li.innerText = `Avatar: ${user.avatar}. Name: ${user.name}`;
    
//       ul.append(li);
//     });

//   wrapper.append(ul);
// }

// renderUsers();


// EXAMPLE 1
// FIND USER BY EMAIL AND RENDER HIM


// REST

// API: https://jsonplaceholder.typicode.com/

// 'https://jsonplaceholder.typicode.com/comments?userId=1'

// URL
// 	protocol http/https
// 	domain
// 	path
// 	queryParameter

// METHOD
// 	GET 
// 	POST * - тільки в випадку створення нового
// 	PUT * - тільки якщо потрібно оновити більше одгого поля
// 	PATCH * - при зміні лише одного
// 	DELETE

// BODY

// HEADERS – сслужбова інформація (кодування, стиснення, сервер, кешування)

// STATUS
// 	100
// 		101

// 	200
// 		201
// 		204

// 	300
// 		301
// 		302

// 	400 
// 		401
// 		403
// 		404

// 	500 
// 		502
// 		503

// https://jsonplaceholder.typicode.com/

// REST - архітектура клієнт-серверної взаємодії
// зведення правил (рекомендацій), за якими клієнт (web app, mobile app) та сервер повинні між собою взаємодіяти

// REST говорить, що потрібно думати про дані, які зберігаються на сервері як ресурс.
// Кожен ресурс на сервері має свою URL. 

// LIST – GET /posts
// ITEM – GET /posts/:id

// ADD – POST /posts     body:{name: Alex, age: 21}
// <== {id: 101, name: Alex, age: 21}

// FULL UPDATE – PUT /posts/:id  body:{id: 101, name: Ivan}
// <== {id: 101, name: Ivan}

// PARTIAL UPDATE – PATCH /posts/:id body:{name: ''}
// <== {id: 101, name: Eve, age: 21}

// DELETE – /posts/:id
// <== {}

const API = 'https://jsonplaceholder.typicode.com';
const HEADERS = {
  'Content-type': 'application/json; charset=UTF-8',
};

async function controller(url, method = 'GET', body) {
  const response = await fetch(`${API}${url}`, {
    method,
    headers: HEADERS,
    body: JSON.stringify(body),
  });
  const data = await response.json();

  return data
}

// async function getPosts() {
//   const data = await controller('/posts');
//   console.log(data);
// }

// getPosts();

// async function createNewPost() {
//   const newPost = {
//     title: 'Hello! It\'s me!',
//     body: 'My name is Sasha. I\'m glad to be here!',
//     userId: 5,
//   };

//   const data = await controller('/posts', 'POST', newPost);
//   console.log(data);
// }

// createNewPost();

// async function getPost(id) {
//   const post = await controller(`/posts/${id}`);

//   return post;
// }

// async function updatePost() {
//   const post = await getPost(5);
//   console.log(post);
  
//   const updatedPost = {
//     ...post,
//     title: 'new title',
//     body: 'new body here!!!',
//   };
//   const data = await controller('/posts/5', 'PUT', updatedPost);
//   console.log(data); 
// }

// updatePost();


// async function updatePost() {
//   const updatedPost = {
//     title: 'new title',
//   };
//   const data = await controller('/posts/3', 'PATCH', updatedPost);
//   console.log(data); 
// }

// updatePost();

// async function deletePost(id) {
//   const data = await controller(`/posts/${id}`, 'DELETE');

//   console.log(data);
// }

// deletePost(83);

