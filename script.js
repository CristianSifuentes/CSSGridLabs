const gallery = document.getElementById('gallery');
const cards = [...document.querySelectorAll('.card')];
const layoutButtons = document.querySelectorAll('[data-layout]');
const fxButtons = document.querySelectorAll('[data-effect]');

const setActive = (buttons, next) => {
  buttons.forEach((button) => {
    button.classList.toggle('is-active', button === next);
  });
};

const getGridMetrics = () => {
  const style = getComputedStyle(gallery);
  return {
    row: parseFloat(style.gridAutoRows),
    gap: parseFloat(style.gap)
  };
};

const applyMasonry = () => {
  const { row, gap } = getGridMetrics();
  cards.forEach((card, i) => {
    const img = card.querySelector('img');
    const ratio = (img.naturalHeight || 1000) / (img.naturalWidth || 1000);
    const colSpan = parseInt(getComputedStyle(card).gridColumnEnd.replace('span ', ''), 10) || 2;
    const colWidth = card.clientWidth || (gallery.clientWidth / 12) * colSpan;
    const targetHeight = Math.max(140, colWidth * ratio);
    const span = Math.max(18, Math.ceil((targetHeight + gap) / (row + gap)));
    card.style.gridRowEnd = `span ${span}`;
    card.style.setProperty('--delay', `${i * 42}ms`);
  });
};

const updateLayout = (layout) => {
  gallery.classList.remove('layout-masonry', 'layout-cinematic', 'layout-editorial');
  gallery.classList.add(layout);
  requestAnimationFrame(applyMasonry);
};

layoutButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setActive(layoutButtons, button);
    updateLayout(button.dataset.layout);
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
        entry.target.classList.add('is-visible');
      }
    });
  },
  { threshold: 0.15 }
);

cards.forEach((card, i) => {
  card.dataset.i = i;
  observer.observe(card);
  const img = card.querySelector('img');
  if (img.complete) {
    applyMasonry();
  } else {
    img.addEventListener('load', applyMasonry, { once: true });
  }
});

window.addEventListener('resize', () => {
  requestAnimationFrame(applyMasonry);
});

gallery.classList.add('fx-classic');
updateLayout('layout-masonry');
