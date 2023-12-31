const cartBtn = document.querySelector(".cart-btn");
const backDrop = document.querySelector(".backdrop");
const cartModal = document.querySelector(".cart");
const closeModal = document.querySelector(".cart-item-confirm");
//
const productsDOM = document.querySelector(".products-center");
const cartTotal = document.querySelector(".cart-total");
const cartItems = document.querySelector(".cart-items");
const cartContent = document.querySelector(".cart-content");
const clearCart = document.querySelector(".clear-cart");

import { productsData } from "./products.js";
let cart = [];
let buttonsDOM = [];
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
            add to cart</button>
          </section>`;
      productsDOM.innerHTML = result;
    });
  }
  getAddToCartBtns() {
    const addToBtn = [...document.querySelectorAll(".add-to-cart")];
    buttonsDOM = addToBtn;
    const buttons = [...addToBtn];

    buttons.forEach((btn) => {
      const id = btn.dataset.id;
      // check if this product id is in cart or not
      let isInCart = cart.find((p) => Number(p.id) === Number(id));

      if (isInCart) {
        btn.textContent = "In cart";
        btn.disabled = true;
        btn.style = "cursor : auto";
      }
      btn.addEventListener("click", (event) => {
        event.target.innerText = "In Cart";
        event.target.style = "cursor :auto";
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
      <p>${(cartItem.price * cartItem.quantity).toFixed(2)}</p>
    </div>
    <div class="flex-column-center cart-item-controller">

        <i class="fas fa-chevron-up" data-id=${cartItem.id}></i>

      <div sclass="flex-row-center">${cartItem.quantity}</div>

        <i class="fas fa-chevron-down" data-id=${cartItem.id}></i>

    </div>
    <div class="flex-column-center">
      <i class="far fa-trash-alt" data-id=${cartItem.id} ></i>
    </div>
  `;
    cartContent.appendChild(div);
  }
  setUpApp() {
    // get cart from
    cart = Storage.getCart();
    // add cart item
    cart.forEach((item) => this.addCartItem(item));
    // setValues: price +items
    this.setCartValue(cart);
  }
  cartLogic() {
    // clear cart
    clearCart.addEventListener("click", () => this.clearCart());
    cartContent.addEventListener("click", (event) => {
      const id = event.target.dataset.id;
      const targetClass = event.target.classList;
      if (targetClass.contains("fa-chevron-up")) {
        const addQuantity = event.target;
        // get item from cart
        const addedItem = cart.find((item) => Number(item.id) === Number(id));
        addedItem.quantity++;
        // update cart value
        this.setCartValue(cart);
        // save cart
        Storage.saveCart(cart);
        // update cart item in ui
        addQuantity.nextElementSibling.innerText = addedItem.quantity;
      } else if (targetClass.contains("fa-chevron-down")) {
        const subQuantity = event.target;
        const substractedItem = cart.find(
          (c) => c.id == subQuantity.dataset.id
        );
        if (substractedItem.quantity == 1) {
          const removeItem = event.target;
          const _removedItem = cart.find(
            (item) => item.id == removeItem.dataset.id
          );
          this.removeItem(_removedItem.id);
          Storage.saveCart(cart);

          cartContent.removeChild(removeItem.parentElement.parentElement);
        } else {
          substractedItem.quantity--;

          // update cart value
          this.setCartValue(cart);
          // save cart
          Storage.saveCart(cart);
          // update cart item in ui
          subQuantity.previousElementSibling.innerText =
            substractedItem.quantity;
        }
      } else if (targetClass.contains("fa-trash-alt")) {
        const removeItem = event.target;
        const _removedItem = cart.find(
          (item) => item.id == removeItem.dataset.id
        );
        this.removeItem(_removedItem.id);
        Storage.saveCart(cart);

        cartContent.removeChild(removeItem.parentElement.parentElement);
        // remove from cart item
        // call remove
      } else {
        null;
      }
    });
  }
  clearCart() {
    cart.forEach((item) => this.removeItem(item.id));
    console.log(cartContent.children);
    while (cartContent.children.length) {
      cartContent.removeChild(cartContent.children[0]);
    }
    closeModalFunction();
  }
  removeItem(id) {
    cart = cart.filter((item) => item.id !== Number(id));
    // total price and cart items
    this.setCartValue(cart);
    // update storage :
    Storage.saveCart(cart);
    // get add to carrt buttons => update text and disabled
    this.getSingleButton(id);
  }
  getSingleButton(id) {
    const button = buttonsDOM.find(
      (btn) => Number(btn.dataset.id) === Number(id)
    );
    if (button) {
      button.innerText = "add to cart";
      button.disabled = false;
    }
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
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
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
  ui.cartLogic();
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
