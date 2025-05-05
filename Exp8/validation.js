function validateForm() {
    let isValid = true;
    const form = document.getElementById('registrationForm');

    // Name validation
    const name = document.getElementById('fullName');
    if (name.value.length < 3) {
        name.classList.add('is-invalid');
        isValid = false;
    } else {
        name.classList.remove('is-invalid');
    }

    // Email validation
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        email.classList.add('is-invalid');
        isValid = false;
    } else {
        email.classList.remove('is-invalid');
    }

    // Phone validation
    const phone = document.getElementById('phone');
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone.value)) {
        phone.classList.add('is-invalid');
        isValid = false;
    } else {
        phone.classList.remove('is-invalid');
    }

    // Course validation
    const course = document.getElementById('course');
    if (course.value === "") {
        course.classList.add('is-invalid');
        isValid = false;
    } else {
        course.classList.remove('is-invalid');
    }

    if (isValid) {
        alert('Registration successful!');
    }

    return false; // Prevent form submission for this example
}