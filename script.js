const gallery = document.getElementById('gallery');
const cards = [...document.querySelectorAll('.card')];
const layoutButtons = document.querySelectorAll('[data-layout]');
const fxButtons = document.querySelectorAll('[data-effect]');

const FALLBACK_SVG = encodeURIComponent(`
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 900'>
  <defs>
    <linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>
      <stop offset='0' stop-color='#2f3646'/>
      <stop offset='1' stop-color='#1c202b'/>
    </linearGradient>
  </defs>
  <rect width='1200' height='900' fill='url(#g)'/>
  <text x='50%' y='48%' text-anchor='middle' fill='#d6ddeb' font-size='56' font-family='Arial, sans-serif'>Da Vinci Gallery</text>
  <text x='50%' y='56%' text-anchor='middle' fill='#95a0b4' font-size='30' font-family='Arial, sans-serif'>Image unavailable · fallback rendered</text>
</svg>
`);
const FALLBACK_DATA_URI = `data:image/svg+xml;charset=UTF-8,${FALLBACK_SVG}`;

const setActive = (buttons, next) => {
  buttons.forEach((button) => {
    button.classList.toggle('is-active', button === next);
  });
};

const getGridMetrics = () => {
  const style = getComputedStyle(gallery);
  return {
    row: parseFloat(style.gridAutoRows) || 8,
    gap: parseFloat(style.gap) || 0
  };
};

const applyMasonry = () => {
  const { row, gap } = getGridMetrics();

  cards.forEach((card, i) => {
    const img = card.querySelector('img');
    const ratio = (img.naturalHeight || 900) / (img.naturalWidth || 1200);
    const colSpan = parseInt(getComputedStyle(card).gridColumnEnd.replace('span ', ''), 10) || 2;
    const fallbackWidth = gallery.clientWidth ? (gallery.clientWidth / 12) * colSpan : 220;
    const colWidth = card.clientWidth || fallbackWidth;
    const targetHeight = Math.max(140, colWidth * ratio);
    const span = Math.max(18, Math.ceil((targetHeight + gap) / (row + gap)));

    card.style.gridRowEnd = `span ${span}`;
    card.style.setProperty('--delay', `${i * 36}ms`);
  });
};

const updateLayout = (layout) => {
  gallery.classList.remove('layout-masonry', 'layout-cinematic', 'layout-editorial');
  gallery.classList.add(layout);
  requestAnimationFrame(applyMasonry);
};

const markLoaded = (card) => {
  card.classList.add('is-loaded');
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
  const onLoad = () => markLoaded(card);

  img.addEventListener('load', onLoad, { once: true });
  img.addEventListener('error', () => {
    img.src = FALLBACK_DATA_URI;
  }, { once: true });

  if (img.complete && img.naturalWidth > 0) {
    markLoaded(card);
  }
});

window.addEventListener('resize', () => {
  requestAnimationFrame(applyMasonry);
});

gallery.classList.add('fx-classic');
updateLayout('layout-masonry');
