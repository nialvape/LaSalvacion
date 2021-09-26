const btn_menu = document.querySelector(".menu_btn"),
      menu = document.querySelector(".menu"),
      btn_open_menu = document.querySelector(".open_menu_btn")

btn_menu.addEventListener("click", (activeMenu)=>{
    menu.classList.toggle("active_menu");
});
btn_open_menu.addEventListener("click", (activeMenu)=>{
    menu.classList.toggle("active_menu");
});