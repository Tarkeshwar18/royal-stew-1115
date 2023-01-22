const links =document.querySelectorAll(".wdc-btn ");
links.forEach(btn => btn.addEventListener("click",(e)=>{
     e.preventDefault();
     document.querySelector(".wdc-btn.active").classList.remove("active");
     btn.classList.add("active")
  }));
  
  let percent=document.querySelector("#percent")

percent.addEventListener("click",()=>{
    window.location.assign('./product.html')
})

// nav code starts here
let newArrivalsLink = document.getElementById("new-arrivals-link");
newArrivalsLink.addEventListener("click", (e) => {
  e.preventDefault();
  
  console.log("newArrivalsLink");
  window.location.href = "./new-arrivals.html";
});

let casesSleevesLink = document.getElementById("cases-sleeves-link");
casesSleevesLink.addEventListener("click", (e) => {
  e.preventDefault();
  
  console.log("casesSleevesLink");
  window.location.href = "./cases-sleeves.html";
});

let accessoriesLink = document.getElementById("accessories-link");
accessoriesLink.addEventListener("click", (e) => {
  e.preventDefault();
  
  console.log("accessoriesLink");
  window.location.href = "./accessories.html";
});

let saleLink = document.getElementById("sale-link");
saleLink.addEventListener("click", (e) => {
  e.preventDefault();
  
  console.log("saleLink");
  window.location.href = "./sale.html";
});

let bagsWalletsLink = document.getElementById("bags-wallets-link");
bagsWalletsLink.addEventListener("click", (e) => {
  e.preventDefault();
  
  console.log("bagsWalletsLink");
  window.location.href = "./bags-wallets.html";
});

let homeOfficeLink = document.getElementById("home-office-link");
homeOfficeLink.addEventListener("click", (e) => {
  e.preventDefault();
  
  console.log("homeOfficeLink");
  window.location.href = "./home-office.html";
});

let collectionsLink = document.getElementById("collections-link");
collectionsLink.addEventListener("click", (e) => {
  e.preventDefault();
  
  console.log("collectionsLink");
  window.location.href = "./collections.html";
});
// nav code ends here