document.addEventListener('DOMContentLoaded', function() {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm_password');
    const passwordMatch = document.getElementById('passwordMatch');

    function validatePassword() {
        if (password.value !== confirmPassword.value) {
            passwordMatch.textContent = '* Passwords do not match';
            password.classList.add('highlight');
            confirmPassword.classList.add('highlight');
        } else {
            passwordMatch.textContent = '';
            password.classList.remove('highlight');
            confirmPassword.classList.remove('highlight');
        }

        if (password.value === '' && confirmPassword.value === '') {
            passwordMatch.textContent = '';
        }
    }

    password.onkeyup = validatePassword;
    confirmPassword.onkeyup = validatePassword;

});

