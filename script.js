const submitBtn = document.getElementById('submitBtn');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');
const phoneError = document.getElementById('phoneError');
const confirmPassError = document.getElementById('confirmPassError');
const form = document.querySelector('form'); 

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (validateName() && validateEmail() && validatePhoneNumber() && validatePassword() && validateConfirmPassword()) {
        alert("Form Submitted Successfully");
        resetForm();
    }
});

function validateName() {
    let name = document.getElementById('name').value.trim();

    if (name.length === 0) {
        nameError.textContent = "Name is required";
        return false;
    }

    if (name.charAt(0) !== name.charAt(0).toUpperCase()) {
        nameError.textContent = "Name should start with a capital letter";
        return false;
    }

    if (name.length < 5) {
        nameError.textContent = "Name should have at least 5 characters";
        return false;
    }

    nameError.textContent = "";
    return true;
}

function validateEmail() {
    let email = document.getElementById('email').value.trim();

    if (email.length === 0) {
        emailError.textContent = "Email is required";
        return false;
    }

    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        emailError.textContent = "Enter a valid email";
        return false;
    }

    emailError.textContent = "";
    return true;
}

function validatePhoneNumber() {
    let phoneNumber = document.getElementById('phoneNumber').value.trim();

    if (phoneNumber.length === 0) {
        phoneError.textContent = "Phone number is required";
        return false;
    }

    if (!phoneNumber.match(/^\d{10}$/)) {
        phoneError.textContent = "Enter a valid 10-digit phone number";
        return false;
    }

    if (phoneNumber === '123456789') {
        phoneError.textContent = "Phone number cannot be 123456789";
        return false;
    }

    phoneError.textContent = "";
    return true;
}

function validatePassword() {
    let password = document.getElementById('password').value;
    let name = document.getElementById('name').value.trim();

    if (password.length === 0) {
        passError.textContent = "Password is required";
        return false;
    }

    if (password.length < 8) {
        passError.textContent = "Password should be at least 8 characters long";
        return false;
    }

    if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)) {
        passError.textContent = "Password should contain 1 Uppercase, 1 Lowercase, 1 Digit & 1 Special Character";
        return false;
    }

    if (password.toLowerCase() === 'password') {
        passError.textContent = "Password cannot be 'password'";
        return false;
    }

    if (password.toLowerCase() === name.toLowerCase()) {
        passError.textContent = "Password cannot be the same as the user's name";
        return false;
    }

    passError.textContent = "";
    return true;
}

function validateConfirmPassword() {
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    if (confirmPassword.length === 0) {
        confirmPassError.textContent = "Confirm password is required";
        return false;
    }

    if (password !== confirmPassword) {
        confirmPassError.textContent = "Passwords do not match";
        return false;
    }

    confirmPassError.textContent = "";
    return true;
}

function resetForm() {
    form.reset();
    nameError.textContent = "";
    emailError.textContent = "";
    passError.textContent = "";
    phoneError.textContent = "";
    confirmPassError.textContent = "";
}