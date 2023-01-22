let cartdata=JSON.parse(localStorage.getItem("cart"))||[]
let container=document.getElementById("cart-container")
let cartTotal=document.querySelector("#cart-total")
let sum=0
for(let i=0;i<cartdata.length;i++){

sum+=Number(cartdata[i].price)
console.log(sum)
}
cartTotal.textContent=sum
console.log(cartdata)
display(cartdata)
function display(data){
container.innerHTML=""
cartTotal.textContent=data.reduce((a,b)=>{
    return a+((b.price)*b.quantity);
  },0);
data.forEach((el,index)=>{
    const product=document.createElement("div")

    const image=document.createElement("img");
      image.src=el.image;

      const brand=document.createElement("h2");
      brand.textContent=el.title;

      let price=document.createElement("h3");
      price.textContent=`Rs.${el.price}`;
      
     


      const increment=document.createElement("button");
      
      increment.textContent="+";
      increment.addEventListener("click",()=>{
        cartdata[index].quantity++;
        localStorage.setItem("cart",JSON.stringify(cartdata));
        display(cartdata);
      });
      const quantity=document.createElement("span")
      quantity.textContent=el.quantity;

      const decrement=document.createElement("button");
      decrement.textContent="-";
      decrement.addEventListener("click",()=>{
        if(el.quantity<=1)
          return;
          cartdata[index].quantity--;
          localStorage.setItem("cart",JSON.stringify(cartdata));
        
          display(cartdata);
        
      });
      let remove=document.createElement("button");
      remove.textContent="Remove";
      remove.addEventListener("click",function(){
        cartdata=cartdata.filter(function(ele){
          return ele.title!=el.title;
          
        })
       console.log(cartdata)
        localStorage.setItem("cart",JSON.stringify(cartdata));
        display(cartdata);
      })
      product.append(image,brand,price,increment,quantity,decrement,remove);
      container.append(product);
  })

}
display(cartdata)


let btk=document.querySelector('#bts>button')
btk.addEventListener('click',()=>{
  window.location.assign('./payment.html')
})