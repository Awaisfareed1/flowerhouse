const signupBtn = document.querySelector("#signupBtn");
const signupForm = document.querySelector(".signupForm");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const emailvalid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const formErrorText = document.querySelector(".formErrorText");
signupBtn.classList = "btn btn-primary disabled";

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
});
email.addEventListener('keyup', () => {
    if (email.value.match(emailvalid)) {
        password.addEventListener("keyup", () => {
            if (password.value.length >= 8) {
                signupBtn.classList = "btn btn-primary";
                signupBtn.addEventListener('click', () => {
                    signupBtn.classList = "btn btn-primary disabled";
                    setTimeout(() => {
                        formErrorText.textContent = "You are Successfully LoggedIn";
                    }, 0);
                    setInterval(() => {
                        formErrorText.textContent = "";
                        email.value = "";
                        password.value = "";
                        location.replace("/plantsinfo/monti.html");
                    }, 3000);
                });
            } else {
                signupBtn.classList = "btn btn-primary disabled";
            }
        });
        signupBtn.classList = "btn btn-primary disabled";
    } else {
        signupBtn.classList = "btn btn-primary disabled";
    }
});

const passEye = document.querySelector(".passEye");
const eyeOpen = document.querySelector("#eyeOpen");
const eyeClose = document.querySelector("#eyeClose");

eyeOpen.addEventListener('click' , ()=>{
    eyeOpen.style.display = "none";
    eyeClose.style.display = "block";
    password.setAttribute("type" , "text");
})
eyeClose.addEventListener('click' , ()=>{
    eyeClose.style.display = "none";
    eyeOpen.style.display = "block";
    password.setAttribute("type" , "password");
})