menu = document.querySelector(".menu");
clos = document.querySelector(".close");
links = document.querySelector(".links");

menu.addEventListener("click", () => {
    // alert()
    menu.style.display = "none"
    clos.style.display = "block"
    links.style.display = "block"


});
clos.addEventListener("click", () => {
    // alert()
    menu.style.display = "block"
    clos.style.display = "none"
    links.style.display = "none"


});