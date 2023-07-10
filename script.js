const form = document.getElementById('form');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const errorMessage = document.getElementById('error-message');
const submitButton = document.getElementById('submit');
// Function to handle input event on password and confirm password fields

const handleInput = () => {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    if (password != "" && confirmPassword !="") {
        if (password===confirmPassword) {
            submitButton.disabled = false;
        }
        else {
            passwordInput.classList.add('invalid');
            confirmPasswordInput.classList.add('invalid');
            errorMessage.textContent = "*Password and Confirm password fields don't match";
            console.log("Passwords do not match");
            // Perform actions for password mismatch
        }
        console.log(password, confirmPassword);
    }
}
passwordInput.addEventListener('input', handleInput);
confirmPasswordInput.addEventListener('input', handleInput);