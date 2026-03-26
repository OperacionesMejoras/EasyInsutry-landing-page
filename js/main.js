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

// --- Modal de contacto ---
const modal        = document.getElementById('contact-modal');
const modalOverlay = document.getElementById('contact-modal-overlay');
const modalClose   = document.getElementById('contact-modal-close');

function openModal() {
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = '';
}

document.querySelectorAll('[data-open-modal]').forEach(el => {
  el.addEventListener('click', openModal);
});

if (modalOverlay) modalOverlay.addEventListener('click', closeModal);
if (modalClose)   modalClose.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.hidden) closeModal();
});
