const burgerBtn = document.querySelector('.slide_header .burger_menu');
const burgerNav = document.querySelector('.slide_header .burger_nav');
const closeBtn = document.querySelector('.burger_nav .bottom .arrow');

burgerBtn.addEventListener('click', (e) => {
  burgerNav.classList.add('active');
  window.scrollTo(0,0);
  document.body.style.overflow = 'hidden';
  closeBtn.addEventListener('click', (e) => {
    burgerNav.classList.remove('active');
    document.body.style.overflow = 'auto';
  })
})