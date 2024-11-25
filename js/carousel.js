document.addEventListener('DOMContentLoaded', () => {
    const movieItems = document.querySelectorAll('.movie-item');
    
    movieItems.forEach(item => {
        item.addEventListener('click', () => {
            const movieFile = item.getAttribute('data-movie');
            window.location.href = `movie-player.html?movie=${movieFile}`;
        });
    });
});

const carouselContainer = document.querySelector('.carousel-container');

let scrollAmount = 0;
const scrollStep = 200;
const scrollInterval = 2000;

function autoScrollCarousel() {
  scrollAmount += scrollStep;
  if (scrollAmount >= carouselContainer.scrollWidth - carouselContainer.clientWidth) {
    scrollAmount = 0;
  }
  carouselContainer.scrollTo({ left: scrollAmount, behavior: 'smooth' });
}

setInterval(autoScrollCarousel, scrollInterval);
