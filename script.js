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