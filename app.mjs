import './modules/swiper.mjs'
import products from './modules/products.mjs';

// Function to create a product card element
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.width = '18rem';

    const image = document.createElement('img');
    image.src = product.image;
    image.className = 'card-img-top';
    image.alt = 'Product image';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const title = document.createElement('h5');
    title.className = 'card-title';
    title.textContent = product.name;

    const price = document.createElement('p');
    price.className = 'card-text';
    price.textContent = `Product price: ${product.price.amount} ${product.price.currency}`;

    cardBody.appendChild(title);
    cardBody.appendChild(price);

    card.appendChild(image);
    card.appendChild(cardBody);

    return card;
}

// Function to render products in the DOM
function renderProducts() {
    const productContainers = document.getElementsByClassName('swiper-slide');

    products.forEach((product, index) => {
        const productCard = createProductCard(product);
        const containerIndex = index % productContainers.length; // Loop through containers
        productContainers[containerIndex].appendChild(productCard);
    });
}

// Call the renderProducts function when the DOM is ready
document.addEventListener('DOMContentLoaded', renderProducts);
