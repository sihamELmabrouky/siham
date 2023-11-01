menu = document.querySelector(".menu");
clos = document.querySelector(".close");
links = document.querySelector(".links");
overlay = document.querySelector(".overlay");
menu.addEventListener("click", () => {
    // alert()
    menu.style.display = "none";
    links.style.display = "block";
    clos.style.display = "block";
    overlay.style.display = "none";



});
clos.addEventListener("click", () => {
    // alert()
    menu.style.display = "block";
    links.style.display = "none";
    clos.style.display = "none";
    overlay.style.display = "none";



});
// reveal
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);