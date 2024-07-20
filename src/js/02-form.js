let formData = {
  email: '',
  message: '',
};
let { email, message } = formData;
let emailInput = document.querySelector('#email');
let messageInput = document.querySelector('#message');
let feedbackForm = document.querySelector('.feedback-form');

function saveInputData() {
  formData.email = emailInput.value;
  formData.message = messageInput.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
if (savedData) {
  emailInput.value = savedData.email || '';
  messageInput.value = savedData.message || '';
}
emailInput.addEventListener('input', saveInputData);
messageInput.addEventListener('input', saveInputData);
feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  if (emailInput.value.trim() === '' || messageInput.value.trim() === '') {
    alert('Fill all fields, please');
  } else {
    console.log(formData);
    localStorage.clear();

    emailInput.value = '';
    messageInput.value = '';
    formData.email = emailInput.value;
    formData.message = messageInput.value;
  }
});
