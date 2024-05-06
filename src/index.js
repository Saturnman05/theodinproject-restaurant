import Home from './Home';
import Menu from './Menu';
import About from './About';
import './style.css';

const h1 = document.createElement('h1');
h1.innerText = 'Restaurant';
document.body.appendChild(h1);

const content = document.createElement('div');
content.id = 'content';
document.body.appendChild(content);

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