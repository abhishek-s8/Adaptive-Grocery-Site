
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {
	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}

function fillTheCategories(arr, el){
	
	temp = document.getElementById(el);
	temp.innerHTML = "";

	for (i = 0; i < arr.length; i++) {
			
		var productName = arr[i][0];
		var productprice = arr[i][1];

		let img = document.createElement("img");
		img.src = arr[i][3];
		temp.appendChild(img);
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode('\u00A0\u00A0'+ `${productName} [ $${productprice} each ]` + '\u00A0\u00A0'));
		temp.appendChild(label);

		// create the checkbox and add in HTML DOM
		var quantity = document.createElement("input");
		quantity.type = "number";
		quantity.name = "product";
		quantity.value = "0";
		quantity.id = productName;
		quantity.min = 0;
		quantity.max = 5;
		temp.appendChild(quantity);
		
		// create a breakline node and add in HTML DOM
		temp.appendChild(document.createElement("br"));    
	}
}

// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos
function populateListProductChoices() {	

	let meat = [];
	let dairy = [];
	let vegetables = [];
	let seafood = [];
	let bakery = [];
	let fruits = [];

	let vegetarian = document.getElementById("Vegetarian").checked;
	let organicOnly = document.getElementById("yes").checked;
	let glutenFree = document.getElementById("GlutenFree").checked;
	
	var optionArray = restrictListProducts(products, vegetarian, glutenFree, organicOnly);

	for(i = 0; i < optionArray.length; i++){

		switch(optionArray[i][2]){
			case "dairy":
				dairy.push(optionArray[i]);
				break;
			case "bakery":
				bakery.push(optionArray[i]);
				break;
			case "fruit":
				fruits.push(optionArray[i]);
				break;
			case "vegetable":
				vegetables.push(optionArray[i]);
				break;
			case "seafood":
				seafood.push(optionArray[i]);
				break;
			case "meat":
				meat.push(optionArray[i]);
				break;
		}
	}

	if(bakery && !glutenFree){
		document.getElementById("bakery_section").style.display = "block";
		fillTheCategories(bakery, "bakery");
	}
	else{
		document.getElementById("bakery_section").style.display = "none";
	}

	if(dairy){
		document.getElementById("dairy_section").style.display = "block";
		fillTheCategories(dairy, "dairy");
	}
	else{
		document.getElementById("dairy_section").style.display = "none";
	}

	if(fruits){
		document.getElementById("fruit_section").style.display = "block";
		fillTheCategories(fruits, "fruit");
	}
	else{
		document.getElementById("fruit_section").style.display = "none";
	}

	if(vegetables){
		document.getElementById("vegetable_section").style.display = "block";
		fillTheCategories(vegetables, "vegetable");
	}
	else{
		document.getElementById("vegetable_section").style.display = "none";
	}

	if(seafood && !vegetarian){
		document.getElementById("seafood_section").style.display = "block";
		fillTheCategories(seafood, "seafood");
	}
	else{
		document.getElementById("seafood_section").style.display = "none";
	}

	if(meat && !vegetarian){
		document.getElementById("meat_section").style.display = "block";
		fillTheCategories(meat, "meat");
	}
	else{
		document.getElementById("meat_section").style.display = "none";
	}
}	

// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var chosenProducts = [];
	var productQuantity = [];
	var ele = document.getElementsByName("product");
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	var para = document.createElement("P");
	para.innerHTML = "You selected: ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].value > 0) {
			let quantity = ele[i].value > 10 ? 10:ele[i].value;
			para.append("- ");
			para.appendChild(document.createTextNode(`${ele[i].id} x ${quantity}`));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].id);
			productQuantity.push(quantity);
		}
	}
	c.appendChild(para);
	var para2 = document.createElement("P");
	para2.innerHTML = "Total Price is $" + getTotalPrice(chosenProducts, productQuantity);
	c.appendChild(para2);
		
}