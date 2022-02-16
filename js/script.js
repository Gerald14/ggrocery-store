let menu = document.querySelector("#menu");
let menu_icon = document.querySelector("#menu-icon");

 menu_icon.addEventListener("click",function(){
     menu.classList.toggle("navbar__menu--toggle")
 })