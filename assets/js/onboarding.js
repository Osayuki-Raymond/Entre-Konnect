// SLIDESHOW
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dots");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


// AUTOMATIC SLIDESHOW

// main
let slideIndexAuto = 0;

function showSlidesAuto() {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dots");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndexAuto++;
    if (slideIndexAuto > slides.length) { slideIndexAuto = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexAuto - 1].style.display = "block";
    dots[slideIndexAuto - 1].className += " active";
    setTimeout(showSlidesAuto, 5000);
}

// Call Function on Tablet Screen and Mobile Screen
if (window.matchMedia("(max-width: 1024px)").matches) {
    showSlidesAuto();
}


    // HIDING THE START AD NEXT BUTTONS
    // if (slideIndex == 2) {
    //     document.getElementsByClassName("dots2").className += " active";
    // }

    // if (slideIndex == 3) {
    //     document.getElementsByClassName("dots3").className += " active";
    // }
