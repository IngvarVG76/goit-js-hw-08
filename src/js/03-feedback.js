import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('[name="email"]');
const messageInput = feedbackForm.querySelector('[name="message"]');

const THROTTLE_TIME = 1000;
const localStorageKey = 'feedback-form-state';


const saveFormState = throttle(() => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formState));
}, THROTTLE_TIME);


function loadFormState(evt) {
  const savedState = localStorage.getItem(localStorageKey);
  if (savedState) {
    const formState = JSON.parse(savedState);
    emailInput.value = formState.email;
    messageInput.value = formState.message;
  }
}


function onSubmitForm(evt) {
  evt.preventDefault();

  new FormData(evt.currentTarget).forEach((value, name) => {
      console.log(name, value);
    });
    
    localStorage.removeItem('feedback-form-state');
    feedbackForm.reset();
  }

window.addEventListener('load', loadFormState);
feedbackForm.addEventListener('input', saveFormState);
feedbackForm.addEventListener('submit', onSubmitForm);
