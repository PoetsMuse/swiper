import './modules/swiper.mjs'
import products from './modules/products.mjs';
import { newElement } from './modules/domHelpers.mjs';

// Function to create a product card element
function createProductCard(product) {
    const card = newElement('div', null, null, 'card', { style: 'width: 18rem;' });

    newElement('img', card, null, 'card-img-top', { src: product.image, alt: 'Product image' });

    const cardBody = newElement('div', card, null, 'card-body');

    newElement('h5', cardBody, product.name, 'card-title');
    newElement('p', cardBody, `Product price: ${product.price.amount} ${product.price.currency}`, 'card-text');

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
