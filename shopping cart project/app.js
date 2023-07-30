const cartBtn = document.querySelector(".cart-btn");
const backDrop = document.querySelector(".backdrop");
const cartModal = document.querySelector(".cart");
const closeModal = document.querySelector(".cart-item-confirm");

// cart items modal
showModalFunction = () => {
  backDrop.classList.remove("hidden");
  cartModal.classList.remove("hidden");
};
closeModalFunction = () => {
  backDrop.classList.add("hidden");
  cartModal.classList.add("hidden");
};

cartBtn.addEventListener("click", showModalFunction);
backDrop.addEventListener("click", closeModalFunction);
