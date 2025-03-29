// https://www.figma.com/design/UuLVgVYlWPKvdLtmPZ3aye/Untitled?node-id=0-1
const API = "https://api.chucknorris.io/jokes";

const categoriesWrapp = document.querySelector('#category');
const getJokeButton = document.querySelector('button');

// const controller = (url) => fetch(url).then((response) => response.json());
function controller(url) {
  return fetch(`${API}/${url}`)
    .then((response) => response.json());
}

// controller(`${API}/random`)
//   .then((data) => {
//     console.log(data.value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

function getCategories() {
  controller('categories')
    .then((categories) => {
      categories.forEach((category) => {
        const label = document.createElement('label');
        const categoryButton = document.createElement('input');

        categoryButton.type = 'radio';
        categoryButton.name = 'categoryType';
        categoryButton.value = category;

        label.append(categoryButton, category);
        categoriesWrapp.append(label);
      });
    })
    .catch((error) => {
      console.log(error);
    });
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
    .then((joke) => {
      console.log(joke);
    });
})

getCategories();
