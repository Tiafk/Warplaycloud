let btnSystem = document.querySelector('.filling .btn');
let system = document.querySelector('.system');
let systemBackBtn = document.querySelector('.system .container .arrow');

btnSystem.addEventListener('click', (e) => {
  let target = e.target;
  system.classList.add('visible');
  window.scrollTo(0,0);
  document.body.style.overflow = 'hidden';
  systemBackBtn.addEventListener ('click', (e) => {
    system.classList.remove('visible');
    document.body.style.overflow = 'auto';
  })
})
