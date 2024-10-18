let currentSlide = 0;
const slides = document.querySelectorAll('.slider-images img');
const totalSlides = slides.length;

function showSlide(index) {
    // Hide all slides
    slides.forEach((slide) => {
        slide.classList.remove('active');
        slide.style.opacity = '0';
    });

    // Show the current slide
    slides[index].classList.add('active');
    slides[index].style.opacity = '1';
}

function nextSlide() {
    // Move to the next slide
    currentSlide = (currentSlide + 1) % totalSlides; // Loop back to the first slide
    showSlide(currentSlide);
}

// Initially show the first slide
showSlide(currentSlide);

// Set interval to change slides every 4 seconds
setInterval(nextSlide, 4000); // Change slide every 4 seconds (4000ms)

