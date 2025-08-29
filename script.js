let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirm-password');
let button = document.querySelector('button');
let msg = document.querySelector('#msg')

function validate(pass, confirmPass) {
    if (pass == confirmPass){
        return "Thank you!"
    } else {
        return "Passwords do not match."
    }
}

button.addEventListener('click', (e) => {
    e.preventDefault();
    msg.textContent = validate(password.value, confirmPassword.value);
})