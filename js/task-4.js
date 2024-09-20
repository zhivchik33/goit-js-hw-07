const form = document.querySelector(".login-form");
form.addEventListener("submit", event => {
    event.preventDefault();
    const formData = {
        email: form.elements.email.value.trim(),
        password: form.elements.password.value.trim(),
    }
    if (formData.email && formData.password) {
        console.log(formData);
    } else {
        alert('All form fields must be filled in');
    }
    form.reset();
});
