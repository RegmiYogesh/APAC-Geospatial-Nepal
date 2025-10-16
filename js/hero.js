const slides = document.querySelectorAll('.hero-slider .slide');
const dotsContainer = document.querySelector('.hero-dots');
const prevBtn = document.querySelector('.hero-nav .prev');
const nextBtn = document.querySelector('.hero-nav .next');

let currentSlide = 0;

// Create dots dynamically
slides.forEach((_, i) => {
  const dot = document.createElement('span');
  if(i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.hero-dots span');

function showSlide(index){
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
  currentSlide = index;
}

function nextSlide(){
  let next = (currentSlide + 1) % slides.length;
  showSlide(next);
}

function prevSlide(){
  let prev = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(prev);
}

function goToSlide(index){
  showSlide(index);
}

// Auto-slide every 5 seconds
let slideInterval = setInterval(nextSlide, 5000);

// Arrow click events
nextBtn.addEventListener('click', () => { nextSlide(); resetInterval(); });
prevBtn.addEventListener('click', () => { prevSlide(); resetInterval(); });

// Reset auto-slide interval after manual interaction
function resetInterval(){
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 5000);
}
