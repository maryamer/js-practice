// async JavaScript
// js is async
// sync

// sync => single thread(just one task or work in a moment)=> ?(event loop)
// muti task => NOK
// non-blocking => async js => node js => req !!

// function greeting() {
//   console.log("this is greeting log");
// }
// console.log("first log");
// greeting();
// console.log("secound log");

console.log("first log");

function greeting() {
  console.log("this is greeting log");
}
setTimeout(() => {
  greeting();
}, 1000);
// blocking
// non-blocking

console.log("secound log");
