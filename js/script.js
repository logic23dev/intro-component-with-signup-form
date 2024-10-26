const form = document.querySelector('#form');
const firstName = document.querySelector('#fname');
const lastName = document.querySelector('#lname');
const email = document.querySelector('#email');
const password = document.querySelector('#pass');

form.addEventListener('submit', event => {
  event.preventDefault();

  validateForm();
  sendForm();
});

function validateForm() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  const emailRegExp =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  let isValid = true;

  if (firstNameValue === '') {
    showError(firstName, 'First Name cannot be empty');
    isValid = false;
  } else {
    hideError(firstName);
  }

  if (lastNameValue === '') {
    showError(lastName, 'Last Name cannot be empty');
    isValid = false;
  } else {
    hideError(lastName);
  }

  if (emailValue === '') {
    showError(email, 'Email cannot be empty');
    isValid = false;
  } else if (!emailRegExp.test(emailValue)) {
    showError(email, 'Looks like this is not an email');
    isValid = false;
  } else {
    hideError(email);
  }

  if (passwordValue === '') {
    showError(password, 'Password cannot be empty');
    isValid = false;
  } else {
    hideError(password);
  }

  return isValid;
}

function sendForm() {
  let result = validateForm();

  if (result) {
    form.submit();
    alert('Form submitted successfully!');
  }
}

function showError(input, message) {
  const errorIcon = input.parentElement.querySelector('.error-icon');
  const errorMessage = input.parentElement.querySelector('.error-message');
  errorIcon.style.opacity = 1;
  errorMessage.textContent = message;
  input.classList.add('error-border');
  input.setAttribute('aria-invalid', 'true');
}

function hideError(input) {
  const errorIcon = input.parentElement.querySelector('.error-icon');
  const errorMessage = input.parentElement.querySelector('.error-message');
  errorIcon.style.opacity = 0;
  errorMessage.textContent = '';
  input.classList.remove('error-border');
  input.setAttribute('aria-invalid', 'false');
}
