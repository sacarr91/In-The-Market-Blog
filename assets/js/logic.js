let darkMode = (document.getElementById("flexSwitchCheckDefault").checked)

function changeColorMode() {
    if (darkMode) {
        document.getElementById("Stanley").outerHTML = '<html lang="en" id="Stanley" data-bs-theme="dark">';
    } else {
        document.getElementById("Stanley").outerHTML = '<html lang="en" id="Stanley">';
    }
}
document.getElementById("flexSwitchCheckDefault").addEventListener("click", changeColorMode)