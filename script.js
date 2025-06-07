
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("show");
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    menu.classList.remove("show");
    hamburger.classList.remove("active");
  });
});

document.querySelector('.back-to-top').addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Hide hamburger at top on scroll (desktop only)
window.addEventListener('scroll', () => {
  const top = window.scrollY === 0;
  if (window.innerWidth >= 768) {
    hamburger.classList.toggle('hide', top);
  } else {
    hamburger.classList.remove('hide');
  }
});

// Initial check for top position on load (desktop only)
if (window.scrollY === 0 && window.innerWidth >= 768) {
  hamburger.classList.add('hide');
}
