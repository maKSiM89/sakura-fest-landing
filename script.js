const navToggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('#menu');

if (navToggle && menu) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('open');
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const tabs = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.tab-panel');

function activateTab(id) {
  tabs.forEach(btn => {
    const isActive = btn.dataset.tab === id;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-selected', String(isActive));
  });

  panels.forEach(panel => {
    panel.classList.toggle('active', panel.id === id);
  });
}

tabs.forEach(btn => {
  btn.addEventListener('click', () => activateTab(btn.dataset.tab));
});
