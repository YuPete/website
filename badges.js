window.showBadgeBlurb = (button) => {
  document.querySelectorAll('.badge-button.is-caption-open').forEach((badge) => badge.classList.remove('is-caption-open'));
  button.classList.remove('is-wiggling');
  void button.offsetWidth;
  button.classList.add('is-wiggling');
  if (button.dataset.blurb) button.classList.add('is-caption-open');
};

document.querySelectorAll('.badge-button').forEach((button) => {
  button.addEventListener('click', () => {
    if (!button.hasAttribute('onclick')) window.showBadgeBlurb(button);
  });

  button.addEventListener('animationend', () => button.classList.remove('is-wiggling'));
});
