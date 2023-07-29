const signupBtn = document.querySelector("#signupBtn");
const signupForm = document.querySelector(".signupForm");
const email = document.querySelector("#email");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const emailvalid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const formErrorText = document.querySelector(".formErrorText");
signupBtn.classList = "btn btn-primary disabled";
let userData = 0;

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
});
email.addEventListener('keyup', () => {
    if (email.value.match(emailvalid)) {
        username.addEventListener("keyup", () => {
            if (username.value.length >= 8) {
                password.addEventListener('keyup', () => {
                    if (password.value.length >= 8) {
                        signupBtn.classList = "btn btn-primary";
                        signupBtn.addEventListener("click", () => {
                            userData = {
                                "email": email.value,
                                "username": username.value,
                                "password": password.value
                            }
                            signupBtn.classList = "btn btn-primary disabled";
                            setTimeout(() => {
                                formErrorText.textContent = "You are Successfully signedup";
                                // console.log(JSON.stringify(userData));
                            }, 0);
                            setInterval(() => {
                                formErrorText.textContent = "";
                                email.value = "";
                                password.value = "";
                                location.replace("/login.html");
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
        signupBtn.classList = "btn btn-primary disabled";
    } else {
        signupBtn.classList = "btn btn-primary disabled";
    }
});
