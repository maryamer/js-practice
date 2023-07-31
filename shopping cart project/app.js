const cartBtn = document.querySelector(".cart-btn");
const backDrop = document.querySelector(".backdrop");
const cartModal = document.querySelector(".cart");
const closeModal = document.querySelector(".cart-item-confirm");
//
const productsDOM = document.querySelector(".products-center");
const cartTotal = document.querySelector(".cart-total");
const cartItems = document.querySelector(".cart-items");
const cartContent = document.querySelector(".cart-content");

import { productsData } from "./products.js";
let cart = [];
// 1. get products
class Products {
  getProduct() {
    // get from api end point
    return productsData;
  }
}
// 2. display products

class UI {
  displayProducts(products) {
    let result = ``;
    products.forEach((item) => {
      result += `          <section class="product">
            <div class="img-container">
              <img
                class="product-img"
                src=${item.imageUrl}
                alt="p -1"
              />
            </div>
            <div class="product-desc">
              <p class="product-title">${item.title}</p>
              <p class="product-price">${item.price}$</p>
            </div>
            <button class="add-to-cart" data-id=${item.id} >
            <i class="fas fa-shopping-cart"></i>
            add to cart</button>
          </section>`;
      productsDOM.innerHTML = result;
    });
  }
  getAddToCartBtns() {
    const addToBtn = document.querySelectorAll(".add-to-cart");
    const buttons = [...addToBtn];

    buttons.forEach((btn) => {
      const id = btn.dataset.id;
      // check if this product id is in cart or not
      let isInCart = cart.find((p) => Number(p.Id) === Number(id));

      if (isInCart) {
        btn.textContent = "In cart";
        btn.disable = true;
      }
      btn.addEventListener("click", (event) => {
        event.target.innerText = "In Cart";
        event.target.disabled = true; //** */
        // get product from products
        const addedProduct = { ...Storage.getProduct(id), quantity: 1 };
        console.log(addedProduct);

        // add to cart
        cart = [...cart, addedProduct];

        // save cart too local storage
        Storage.saveCart(cart);
        // update cart value
        this.setCartValue(cart);
        // add to cart item
        this.addCartItem(addedProduct);
        // get cart from local storage
      });
    });
  }
  setCartValue(cart) {
    // cartitems
    // cart total price
    let tempCartValue = 0;
    const totalPrice = cart.reduce((acc, curr) => {
      tempCartValue += curr.quantity;
      return (acc += curr.quantity * curr.price);
    }, 0);
    cartTotal.innerText = `total price: ${totalPrice.toFixed(2)} $`;
    cartItems.innerText = tempCartValue;
  }
  addCartItem(cartItem) {
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = ` 
    <img
      class="cart-item-img"
      src=${cartItem.imageUrl}
      alt=""
    />
    <div class="cart-item-desc">
      <p class="item-title">${cartItem.title}</p>
      <p>${cartItem.price * cartItem.quantity}</p>
    </div>
    <div class="flex-column-center cart-item-controller">
      <div>
        <i class="fas fa-angle-up"></i>
      </div>
      <div sclass="flex-row-center">${cartItem.quantity}</div>
      <div class>
        <i class="fas fa-angle-down"></i>
      </div>
    </div>
    <div class="flex-column-center">
      <i class="far fa-trash-alt"></i>
    </div>
  `;
    cartContent.appendChild(div);
  }
  setUpApp() {
    // get cart from
    cart = Storage.getCart() || [];
    console.log(cart);
    // add cart item
    cart.forEach((item) => this.addCartItem(item));
    // setValues: price +items
    this.setCartValue(cart);
  }
}

// 3.storage
class Storage {
  static saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
  }
  static getProduct(id) {
    const _products = JSON.parse(localStorage.getItem("products"));
    return _products.find((p) => p.id === Number(id));
  }
  static saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  static getCart() {
    const cart = JSON.parse(localStorage.getItem("cart"));
    return cart;
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const products = new Products();
  const productsData = products.getProduct();
  const ui = new UI();
  // set up : get cart and  set up application:
  ui.setUpApp();
  ui.displayProducts(productsData);
  ui.getAddToCartBtns();
  Storage.saveProducts(productsData);
});
// cart items modal
function showModalFunction() {
  backDrop.classList.remove("hidden");
  cartModal.classList.remove("hidden");
}
function closeModalFunction() {
  backDrop.classList.add("hidden");
  cartModal.classList.add("hidden");
}

cartBtn.addEventListener("click", showModalFunction);
backDrop.addEventListener("click", closeModalFunction);
closeModal.addEventListener("click", closeModalFunction);
