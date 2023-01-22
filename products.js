window.addEventListener("load", () => {
    fetchProducts(url);
});


function fetchProducts(url) {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);

        renderProducts(data);
    })
    .catch(err => {
        console.log(err);
    })
}


function renderProducts(productsData) {
    productsContainer.innerHTML = `
        ${productsData.map(productData => getProductCard(productData)).join("")}
    `;
}

        
function getProductCard(productData) {
    console.log(productData.category)
    return `
    <div class="product-card">
        <img src=${productData.image} alt="">
        <p>${productData.descreption}</p>
        <h3>Rs.${productData.price} <s>${getOriginalPrice(+productData.price)}</s></h3>
        <b>FREE DUFFLE BAG / WALLET*</b>
        <button class="add-to-cart-btn">Add to cart</button>
    </div>
    `;
}

        
function getOriginalPrice(price) {
    if (price < 1000) {
        return price+100;
    }
    else {
        return price + 1000;
    }
}