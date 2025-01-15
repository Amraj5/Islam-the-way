// Smooth Scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
  
  // Toggle Cards
  function toggleCard(card) {
    card.classList.toggle('active');
  }
  
  // Slider
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  
  function showSlide() {
    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === currentSlide);
    });
    currentSlide = (currentSlide + 1) % slides.length;
  }
  
  setInterval(showSlide, 4000);
  
  // FAQ Toggle
  function toggleFAQ(item) {
    item.querySelector('p').classList.toggle('hidden');
  }
  