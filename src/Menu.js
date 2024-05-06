function Menu() {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    const firstParagraph = document.createElement('p');
    firstParagraph.innerText = 'Welcome to the menu of the restaurant.';

    content.appendChild(firstParagraph);
}

export default Menu;