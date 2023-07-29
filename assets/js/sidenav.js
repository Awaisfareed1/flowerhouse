
const burger = document.querySelector('.menu .burger');
const nav = document.querySelector('.menu nav');

burger.addEventListener('click', () => {
    nav.classList.toggle('open');
    burger.classList.toggle('open');
});
