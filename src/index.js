import Home from './Home';

Home();

function component() {
    const btnHome = document.querySelector('#home');
    btnHome.addEventListener('click', () => {
        Home();
    });

    const btnMenu = document.querySelector('#menu');
    btnMenu.addEventListener('click', () => {
        // Hacer que aparezca la pagina de menu
    });

    const btnAbout = document.querySelector('#about');
    btnAbout.addEventListener('click', () => {
        // Hacer que aparezca la pagina de about
    });
}