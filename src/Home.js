function Home() {
    const content = document.querySelector('#content');

    const firstParagraph = document.createElement('p');
    firstParagraph.innerText = 'Welcome to the restaurant.';

    content.appendChild(firstParagraph);
}

export default Home;