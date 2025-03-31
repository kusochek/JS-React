// https://www.figma.com/design/UuLVgVYlWPKvdLtmPZ3aye/Untitled?node-id=0-1
const API = "https://api.chucknorris.io/jokes";
const FAVORITE_KEY = 'favoriteJokes';

const categoriesWrapp = document.querySelector('#category');
const getJokeButton = document.querySelector('button');
const jokeWrapp = document.querySelector('.joke-wrapp');
const favJokeWrapp = document.querySelector('.fav-joke-wrapp');;

const controller = (url) => fetch(`${API}/${url}`).then((response) => response.json());

function getCategories() {
  controller('categories')
    .then((categories) => {
      categories.forEach((category) => {
        renderCategory(category);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

function renderCategory(categoryName) {
  const label = document.createElement('label');
  const categoryButton = document.createElement('input');

  categoryButton.type = 'radio';
  categoryButton.name = 'categoryType';
  categoryButton.value = categoryName;

  label.append(categoryButton, categoryName);
  categoriesWrapp.append(label);
}

const TYPE_JOKE_SWITCHER = {
  random: () => controller('random'),
  category: (selectedCategory) => controller(`random?category=${selectedCategory}`),
  search: (value) => controller(`search?query=${value}`),
};

getJokeButton.addEventListener('click', () => {
  const selectedType = document.querySelector('input[name=jokeType]:checked').value;
  const selectedCategory = document.querySelector('input[name=categoryType]:checked')?.value;
  const searchInput = document.querySelector('#searchText')?.value;

  const params = selectedType === 'category'
    ? selectedCategory
    : selectedType === 'search'
    ? searchInput
    : null;

  TYPE_JOKE_SWITCHER[selectedType](params)
    .then((response) => {
      if (response.result) {
        response.result.forEach((joke) => {
          renderJoke(joke);
        });
      } else {
        renderJoke(response);
      }
    });
});

function createJoke(joke) {
  const jokeDiv = document.createElement('div');
  const jokeImage = document.createElement('img');
  const jokeInfo = document.createElement('div');
  const jokeFav = document.createElement('p');
  const jokeId = document.createElement('p');
  const idLink = document.createElement('a');
  const jokeDescription = document.createElement('p');
  const jokeFooter = document.createElement('div');
  const jokeUpdatedDate = document.createElement('p');

  jokeDiv.classList.add('joke');
  jokeInfo.classList.add('joke-info');
  jokeFav.classList.add('fav');
  jokeId.classList.add('id-info');
  jokeDescription.classList.add('description');
  jokeFooter.classList.add('joke-footer');
  jokeUpdatedDate.classList.add('date');

  jokeImage.src = joke.icon_url;
  jokeImage.alt = 'Chuck Norris';
  jokeFav.innerText = checkIsFavJokeAlreadyExist(joke) ? '❤️' : '🤍';
  idLink.href = joke.url;
  idLink.innerText = joke.id;
  jokeId.innerText = 'ID: ';
  jokeDescription.innerText = joke.value;
  jokeUpdatedDate.innerText = `Last Update: ${joke.updated_at}`;

  jokeFav.addEventListener('click', () => {
    checkIsFavJokeAlreadyExist(joke) ? deleteJokeFromFavoriteList(joke.id) : addJokeToFavoriteList(joke);
  });

  jokeFooter.append(jokeUpdatedDate, renderJokeCategoryInsideCard(joke.categories));
  jokeId.append(idLink);
  jokeInfo.append(jokeFav, jokeId, jokeDescription, jokeFooter);
  jokeDiv.append(jokeImage, jokeInfo);

  return jokeDiv;
}

function renderJoke(joke) {
  const jokeDiv = createJoke(joke);

  jokeWrapp.append(jokeDiv);
}

function renderFavJoke(joke, isNew) {
  const jokeDiv = createJoke(joke);

  isNew ? favJokeWrapp.prepend(jokeDiv) : favJokeWrapp.append(jokeDiv);
}

function renderJokeCategoryInsideCard(categories) {
  if (categories.length) {
    const jokeCategoryInfo = document.createElement('div');
    jokeCategoryInfo.innerText = categories[0];
    jokeCategoryInfo.classList.add('category-info');

    return jokeCategoryInfo;
  }

  return '';
}

function checkIsFavJokeAlreadyExist(joke) {
  const favJokes = getFavoriteJokes();

  return favJokes.find((prevJoke) => prevJoke.id === joke.id);
}

function getFavoriteJokes() {
  const favJokes = localStorage.getItem(FAVORITE_KEY);

  return favJokes ? JSON.parse(favJokes) : [];
}

function addJokeToFavoriteList(joke) {
  const prevFavJokes = getFavoriteJokes();
  const updatesFavJokes = [joke, ...prevFavJokes]

  if(!checkIsFavJokeAlreadyExist(joke)) {
    localStorage.setItem(FAVORITE_KEY, JSON.stringify(updatesFavJokes));
    renderFavJoke(joke, true);
  }
}

function deleteJokeFromFavoriteList(id) {
  const prevFavJokes = getFavoriteJokes();
  const updatedFavList = prevFavJokes.filter((joke) => joke.id !== id);

  localStorage.setItem(FAVORITE_KEY, JSON.stringify(updatedFavList));
  favJokeWrapp.innerHTML = '';
  updatedFavList.forEach((joke) => {
    renderFavJoke(joke);
  });
}

function renderExistedFavJokes() {
  const favJokes = getFavoriteJokes();

  favJokes.forEach((joke) => {
    renderFavJoke(joke);
  });
}

getCategories();
renderExistedFavJokes();
