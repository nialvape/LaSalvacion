const btn_menu = document.querySelector(".menu_btn"),
      menu = document.querySelector(".menu"),
      btn_open_menu = document.querySelector(".open_menu_btn"),
      main_container = document.querySelector(".main-container");

btn_menu.addEventListener("click", (activeMenu)=>{
    menu.classList.add("active_menu");
});
btn_open_menu.addEventListener("click", (activeMenu)=>{
    menu.classList.remove("active_menu");
});
main_container.addEventListener("click", (activeMenu)=>{
    menu.classList.remove("active_menu");
})