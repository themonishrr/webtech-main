function validateForm() {
    let valid = true;

    document.querySelectorAll('.error-message')
        .forEach(el => el.textContent = '');

    const name = document.getElementById('fullname').value;
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        valid = false;
    }

    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!email.match(emailPattern)) {
        document.getElementById('emailError').textContent = 'Enter a valid email address';
        valid = false;
    }

    const phone = document.getElementById('phone').value;
    const phonePattern = /^\d{10}$/;

    if (!phone.match(phonePattern)) {
        document.getElementById('phoneError').textContent = 'Enter a valid 10 digit phone number';
        valid = false;
    }

    const password = document.getElementById('password').value;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!password.match(passwordPattern)) {
        document.getElementById('passwordError').textContent = 'Password must contain at least 6 characters, including uppercase, lowercase and numbers';
        valid = false;
    }

    const confirmPassword = document.getElementById('confirm-password').value;
    if (confirmPassword !== password) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
        valid = false;
    }

    const dob = document.getElementById('dob').value;
    const dobDate = new Date(dob);
    const age = new Date().getFullYear() - dobDate.getFullYear();

    if (age < 18) {
        document.getElementById('dobError').textContent = 'You must be at least 18 years old';
        valid = false;
    }

    return valid;
}