/* ==========================================================
   EasyInsutry — Main JavaScript
   ========================================================== */

// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu   = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when a link is clicked
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Contact form — basic validation placeholder
const contactForm = document.querySelector('.contact__form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: replace with actual form submission logic (e.g., fetch to API)
    const data = Object.fromEntries(new FormData(contactForm));
    console.log('Form submitted:', data);
    alert('Mensaje enviado. Nos pondremos en contacto contigo pronto.');
    contactForm.reset();
  });
}
