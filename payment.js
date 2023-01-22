
let form=document.querySelector('form')
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  alert('Payment Succesfull!')
  window.location.assign("./index.html");
})
