const siteContent = {
    "container":{

    }
}

const navBar = document.querySelectorAll("a");
for (let i = 0; i <navBar.length; i++) {
    navBar[i].textContent = siteContent["nav"][`nav-item-${i + 1}`];
}