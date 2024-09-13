function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
let currentIndex = 0;

function showNextSlide() {
    currentIndex++;
    if (currentIndex >= slide.length) {
        currentIndex = 0;
    }
    updateSlidePosition();
}

function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Automatically change slide every 3 seconds
setInterval(showNextSlide, 5000);

const texts = ["Data Scientist", "Full Stack Developer", "ML Engineer", "DL Engineer"];
let index = 0;
const element = document.getElementById('dynamic-text');

function changeText() {
    element.style.opacity = 0; // Fade out
    setTimeout(() => {
        element.textContent = texts[index];
        element.style.opacity = 1; // Fade in
        index = (index + 1) % texts.length;
    }, 500); // Wait for fade-out to complete before changing text
}

// Change text every 2 seconds
setInterval(changeText, 4000);
