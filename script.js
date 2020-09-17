const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');
const navLinks = document.getElementById('nav-links');

// Dark Mode Styles
function darkMode() {
    const mq = window.matchMedia( "(max-width: 1100px)" );
    // Applying styles to correct media query
    if (mq.matches) {
        navLinks.style.backgroundColor = 'rgb(0 0 0 / 90%)';
    } 
    nav.style.backgroundColor = 'rgb(0 0 0 / 90%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.childNodes[1].classList.replace('fa-sun','fa-moon');
    imageMode('dark')
}

// Light Mode Styles
function lightMode() {
    const mq = window.matchMedia( "(max-width: 1100px)" );
    // Applying styles to correct media query
    if (mq.matches) {
        navLinks.style.backgroundColor = 'rgb(255 255 255 / 90%)';
    }
    nav.style.backgroundColor = 'rgb(255 255 255 / 90%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.childNodes[1].classList.replace('fa-moon','fa-sun');
    imageMode('light');
}

function imageMode(mode) {
    image1.src = `img/undraw_proud_coder_${mode}.svg`;
    image2.src = `img/undraw_feeling_proud_${mode}.svg`;
    image3.src = `img/undraw_conceptual_idea_${mode}.svg`;
}

// Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme','dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'white');
        localStorage.setItem('theme','light');
        lightMode();
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

//Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if(currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(currentTheme === 'dark') {
        toggleSwitch.checked = true;
        darkMode();
    }
}