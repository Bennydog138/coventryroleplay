// ===============================
// Coventry Roleplay - Shared Script
// ===============================

// --- Responsive Navigation Menu ---
const menuToggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.links');

if (menuToggle && links) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    links.classList.toggle('open');
  });
}

// --- Reveal Animations on Scroll ---
const revealEls = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
  for (const el of revealEls) {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add('visible');
    }
  }
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// --- Footer Year Auto Update ---
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
