
let icon = document.querySelector('.icon');
icon.addEventListener('click', (e) => {
    e.preventDefault();
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
    myFunction();
})
window.onscroll = function () { mynewFunction() };

var navbar = document.getElementById("myTopnav");
var sticky = navbar.offsetTop;

function mynewFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
const plantSearch = document.querySelector("#plantSearch");
const cardTitles = document.querySelectorAll("#shop .card-title");

plantSearch.addEventListener("keyup", (e) => {
    const term = e.target.value.toLowerCase();
    const cards = document.querySelectorAll("#shop .card");
    Array.from(cards).forEach((card) => {
        const cardContent = card.querySelector('.card-title').textContent;
        if (cardContent.toLowerCase().indexOf(term) != -1) {
            card.style.display = "block";
            card.parentNode.style.display = "block";
            card.parentNode.style.transition = "all 2s";
        }else{
            card.style.display = "none";
            card.parentNode.style.display = "none";
            card.parentNode.style.transition = "all 2s";
        }
    })
})
