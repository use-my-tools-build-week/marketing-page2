const siteContent = {
    "nav": {
        "nav-item-1": "Home",
        "nav-item-2": "Resume",
        "nav-item-3": "Portfolio",
        "nav-item-4": "Blog",
        "nav-item-5": "Contact Me",
        "img-src": "img/logo.png"
    }};
const navBar = document.querySelectorAll("a");
for (let i = 0; i <navBar.length; i++) {
    navBar[i].textContent = siteContent["nav"][`nav-item-${i + 1}`];
}
const toggleMenu = () => {
    menu.classList.toggle('menu')

}
const menuButton= document.querySelector('.menu-button')

menuButton.addEventListener('click', toggleMenu)

const menu = document.querySelector('.menu');
