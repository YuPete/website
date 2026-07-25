document.querySelectorAll('.project-card, .nav a, .mail-card').forEach((item) => {
  item.addEventListener('pointerdown', () => item.classList.add('pressed'));
  item.addEventListener('pointerup', () => item.classList.remove('pressed'));
  item.addEventListener('pointerleave', () => item.classList.remove('pressed'));
});
