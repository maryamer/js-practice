// Math

console.log(Number("34"));
console.log(Number.parseInt("34.5 rem"));
console.log(Number.parseFloat("34.5 rem"));

// rounding int:
console.log(Math.floor(23.1)); //lound to less
console.log(Math.floor(23.9)); //lound to less
console.log(Math.floor(-23.1)); // round to less

console.log(Math.ceil(23.1)); // round to more

console.log(Math.round(23.1)); // currect round
console.log(Math.round(23.5)); // currect round

console.log(Math.trunc(23.5)); // cut after integer

// random
console.log(Math.floor(Math.random() * 8 + 1)); //between 1-8

// min - max
function generate(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(generate(3, 7));

// rounding decimal
const num = 23.55688;
console.log(num.toFixed(2));
console.log(+num.toFixed(2));
