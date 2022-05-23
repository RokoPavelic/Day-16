class Product {
  constructor(product) {
    this.name = product.name;
    this.price = product.price;
    this.quantity = product.quantity;

    this.element = document.createElement("div");
    this.element.className = "product";
    this.element.innerHTML =
      `<div>
    <div class="box"><p>Name:</p>` +
      product.name +
      `</div>
    <div class="box"><p>Price:</p>` +
      product.price +
      `</div>
      <div class="box">
      <p>quantity:</p>
      <p class="quantity"></p>
      </div>
      <button class="buy">Buy</button>
      <button class="sell">Sell</button>
    </div>`;

    const buyButton = this.element.querySelector(".buy");
    buyButton.innerText = "Buy";
    buyButton.addEventListener("click", () => this.sell());

    const addButton = this.element.querySelector(".sell");
    addButton.innerText = "Add";
    addButton.addEventListener("click", () => this.store(1));

    const quantity = this.element.querySelector(".quantity");
    quantity.innerText = product.quantity;
  }

  sell() {
    if (this.quantity > 0) {
      this.quantity--;
      const quantity = this.element.querySelector(".quantity");
      quantity.textContent = this.quantity;
    }
  }

  store(count) {
    this.quantity++;
    const quantity1 = document.createElement("p");
    quantity1.innerText = this.quantity;
    this.element.appendChild(quantity1);
  }
}

export default Product;
