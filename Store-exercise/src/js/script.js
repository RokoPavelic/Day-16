import Product from "./Product";

const products = [
  { name: "iPhone 8 128GB", price: 14990, quantity: 25 },
  { name: "iPhone 12 256GB", price: 24990, quantity: 20 },
  { name: "iPhone 5 128GB", price: 14990, quantity: 25 },
  { name: "iPhone 7 128GB", price: 14990, quantity: 25 },
  { name: "iPhone 11 128GB", price: 14990, quantity: 25 },
  { name: "iPhone 455 128GB", price: 14990, quantity: 25 },
  { name: "iPhone 56 128GB", price: 14990, quantity: 25 },
];
document.addEventListener("DOMContentLoaded", () => {
  const storeElement = document.querySelector(".store");

  products.forEach((item, i) => {
    const product = new Product(item);
    storeElement.appendChild(product.element);
  });
});
