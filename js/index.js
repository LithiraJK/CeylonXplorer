const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  item.querySelector('.faq-question').addEventListener('click', () => {
    item.classList.toggle('active');
  });
});


const sliderTrack = document.querySelector('.slider-track');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dots = document.querySelectorAll('.slider-dots .dot');

let currentIndex = 0;
const cardWidth = 340; // card width (300) + margins (40)
const totalCards = document.querySelectorAll('.review-card').length;
const cardsToShow = 3; // number of cards you want visible in one slide

function updateSliderPosition() {
  sliderTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  updateDots();
}

function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

// Dot Indicators
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateSliderPosition();
  });
});

