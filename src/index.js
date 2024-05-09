import Home from './Home';
import Menu from './Menu';
import About from './About';
import './style.css';
import Icon from './pizzaimg.jpg';

// Poner la imagen
const img = document.querySelector('#img');
const myIcon = new Image();
myIcon.src = Icon;
myIcon.alt = 'Pizza Image';
img.appendChild(myIcon);

// Desplegar le pagina home
Home();

// Ponerle las funciones a los botones
const btnHome = document.querySelector('#home');
btnHome.addEventListener('click', () => {
    Home();
});

const btnMenu = document.querySelector('#menu');
btnMenu.addEventListener('click', () => {
    Menu();
});

const btnAbout = document.querySelector('#about');
btnAbout.addEventListener('click', () => {
    About();
});