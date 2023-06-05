const btnContacts = document.querySelector('.navigation .contact');
const contacts = document.querySelector('.contacts');
const contactsBackBtn = document.querySelector('.contacts .container .arrow');

btnContacts.addEventListener('click', () => {
  contacts.classList.add('visible');
  window.scrollTo(0,0);
  document.body.style.overflow = 'hidden';
  contactsBackBtn.addEventListener ('click', (e) => {
    contacts.classList.remove('visible');
    document.body.style.overflow = 'auto';
  })
})