const products = [
    { id:1, category: "Electronics", name: "Headphones", description:"description is...", count: 156, price: 199 ,image: "img/photo_005.jpg"},
    { id:2, category: "Electronics", name: "Security Camera", description:"description is...", count: 50, price: 80 ,image: "img/photo_003.jpg"},
    { id:3, category: "Clothing", name: "T-Shirt", description:"description is...", count: 85, price: 29 ,image: "img/photo_006.jpg"},
    { id:4, category: "Clothing", name: "Jacket", description:"description is...", count: 78, price: 69 ,image: "img/photo_002.jpg"},
    { id:5, category: "Books", name: "The Definitive Guide", description:"description is...", count: 234, price: 45 ,image: "img/photo_007.jpg"},
    { id:6, category: "Home & Garden", name: "Organic Garden Planter Set", description:"description is...", count: 92, price: 34 ,image: "img/photo_004.jpg"},
    { id:7, category: "Sports", name: "Professional Running Shoes", description:"description is...", count: 156, price: 124 ,image: "img/photo_001.jpg"},
    { id:8, category: "Beauty", name: "Luxury Skincare Set", description:"description is...", count: 143, price: 78 ,image: "img/photo_008.jpg" }
]
// extract unique categories from a products array
function getCategories(productsArray) {
// Create a new Set to store unique categories
    const categoriesSet = new Set();
    // Loop through each product in the array
    for (const product of productsArray) {
        // Add the product's category to the Set
        // Set automatically ignores duplicates
        categoriesSet.add(product.category);
    }
    // Convert the Set back to an array and return it
    return [...categoriesSet];
}
// Call the function with the products array
const categories = getCategories(products);

const list = document.querySelector('#categories-list');
// Loop through each unique category
categories.forEach(cat => {
    // Create a label element to wrap checkbox + text
    const label = document.createElement('label');
    label.style.display = 'block'; //kad checkboxai būtu po vieną

    // Create the checkbox input
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = cat; //naudosi filtravimui
    checkbox.name = 'category'; // visi checkboxai turi tą patį vardą
    
    //Append checkbox and text to label
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(cat));

    //Append label to list (<ul>)
    list.appendChild(label);
});

const productsDiv = document.querySelector('#products');

function displayProducts(productArray){
    productsDiv.innerHTML = ""; // Clear the container so nothing is left before rendering
    productArray.forEach(product => { // Loop through each product in the array
        const card = document.createElement("div"); // Create a new div for the product card
        card.classList.add("product-card"); // Add a class for styling the card

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.category}</p>
            <p>Price: $${product.price}</p>
        `;
        productsDiv.appendChild(card); // Add the card to the main container
    });
}
displayProducts(products);
