window.addEventListener("load", () => {
    fetchProducts(url);
});

let cartdata=JSON.parse(localStorage.getItem('cart'))||[];
function fetchProducts(url) {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);

        renderProducts(data);
    addcart(data)
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
    console.log(productData.title)

    return `
    <div class="product-card">
        <img src=${productData.image} alt="">
        <h3>${productData.title}</h3>
        <p>${productData.descreption}</p>
        <h3>Rs.${productData.price} <s>${getOriginalPrice(+productData.price)}</s></h3>
        <b>FREE DUFFLE BAG / WALLET*</b>
        <button  class="add-to-cart-btn">Add to cart</button>
        
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


//  <------------------------experiment---------------------------------------------------------------------------->

//  function addcart(Data){ 

//     Data.forEach((ele)=>{
//         let flag=false;
        
//         for(let i=0;i<cartdata.length;i++){
            
//             // console.log("cartdata[i].title==ele.title",cartdata[i].title,ele.title,cartdata[i].title==ele.title)
//           if(cartdata[i].title===ele.title){
//             flag=true;
//             // break;
//           }
//         }
//         if(flag==true){
//             alert("Product is Already Added")
//         }
//         else{
//             cartdata.push({...ele,quantity:1});
//            localStorage.setItem("cart",JSON.stringify(cartdata));
//          alert("Product Added To Cart");
         
//         }
//     })
//     getProductCar(cartdata)
//  }
//  addcart(Data)
// //  getProductCar(cartdata)

