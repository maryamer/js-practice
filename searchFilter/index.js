const searchInput = document.querySelector("#search");
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
    })
    .catch((err) => console.log(err));
});
function renderProducts(_products, _filters) {
  const filteredProducts = _products.filter((p) => {
    console.log(_filters.searchItems);
    return p.title.toLowerCase().includes(_filters.searchItems.toLowerCase());
  });
  console.log(filteredProducts);
}

searchInput.addEventListener("input", (e) => {
  filters.searchItems = e.target.value;
  renderProducts(allProductsData, filters);
});
