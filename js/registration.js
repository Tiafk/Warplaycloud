let BtnRegistration = document.querySelector('.download');
let registration = document.querySelector('.registration');
let closeBtnRegistr = document.querySelector('.registration .container .arrow');

BtnRegistration.addEventListener('click', (e) => {
  registration.classList.add('active');
  window.scrollTo(0,0);
  document.body.style.overflow = 'hidden';
  closeBtnRegistr.addEventListener('click', (e) => {
    registration.classList.remove('active');
    document.body.style.overflow = 'auto';
  });
});

let title = document.querySelector('.registration .title');
let toCome = document.querySelectorAll('.title .to_come');

// title.addEventListener('click', (e) => {
  // let target = e.target;
  // if (target == document.querySelector('.registration .title .to_come')) {
  //   title.classList.toggle('revers');
  // }
// })

title.addEventListener('click', (t) => {
  title.classList.toggle('revers');
  toCome.forEach((elem) => {
    elem.addEventListener('click', () => {

    })
  })
})