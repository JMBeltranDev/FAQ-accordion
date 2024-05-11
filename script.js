'use strict';

const faqContent = document.querySelector('.faq-wrapper');

const show = function (target) {
  target.closest('.item').querySelector('.answer').classList.toggle('hidden');
  target
    .closest('.item')
    .querySelectorAll('.icon')
    .forEach(el => {
      el.classList.toggle('hidden');
    });
};

// Event Delegation

faqContent.addEventListener('click', function (e) {
  let target = e.target;

  if (target.classList.contains('ask')) {
    show(target);
  }
  if (target.classList.contains('icon')) {
    show(target);
  }
});
