
// Create a script that calculates the final price of a selected product based on season, category, product type, and quantity, then displays the full purchase information in HTML.
// 📌 What to do?

// 1️⃣ Ask the user for the season (winter or summer).
//    •    If the user enters “winter”, the final price is multiplied by 2.
//    •    If the user enters “summer”, the final price is multiplied by 0.8.
//    •    Keep asking until the user correctly enters “winter” or “summer” (ignore case and spaces).

// 2️⃣ Ask the user for the category (vegetables or fruits).
//    •    Keep asking until the user correctly enters “vegetables” or “fruits” (ignore case and spaces).

// 3️⃣ Ask the user for the product based on the selected category:
//    •    If vegetables, user can choose: “cabbage”, “avocado”, “tomato”.
//    •    If fruits, user can choose: “grapes”, “raspberry”, “coconut”.
//    •    Keep asking until the user correctly enters one of the available options (ignore case and spaces).

// 4️⃣ Ask the user for the quantity of the selected product.
//    •    The number must be greater than 1.
//    •    Keep asking until the user enters a valid number.

// 5️⃣ Calculate the final price based on the selected product, its quantity, and the seasonal multiplier.

// 6️⃣ Render the purchase details in HTML, including:
//    •    An image of the product.
//    •    The selected product name.
//    •    The quantity of the product.
//    •    The selected season.
//    •    The selected category.
//    •    The final price.
// 📌 Example of Rendered HTML:

// <div class="product" align="center">
// <img src="images/vegetables/cabbage.svg" alt="cabbage" width="100" height="100">
// <p>Selected product: <b>cabbage</b></p>
// <p>Count of cabbages: <b>3</b></p>
// <p>Selected period: <b>winter</b></p>
// <p>Selected category: <b>vegetables</b></p>
// <p>Final sum: <b>48 UAH</b></p>
// </div>

// season.includes('summer') // true
// season.includes('') // false
// season.includes('win') // false
// season.indexOf('win') // -1
// season.indexOf('winter') // 0

debugger;

season = ['winter', 'summer'];
categoriesList = ['fruits', 'vegetables'];
vegetables = ['cabbage', 'avocado', 'tomato'];
fruits = ['grapes', 'raspberry', 'coconut'];
vegetablePrices = [8, 16, 9];
fruitPrices = [10, 15, 5];

do {
  selectedSeason = prompt('Select period summer or winter?');
} while(!selectedSeason || !season.includes(selectedSeason.toLowerCase().trim()));

// if (selectedSeason === 'winter') {
//   coefficient = 2;
// } else  {
//   coefficient = 0.8;
// }

coefficient = selectedSeason === 'winter' ? 2 : 0.8;

do {
  selectedCategory = prompt(`Select category ${categoriesList.join(' or ')}`);
} while(!selectedCategory || !categoriesList.includes(selectedCategory.toLowerCase().trim()));

productToChoose = selectedCategory === 'vegetables' ? vegetables : fruits;
pricesForProduct = selectedCategory === 'vegetables' ? vegetablePrices : fruitPrices;

do {
  selectedProduct = prompt(`Enter product: ${productToChoose.join(' or ')}`);
} while(!selectedProduct || !productToChoose.includes(selectedProduct.toLowerCase().trim()));

do {
  countOfProduct = prompt(`How much ${selectedProduct} do you want to add?`);
} while(!countOfProduct || parseInt(countOfProduct) < 1);

indexOfSelectedProduct = productToChoose.indexOf(selectedProduct);
priceOfProduct = pricesForProduct[indexOfSelectedProduct];

totalPrice = priceOfProduct * countOfProduct * coefficient;

document.write(
 `
  <div class="product" align="center">
    <img src="images/${selectedCategory}/${selectedProduct}.svg" alt="${selectedProduct}" width="100" height="100">
    <p>Selected product: <b>${selectedProduct}</b></p>
    <p>Count of ${selectedProduct}: <b>${countOfProduct}</b></p>
    <p>Selected period: <b>${selectedSeason}</b></p>
    <p>Selected category: <b>${selectedCategory}</b></p>
    <p>Final sum: <b>${totalPrice} UAH</b></p>
  </div>
 ` 
);
