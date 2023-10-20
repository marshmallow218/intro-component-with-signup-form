const submit = document.querySelector('#btn');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');


submit.addEventListener('click', e => {
    e.preventDefault();
    
    validateInputs();
});

const setError = (element, message) => {
    const errorDisplay = element.nextElementSibling;
   
    errorDisplay.style.display = 'inlineBlock';
    errorDisplay.innerText = message;
    element.classList.add('error');
    element.classList.remove('success');
};

const setSuccess = element => {
    const errorDisplay = element.nextElementSibling;

    errorDisplay.style.display = 'hidden';
    element.classList.add('success');
    element.classList.remove('error');
};

const validateInputs = () => {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    
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
        setError(password, "Password cannot be too short");
    } else {
        setSuccess(password);
    }
};
