// default parameters:

function calculator(prices, discount = 0.3) {
  let total = 0;
  console.log(prices);
  for (const price of prices) total += price;
  console.log(total * (1 - discount));
}
calculator([1, 2, 3, 4]);
