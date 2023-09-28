document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".carousel-slide");
    let currentIndex = 0;
    let touchStartX = 0;
    let touchEndX = 0;

    // Agregamos event listeners para detectar gestos táctiles
    carousel.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX;
    });

    carousel.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        const threshold = 50; // Puedes ajustar este valor según tu preferencia
        const deltaX = touchEndX - touchStartX;

        if (deltaX > threshold) {
            // Deslizamiento hacia la derecha
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        } else if (deltaX < -threshold) {
            // Deslizamiento hacia la izquierda
            currentIndex = (currentIndex + 1) % slides.length;
        }

        updateCarousel();
    }

    function updateCarousel() {
        const translateX = -currentIndex * 100;
        carousel.style.transform = `translateX(${translateX}%)`;
    }
});
