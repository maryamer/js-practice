// // function Declaration // //
//hoisting => we can call function before itself in function expression
// methds in class => declaration
add1(1, 2);
function add1(a, b) {
  console.log(a + b);
  return a + b;
}
add1(1, 2);

// //function Expression // //
// we can not call function before itself in function expression
// handlers in component => expression

// add(1, 2); // xxx
const add = function (a, b) {
  console.log(a + b);
  return a + b;
};
add(1, 2);

// // // arrow function ()=>{}  === function expression // // //

// function calculateDiscount(disc, price) {
//   const total = price * (1 - disc / 100);
//   console.log(total);
// }

const calculateDiscount = (disc, price) => {
  return price * (1 - disc / 100);
};
const calculateDiscount2 = (disc, price) => price * (1 - disc / 100);

calculateDiscount(5, 100);
