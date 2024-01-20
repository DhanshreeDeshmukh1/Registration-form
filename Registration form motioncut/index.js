let slider = document.querySelector('.slider');
let login =  document.querySelector('.login');
let signup = document.querySelector('.signup');
let form = document.querySelector('.form-section');

signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    form.classList.add("form-section-move");
});
 
login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    form.classList.remove("form-section-move");
});


function validatePassword() {
  
    var passwordInput = document.getElementById('passwordInput');
    var passwordMessage = document.getElementById('passwordMessage');

    if (passwordInput.value.length >= 8) {
        passwordMessage.style.display = 'none'; 
        document.getElementById('loginform').submit();
    } else {
        passwordMessage.textContent = 'Password must have at least 8 characters.';
        passwordMessage.style.display = 'block'; 
        passwordMessage.style.color = '#523343'; 
        passwordMessage.style.fontSize= '15px';
    }
}
document.getElementById('loginform').addEventListener('submit', function (event) {
    event.preventDefault();
    validatePassword();
});
