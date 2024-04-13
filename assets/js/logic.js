const toggle = document.getElementById("flexSwitchCheckDefault")

function changeColorMode() {
    if (toggle.checked) {
        document.getElementById("Stanley").setAttribute("data-bs-theme", "dark");
    } else {
        document.getElementById("Stanley").removeAttribute("data-bs-theme", "dark");
    }
}

document.getElementById("flexSwitchCheckDefault").addEventListener("click", changeColorMode)
