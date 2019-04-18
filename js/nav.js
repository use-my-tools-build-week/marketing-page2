const siteContent = {
    "nav": {
        "nav-item-1": "Home",
        "nav-item-2": "About",
        "nav-item-3": "Contact",
        // "nav-item-4": "About the Page",
        "nav-item-4": "Register",
        "nav-item-5": "Login",
        "nav-item-6": "Renters",
        "nav-item-7": "Borrowers"}}

const navBar = document.querySelectorAll("button");
for (let i = 0; i <navBar.length; i++) {
    navBar[i].textContent = siteContent["nav"][`nav-item-${i + 1}`];
}
const toggleMenu = () => {
    menu.classList.toggle('menu')

}
const menuButton= document.querySelector('.menu-button')

menuButton.addEventListener('click', toggleMenu)

const menu = document.querySelector('.menu');
