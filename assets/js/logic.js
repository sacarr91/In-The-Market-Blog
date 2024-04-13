const toggle = document.getElementById("flexSwitchCheckDefault")
const headEl = document.getElementById("Stanley");
const logoImg = document.getElementById("logo");
const sunImg = document.getElementById("sun");
const moonImg = document.getElementById("moon");

function changeColorMode() {
    if (toggle.checked) {
        headEl.setAttribute("data-bs-theme", "dark");
        logoImg.setAttribute("src", "./assets/in the market logo-dk.png");
        sunImg.setAttribute("src", "./assets/sun-dk.png");
        moonImg.setAttribute("src", "./assets/moon-dk.png");
    } else {
        headEl.removeAttribute("data-bs-theme", "dark");
        logoImg.setAttribute("src", "./assets/in the market logo-lt.png");
        sunImg.setAttribute("src", "./assets/sun-lt.png");
        moonImg.setAttribute("src", "./assets/moon-lt.png");
    }
}

document.getElementById("flexSwitchCheckDefault").addEventListener("click", changeColorMode)
