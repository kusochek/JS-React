const userInfoWrapper = document.querySelector('#userInfo');
const loginButton = document.querySelector('#login');
const registerButton = document.querySelector('#register');

// IMAGE BASE 64
const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
  });
};

// API
const API = 'https://67f3edc4cbef97f40d2cb51f.mockapi.io/api/v1';

async function controller(path, method = 'GET', body) {
  const response = await fetch(`${API}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();

  return data;
}

// LOGIN USER


async function getAllUsers() {
  const users = await controller('/users');

  return users;
}

loginButton.addEventListener('click', async () => {
  const users = await getAllUsers();
  
   const email = document.querySelector('#email').value;
   const password = document.querySelector('#password').value;   

   const foundUser = users.find((user) => user.email === email);

   if (!foundUser) {
    alert('User not found!');
    return;
   }

   const isPasswordCorrect = foundUser?.password === password;

   if (!isPasswordCorrect) {
    alert('Wrong password!');
    return;
   }

   renderUserInformation(foundUser);
});

// RENDER USER

async function getUserCat(catType) {
  const cats = await controller('/cats');

  return cats.find((cat) => {
    console.log(cat.type, catType);
    
    return cat.type === catType
  });
}

async function renderUserInformation(user) {
  const card = document.createElement('div');
  const avatar = document.createElement('img');
  const mainInformation = document.createElement('div');
  const fullName = document.createElement('h4');
  const email = document.createElement('p');
  const cat = document.createElement('p');

  avatar.src = user.avatar;
  avatar.alt = user.fullName;
  fullName.innerText = user.fullName;
  email.innerText = user.email;

  const foundCat = await getUserCat(user.cat);
  cat.innerText = `${user.cat} - ${foundCat.name}`;

  card.classList.add('card');
  mainInformation.classList.add('card-top');

  mainInformation.append(fullName);
  card.append(avatar, mainInformation, email, cat);
  userInfoWrapper.append(card);
}


// REGISTRATION

registerButton.addEventListener('click', async () => {
  const users = await getAllUsers();

  const fullName = document.querySelector('#name').value;
  const email = document.querySelector('#emailReg').value;
  const password = document.querySelector('#passwordReg').value;
  const cat = document.querySelector('#cat').value;
  const avatar = document.querySelector('#avatar');

  const isUserAlreadyExist = users.find((user) => user.email === email);

  if (isUserAlreadyExist) {
    alert(`User with email ${email} already exist!`);
    return;
  }

  const base64 = await getBase64(avatar.files[0]);
  
  const body = {
    fullName,
    avatar: base64,
    email,
    cat,
    password,
    createdAt: '',
  };

  const data = await controller('/users', 'POST', body);

  if (data) {
    alert('Register success! Now you can login!');
  }
});

