let currentSlide = 0;
const slides = document.querySelectorAll('.slider-images img');
const totalSlides = slides.length;
const dots = document.querySelectorAll('.dot');
 
function showSlide(index) {
    // Hide all slides
    slides.forEach((slide, i) => {
        slide.classList.remove('active'); // Remove active class from all slides
        slide.style.opacity = '0'; // Hide the slide
        dots[i].classList.remove('active'); // Remove active class from dots
    });
 
    // Show the current slide
    slides[index].classList.add('active');
    slides[index].style.opacity = '1'; // Show the slide
    dots[index].classList.add('active'); // Mark the dot as active
}
 
function nextSlide() {
    // Move to the next slide
    currentSlide = (currentSlide + 1) % totalSlides; // Loop back to the first slide
    showSlide(currentSlide);
}
 
// Initially show the first slide
showSlide(currentSlide);
 
// Set interval to change slides every 1 second
setInterval(nextSlide, 2000); // Change slide every 1 second (1000ms)
