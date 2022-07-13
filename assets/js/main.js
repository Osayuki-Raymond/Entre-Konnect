const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const part = document.querySelector(".part");

hamburger.addEventListener("click", () => { 
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active"); 
    part.classList.toggle("active");
});

document.querySelectorAll(".nav-links").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    part.classList.remove("active");
}))

