const btn = document.querySelector('.btn');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');


const setError = (element, message) => {
    const inputBox = element.parentElement;
    const errorDisplay = inputBox.querySelector('.error-msg');
    const errorIcon = inputBox.querySelector('img');

    errorIcon.style.display = 'block';   
    errorDisplay.style.display = 'block';
    errorDisplay.innerText = message;
    element.classList.add('error');
    element.classList.remove('success');
};

const setSuccess = element => {
    const inputBox = element.parentElement;
    const errorDisplay = inputBox.querySelector('.error-msg');
    const errorIcon = inputBox.querySelector('img');

    errorIcon.style.display = 'none';
    errorDisplay.style.display = 'none';
    element.classList.add('success');
    element.classList.remove('error');
};

const validateInputs = () => {
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
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
    
    if (passwordValue.length === 0) {
        setError(password, "Password cannot be empty");
    } else if (passwordValue.length <= 8) {
        setError(password, "Password must be longer than 8 characters");
    } else {
        setSuccess(password);
    }
};


btn.addEventListener('click', e => {                
    e.preventDefault();
    
    validateInputs();                                                              
});                
    
