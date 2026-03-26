/* ==========================================================
   EasyIndustry — Main JavaScript
   ========================================================== */

// --- Mobile navigation toggle ---
const navToggle  = document.getElementById('nav-toggle');
const navMobile  = document.getElementById('nav-mobile');
const navOverlay = document.getElementById('nav-overlay');

function openMenu() {
  navMobile.classList.add('is-open');
  navOverlay.classList.add('is-open');
  navToggle.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  navMobile.classList.remove('is-open');
  navOverlay.classList.remove('is-open');
  navToggle.setAttribute('aria-expanded', 'false');
}

if (navToggle && navMobile) {
  navToggle.addEventListener('click', () => {
    navMobile.classList.contains('is-open') ? closeMenu() : openMenu();
  });

  // Close on link click
  navMobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on overlay click
  navOverlay.addEventListener('click', closeMenu);
}

// --- Contact form ---
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(contactForm));

    // Basic validation
    if (!data.name || !data.email || !data.message) {
      alert('Por favor completá todos los campos requeridos.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      alert('Ingresá un correo electrónico válido.');
      return;
    }

    // TODO: replace with actual API call or form service (e.g. Formspree, EmailJS)
    console.log('Formulario enviado:', data);

    const btn = contactForm.querySelector('.form-submit');
    btn.textContent = '✓ Mensaje enviado';
    btn.disabled = true;
    btn.style.background = '#50dc78';
    btn.style.color = '#0a0a0a';

    setTimeout(() => {
      contactForm.reset();
      btn.textContent = 'Enviar mensaje →';
      btn.disabled = false;
      btn.style.background = '';
      btn.style.color = '';
    }, 3000);
  });
}
