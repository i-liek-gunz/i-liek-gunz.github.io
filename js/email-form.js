var $emailForm = $('#email-signup'),
    $email = $emailForm.find('#input-email');

$emailForm.on('submit', function(ev) {
  ev.preventDefault();
  ev.returnValue = false;
  window.location.href = 'thanks.html';
});

var $contactForm = $('#contact-form'),
    $name = $contactForm.find('#input-name'),
    $emailAddress = $contactForm.find('#input-email'),
    $message = $contactForm.find('#input-message');

$contactForm.on('submit', function(ev) {
  ev.preventDefault();
  ev.returnValue = false;
  window.location.href = 'thanks.html';
});