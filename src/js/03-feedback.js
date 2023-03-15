import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector("textarea");

form.addEventListener('submit', onFormSubmit);
textarea.addEventListener('input', throttle(onTextareaInput), 500);
   
populateTextarea();

function onFormSubmit(e) {
    e.preventDefault();
     e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(e) {
    const message = e.target.value;
    console.log(message)
    localStorage.setItem(STORAGE_KEY, message);
}

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);

    if (savedMessage) {
        console.log(savedMessage);
        textarea.value = savedMessage;
    }
} 
