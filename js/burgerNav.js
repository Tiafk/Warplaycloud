let burgerBtn = document.querySelector('.slid .burger_menu');
let burgerNav = document.querySelector('.burger_nav');
let closeBtn = document.querySelector('.bottom .arrow');

burgerBtn.addEventListener('click', (e) => {
  burgerNav.classList.add('visible');
  window.scrollTo(0,0);
  document.body.style.overflow = 'hidden';
  closeBtn.addEventListener('click', (e) => {
    burgerNav.classList.remove('visible');
    document.body.style.overflow = 'auto';
  })
})