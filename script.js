// Toggle mobile menu
const toggleBtn = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const mobileLinks = document.querySelectorAll('.mobile-nav a');

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('open');
  mobileNav.classList.toggle('open');
});

// Close menu on link click
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    toggleBtn.classList.remove('open');
    mobileNav.classList.remove('open');
  });
});

// Smooth scroll for back to top
document.querySelector('.back-to-top').addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
