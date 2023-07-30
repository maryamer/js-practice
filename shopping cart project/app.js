const cartBtn = document.querySelector(".cart-btn");
const backDrop = document.querySelector(".backdrop");
const cartModal = document.querySelector(".cart");
const closeModal = document.querySelector(".cart-item-confirm");

import { productsData } from "./products.js";
const cart = [];
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
    const productsDOM = document.querySelector(".products-center");

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
      let isInCart = cart.find((pId) => Number(pId) === Number(id));

      if (isInCart) {
        btn.textContent = "In cart";
        btn.disable = true;
      }
      btn.addEventListener("click", (event) => {
        console.log(event.target.dataset.id);
        // get product from products
        // add to cart
        // save cart too local storage
      });
    });
  }
}
// 3.storage
class Storage {
  static saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const products = new Products();
  const productsData = products.getProduct();
  const ui = new UI();
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
