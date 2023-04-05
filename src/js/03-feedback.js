import throttle from 'lodash.throttle'

// const LOCAL_KEY = 'feedback-form-state';
// let formData = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};

// form = document.querySelector('.feedback-form');

// form.addEventListener('input', throttle(storageFormData, 500));
// form.addEventListener('submit', onFormSubmit);

// reloadPage();

// function storageFormData(e) {
//   formData[e.target.name] = e.target.value.trim();
//   localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
// }

// function onFormSubmit(e) {
//   e.preventDefault();
//   //      if (refs.input.value === "" || refs.textarea.value === "") {
//   //          return alert(`Please fill in all the fields!`);
//   //      }
//   // or
//   // const { email, message } = e.currentTarget.elements;
//   // console.log({ email: email.value, message: message.value });
//   // or
//   console.log(formData);
//   e.currentTarget.reset();
//   localStorage.removeItem(LOCAL_KEY);
//   formData = {};
// }

// function reloadPage() {
//   if (formData) {
//     let { email, message } = form.elements;
//     email.value = formData.email || '';
//     message.value = formData.message || '';
//   }
// }


const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener(
  'input',
  throttle(e => {
    const objectToSave = { email: email.value, message: message.value };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(objectToSave));
  }, 500)
);

form.addEventListener('submit', event => {
    event.preventDefault();
    console.log({ email: email.value, message: message.value });
    form.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
});

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const storageData = load(LOCALSTORAGE_KEY);
if (storageData) {
  email.value = storageData.email;
  message.value = storageData.message;
}
