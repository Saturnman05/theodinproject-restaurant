function About() {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    const firstParagraph = document.createElement('p');
    firstParagraph.innerText = 'Welcome to the About Page.';

    content.appendChild(firstParagraph);
}

export default About;