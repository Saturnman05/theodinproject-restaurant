function createUl(...texts) {
    const ul = document.createElement('ul');
    for (const text of texts) {
        const li = document.createElement('li');
        li.innerText = text;
        ul.appendChild(li);
    }
    return ul;
}

function createMenu(h2Text, ...texts) {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.innerText = h2Text;
    div.appendChild(h2);

    const ul = createUl(...texts);
    div.appendChild(ul);

    return div;
}

function Menu() {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    const h2 = document.createElement('h2');
    h2.innerText = 'Menu:';
    content.appendChild(h2);

    const div1 = createMenu(
        'Classic Pizzas',
        'Margherita: Tomato sauce, fresh mozzarella, fresh basil.', 
        'Pepperoni: Tomato sauce, mozzarella, pepperoni.', 
        'Hawaiian: Tomato sauce, mozzarella, ham, pineapple.',
    )
    content.appendChild(div1);

    const div2 = createMenu(
        'Gourmet Pizzas',
        'Prosciutto and Arugula: Tomato sauce, mozzarella, prosciutto, arugula, parmesan cheese.',
        'Four Cheese: Mozzarella, blue cheese, goat cheese, parmesan cheese, white sauce.',
        'Vegetarian: Tomato sauce, mozzarella, mushrooms, bell peppers, red onion, black olives, artichokes.',
    );
    content.appendChild(div2);

    const div3 = createMenu(
        'Appetizers',
        'Garlic Breadsticks with Marinara Sauce.',
        'Tomato and Basil Bruschetta.',
        'Fried Calamari with Lemon Aioli.',
    );
    content.appendChild(div3);

    const div4 = createMenu(
        'Salads',
        'Traditional Caesar: Romaine lettuce, croutons, parmesan cheese, Caesar dressing.',
        'Mediterranean: Mixed greens, cherry tomatoes, cucumber, kalamata olives, feta cheese, herb vinaigrette dressing.',
    );
    content.appendChild(div4);

    const div5 = createMenu(
        'Desserts',
        'Homemade Tiramisu.',
        'Ricotta and Chocolate-filled Cannoli.',
        'Italian Gelato (Variety of flavors available).',
    )
    content.appendChild(div5);
}

export default Menu;