const gallery = document.getElementById('gallery');
const layoutButtons = document.querySelectorAll('[data-layout]');
const fxButtons = document.querySelectorAll('[data-effect]');

const setActive = (buttons, next) => {
  buttons.forEach((button) => {
    button.classList.toggle('is-active', button === next);
  });
};

layoutButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setActive(layoutButtons, button);
    gallery.classList.remove('layout-a', 'layout-b', 'layout-c');
    gallery.classList.add(button.dataset.layout);
  });
});

fxButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setActive(fxButtons, button);
    gallery.classList.remove('fx-classic', 'fx-noir', 'fx-sepia', 'fx-glow', 'fx-etched', 'fx-dream');
    gallery.classList.add(button.dataset.effect);
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.setProperty('--delay', `${entry.target.dataset.i * 48}ms`);
        entry.target.classList.add('is-visible');
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('.card').forEach((card, i) => {
  card.dataset.i = i;
  observer.observe(card);
});

gallery.classList.add('fx-classic');
