// firstClass Function and Higher-Order Functions

// firstClass f
// High-Order f
// Callback f

// first-class function => functions are treated like any other variables

// higher-order function =>  functions that returns a function or take  other functions as arguments

// callback function => we passs as an argument to another function

// CB : call me back later

// // example // //

function sayHi() {
  return "hi";
}

function sayHello() {
  return "hello";
}
// HOF
function greeting(name, cb) {
  console.log("the function is calling is " + cb.name + cb());
}
greeting("maryam", sayHello);
greeting("maryam", function () {
  return "hi";
});

function newGreeting(str) {
  return function (name) {
    console.log(str + name);
  };
}
const fun = newGreeting("maryam")("zahra");

// or
const newGreeting2 = (str) => (name) => console.log(str + name);

const fun2 = newGreeting("maryam");
fun2("zahra");

// // HOF usage // //

function Plus(arr, num, cb) {
  const clone = [];
  for (let item of arr) clone.push(cb(item, num));
  console.log(clone);
}
Plus([2, 4, 8], 2, inc);
Plus([2, 4, 8], 2, dec);

function inc(item, num) {
  return item + num;
}
function dec(item, num) {
  return item - num;
}
function mul(item, num) {
  return item * num;
}
