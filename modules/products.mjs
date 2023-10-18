// Import the Product and Money classes
import Product from './Product.mjs';
import Money from './Money.mjs';

// Define an array of products
const products = [
  new Product('Product 1', './images/1.jpg', new Money(25, 'USD')),
  new Product('Product 2', './images/2.webp', new Money(30, 'USD')),
  new Product('Product 3', './images/3.jpg', new Money(15, 'EUR')),
  new Product('Product 4', './images/4.webp', new Money(40, 'USD')),
  new Product('Product 5', './images/5.webp', new Money(35, 'EUR')),
];

export default products;

