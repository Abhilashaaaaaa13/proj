document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.info-section');
    sections.forEach(section => {
        section.addEventListener('click', () => {
            section.classList.toggle('active');
        });
    });
});
