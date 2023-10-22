const form = document.querySelector('form');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');


const setError = (input, message) => {
    const inputBox = input.parentElement;
    const errorIcon = inputBox.querySelector('img');
    const errorMsg = inputBox.querySelector('span');
    
    errorIcon.style.display = 'block';
    errorMsg.innerText = message;
    errorMsg.style.display = 'block';
    input.classList.add('error');
    input.classList.remove('success')
}

const setSuccess = input => {
    const inputBox = input.parentElement;
    const errorIcon = inputBox.querySelector('img');
    const errorMsg = inputBox.querySelector('span');
    
    errorIcon.style.display = 'none';     
    errorMsg.style.display = 'none';
    input.classList.add('success');
    input.classList.remove('error')
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    validateInputs();
})


function validateInputs() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value;
    const passwordValue = password.value;
    
    if (firstNameValue === '') {
        setError(firstName, "First Name cannot be empty");
    } else {
        setSuccess(firstName);
    }
    
    if (lastNameValue === '') {
        setError(lastName, "Last Name cannot be empty");
    } else {
        setSuccess(lastName);
    }
    
    if (emailValue === '') {
        setError(email, "Looks like this is not an email");
    } else {
        setSuccess(email);
    }
    
    if (passwordValue.length <= 0) {
        setError(password, "Password cannot be empty");
    } else if (passwordValue.length < 8) {
        setError(password, "Password cannot be less than 8 characters");
    } else {
        setSuccess(password);
    }
}

