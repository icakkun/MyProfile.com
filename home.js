var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlinks");

togglebtn.addEventListener("click", function(){
  this.classList.toggle("click");
  nav.classList.toggle("open");
});
