const discount = (price) => {
  const discountPerPrice = 10;
  const minPrice = 100;
  const discountSteps = 3;
  const maxDiscount = 25;
  let discount =
    Math.floor((price - minPrice) / discountPerPrice) * discountSteps;
  if (price < minPrice + discountPerPrice) {
    return console.log("no discount");
  }
  if (discount > maxDiscount) {
    return console.log(maxDiscount);
  }
  console.log(discount);
};
discount(100);
