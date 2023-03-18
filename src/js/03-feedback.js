import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput), 500);

const STORAGE_KEY = 'feedback-form-state';
const savedMessage = localStorage.getItem(STORAGE_KEY);
const parsedObj = JSON.parse(savedMessage);

   
populateTextarea();

function onFormSubmit(e) {
    e.preventDefault();
     e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(parsedObj);
}

function onFormInput(e) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
        email: form.elements.email.value,
        message: form.elements.message.value,
    }));
    parsedObj[e.target.name] = e.target.value;
}

function populateTextarea() {
     if (savedMessage) {
        form.elements.email.value = parsedObj.email || '';
        form.elements.message.value = parsedObj.message || '';
    }
} 
