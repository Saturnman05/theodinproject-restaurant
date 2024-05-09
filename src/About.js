import createParagraph from "./createParagraph";

function About() {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    const h2 = document.createElement('h2');
    h2.innerText = 'About Us';
    content.appendChild(h2);

    const firstParagraph = createParagraph('At Pizza Mania, we are passionate about crafting unforgettable dining experiences. Our restaurant is a haven for food enthusiasts seeking exceptional flavors and impeccable service.')
    content.appendChild(firstParagraph);

    const secondParagraph = createParagraph('Our journey began with a simple vision: to create a culinary destination that celebrates the rich tapestry of flavors from around the world while honoring local ingredients and traditions. Every dish on our menu is thoughtfully curated by our team of talented chefs, who draw inspiration from global cuisines to create innovative and mouthwatering creations.');
    content.appendChild(secondParagraph);

    const thirdParagraph = createParagraph('But our commitment to excellence goes beyond just great food. We believe that dining is an experience to be savored, which is why we take great pride in providing warm and attentive service to each and every guest who walks through our doors. From the moment you arrive to the final bite of dessert, we strive to ensure that your time with us is nothing short of exceptional.');
    content.appendChild(thirdParagraph);

    const fourthParagraph = createParagraph("Whether you're joining us for a casual lunch, a romantic dinner, or a special celebration, we invite you to come and experience the magic of Pizza Mania. We look forward to welcoming you and creating memories that will last a lifetime.")
    content.appendChild(fourthParagraph);
}

export default About;