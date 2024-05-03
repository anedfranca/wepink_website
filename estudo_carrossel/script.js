const carouselSlide = document.querySelector(".carousel-slide");
const images = document.querySelectorAll(".carousel-slide img");

let counter = 1;
const slideWidth = images[0].clientWidth;

carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;

setInterval(() => {
    counter++;
    if (counter >= images.length) {
        counter = 0;
    }
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
}, 10000);
