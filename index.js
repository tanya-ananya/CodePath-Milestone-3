// TODO: Query for button with an id "theme-button"
let themeButton = document.getElementById("theme-button")

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
}

// TODO: Register a 'click' event listener for the theme button
themeButton.addEventListener("click", toggleDarkMode);

// Set toggleDarkMode as the callback function.