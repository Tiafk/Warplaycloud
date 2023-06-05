import './system.js';
import './contacts.js';
import './burgerNav.js';
import './registration.js';

if (document.querySelector('.registration, .burger_nav, .contacts').closest('active')) {
  document.body.style.overflow = 'hidden';
} else {
  document.body.style.overflow = 'auto';
}