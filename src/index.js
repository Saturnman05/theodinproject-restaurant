import Home from './Home';
import Menu from './Menu';
import About from './About';
import './style.css';

Home();

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