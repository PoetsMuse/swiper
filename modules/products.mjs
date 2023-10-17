// Import the Product and Money classes
import Product from './Product.mjs';
import Money from './Money.mjs';

// Define an array of products
const products = [
  new Product('Product A', './images/1.jpg', new Money(25, 'USD')),
  new Product('Product B', './images/2.webp', new Money(30, 'USD')),
  new Product('Product C', './images/3.jpg', new Money(15, 'EUR')),
];

export default products;

