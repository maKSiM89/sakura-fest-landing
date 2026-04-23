const navToggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('#menu');

if (navToggle && menu) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('open');
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ========== FEEDBACK FORM (Google Forms) ========== */
const feedbackBtn = document.getElementById('feedbackBtn');
const feedbackModal = document.getElementById('feedbackModal');
const modalClose = document.querySelector('.modal-close');

// Open modal
if (feedbackBtn) {
  feedbackBtn.addEventListener('click', () => {
    feedbackModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
}

// Close modal
function closeModal() {
  feedbackModal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

if (modalClose) {
  modalClose.addEventListener('click', closeModal);
}

// Close modal when clicking outside of content
feedbackModal.addEventListener('click', (event) => {
  if (event.target === feedbackModal) {
    closeModal();
  }
});

// Close modal on Escape key
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && feedbackModal.classList.contains('active')) {
    closeModal();
  }
});
