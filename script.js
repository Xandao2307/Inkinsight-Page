let currentIndex = 0;

function showSlide(index) {
    const images = document.querySelectorAll('.carousel-images img');
    if (index >= images.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex = index;
    }
    const newTransform = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${newTransform}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Mostrar o slide inicial
showSlide(currentIndex);