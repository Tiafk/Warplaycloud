// let btnContacts = document.getElementById('contacts');
let btnContacts = document.querySelector('.navigation .contact');
let contacts = document.querySelector('.contacts');
let contactsBackBtn = document.querySelector('.contacts .container .arrow');

btnContacts.addEventListener('click', (e) => {
  let target = e.target;
  contacts.classList.add('visible');
  window.scrollTo(0,0);
  document.body.style.overflow = 'hidden';
  contactsBackBtn.addEventListener ('click', (e) => {
    contacts.classList.remove('visible');
    document.body.style.overflow = 'auto';
  })
})