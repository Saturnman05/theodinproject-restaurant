import createParagraph from "./createParagraph";

function Home() {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    const h2 = document.createElement('h2');
    h2.innerText = 'Welcome to Pizza Mania Restaurnant.'
    content.appendChild(h2);

    const secondParagraph = createParagraph('Discover the authentic taste of Italy in every bite. At Delicious Flavor Pizzeria, we strive to bring you the freshest and most flavorful pizzas, prepared with the highest quality ingredients and cooked to perfection in our traditional stone oven. From our classic pepperoni pizzas to our unique gourmet creations, each slice is a culinary experience that will transport you to the streets of Naples.');
    content.appendChild(secondParagraph);

    const thirdParagraph = createParagraph('At Delicious Flavor Pizzeria, customer satisfaction is our top priority. From the moment you walk through the door to the last bite of your pizza, we strive to provide exceptional service and a memorable dining experience.');
    content.appendChild(thirdParagraph);

    const fourthParagraph = createParagraph('Come and join us today to enjoy an authentic Italian pizza experience!');
    content.appendChild(fourthParagraph);
}

export default Home;