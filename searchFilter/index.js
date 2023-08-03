const searchInput = document.querySelector("#search");
const productList = document.querySelector(".products");
const btns = document.querySelectorAll(".btn");
let allProductsData = [];
const filters = {
  searchItems: "",
};
document.addEventListener("DOMContentLoaded", () => {
  axios
    .get("http://localhost:3000/items")
    .then((res) => {
      allProductsData = res.data;
      //   render products on DOM
      renderProducts(allProductsData, filters);
    })
    .catch((err) => console.log(err));
});
function renderProducts(_products, _filters) {
  const filteredProducts = _products.filter((p) => {
    return p.title.toLowerCase().includes(_filters.searchItems.toLowerCase());
  });
  productList.innerHTML = ``;
  //   render to dom
  filteredProducts.forEach((item) => {
    // create
    // content
    // append
    let productsDiv = document.createElement("div");
    productsDiv.classList.add("products");
    let product = `
    <div class="img-container">
      <img src=${item.img} alt="" />
    </div>
    <div class="product-desc">
      <p class="product-price">${item.price}</p>
      <p class="product-">${item.title}</p>
    </div>
  </div>`;
    productsDiv.innerHTML = product;
    productList.appendChild(productsDiv);
  });
}

searchInput.addEventListener("input", (e) => {
  filters.searchItems = e.target.value;
  renderProducts(allProductsData, filters);
});
// render filtered products on DOM

// filter based on groups
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const filter = e.target.dataset.filter;
    filters.searchItems = filter;
    console.log(filters.searchItems);
    renderProducts(allProductsData, filters);
  });
});
