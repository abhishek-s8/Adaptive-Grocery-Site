	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 


//note: images are from walmart.ca
var products = [
	{
		name: "Broccoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		category: "vegetable",
		image: "./styles/images/Broccoli.jpg",
		price: 1.99
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		category: "bakery",
		image: "./styles/images/Bread.jpg",
		price: 2.35
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		category: "seafood",
		image: "./styles/images/Salmon.jpg",
		price: 10.00
	},
	{
		name: "Cookies",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		category: "bakery",
		image: "./styles/images/Cookies.jpg",
		price: 2.50
	},
	{
		name: "Chicken",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		category: "meat",
		image: "./styles/images/Chicken.jpg",
		price: 11.00
	},
	{
		name: "Potatoes",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		category: "vegetable",
		image: "./styles/images/Potatoes.jpg",
		price: 6.00
	},
	{
		name: "Corn",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		category: "vegetable",
		image: "./styles/images/Corn.jpg",
		price: 5.00
	},
	{
		name: "Bacon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		category: "meat",
		image: "./styles/images/Bacon.jpg",
		price: 6.00
	},
	{
		name: "Eggs",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		category: "dairy",
		image: "./styles/images/Eggs.jpg",
		price: 2.75
	},
	{
		name: "Apples",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		category: "fruit",
		image: "./styles/images/Apples.jpg",
		price: 2.50
	},
	{
		name: "Avocados",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		category: "vegetable",
		image: "./styles/images/Avocado.jpg",
		price: 5.00
	},
	{
		name: "Milk",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		category: "dairy",
		image: "./styles/images/Milk.png",
		price: 4.00
	},
	{
		name: "Blueberries",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		category: "fruit",
		image: "./styles/images/Blueberries.jpg",
		price: 6.00
	},
	{
		name: "Cake",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		category: "bakery",
		image: "./styles/images/Cake.jpg",
		price: 15.00
	},
	{
		name: "Lamb",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		category: "meat",
		image: "./styles/images/Lamb.png",
		price: 10.00
	},
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, vegetarian, glutenFree, organicOnly) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if (organicOnly && !prods[i].organic){
			continue;
		}

		if(!vegetarian && !glutenFree){
			product_names.push([prods[i].name, prods[i].price, prods[i].category, prods[i].image]);
		}

		let veg = vegetarian && prods[i].vegetarian;
		let glut = glutenFree && prods[i].glutenFree;

		if (vegetarian && glutenFree){
			if(prods[i].glutenFree && prods[i].vegetarian){
				product_names.push([prods[i].name, prods[i].price, prods[i].category, prods[i].image]);
			}
		}
		else if (veg){
			product_names.push([prods[i].name, prods[i].price, prods[i].category, prods[i].image]);
		}
		else if (glut){
			product_names.push([prods[i].name, prods[i].price, prods[i].category, prods[i].image]);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts, productQuantity) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		let index = chosenProducts.indexOf(products[i].name)

		if (index > -1){
			totalPrice += products[i].price * productQuantity[index];
		}
	}
	return Math.round(totalPrice * 100) / 100;
}