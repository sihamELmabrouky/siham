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



// progress
const skillsSection = document.querySelector("#progress-section");
const progressBars = document.querySelectorAll('.progress-bar');

function showPRogress() {
    progressBars.forEach(progressBars => {
        const value = progressBars.dataset.progress;
        // console.log('hi');
        progressBars.style.opacity = 1;
        progressBars.style.width = `${value}%`;
    })
}
function hidePRogress() {
    progressBars.forEach(p => {

        p.style.opacity = 0;
        p.style.width = 0;
    })
}

window.addEventListener('scroll', () => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 2;
    if (sectionPos < screenPos) {
        showPRogress();
    } else {
        hidePRogress();
    }

})

