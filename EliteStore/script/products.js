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

// ---------------------
// EXTRACT UNIQUE CATEGORIES
// ---------------------

function getCategories(productsArray) {
    const categoriesSet = new Set();    
    for (const product of productsArray) {
        categoriesSet.add(product.category);
    }
    return [...categoriesSet];
}
const categories = getCategories(products);

const list = document.querySelector('#categories-list');

categories.forEach(cat => {

    const li = document.createElement("li");
    const label = document.createElement("label");

    label.classList.add("category-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = cat;
    checkbox.name = "category";
    // count products in each category
    const count = products.filter(({ category }) => category === cat).length;

    // text + number at the end
    label.innerHTML += `
        <span class="cat-name">${cat}</span>
        <span class="cat-count">${count}</span>
    `;

    label.prepend(checkbox);
    li.appendChild(label);
    list.appendChild(li);
});

// ---------------------
// DISPLAY PRODUCTS
// ---------------------

const productsDiv = document.querySelector('#products');

function displayProducts(productArray){
    productsDiv.innerHTML = ""; 
    productArray.forEach(product => { 
        const card = document.createElement("div"); 
        card.classList.add("product-card");

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.category}</p>
            <p>Price: $${product.price}</p>
        `;
        productsDiv.appendChild(card);
    });
}
displayProducts(products);

// ---------------------
// FILTER PRODUCTS ON CHECKBOX
// ---------------------

const checkboxes = document.querySelectorAll('#categories-list input');

checkboxes.forEach(cb => {
    cb.addEventListener('change', () => {
        // Get selected categories
        const checkedCategories = Array.from(checkboxes) //convert to array
            .filter(c => c.checked)
            .map(c => c.value);
        // Filter products by selected categories, or show all if none            
        if (checkedCategories.length === 0) {
            displayProducts(products); 
        } else {
            const filtered = products.filter(({ category }) => checkedCategories.includes(category));
            displayProducts(filtered);
        }
    });
});
