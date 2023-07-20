// * Closure: combination of a function bundled with its lexical environment

// count number of login requests
// count number of signup requests

//! persistency : پایداری اطلاعات

function loginCount() {
  let counter = 0;
  counter++;
  return counter;
}
function signup() {
  let counter = 0;
  counter++;
  return counter;
}
// console.log(loginCount());
// console.log(loginCount());

// console.log(signup());
// console.log(signup());

// ENCAPSULATING : امنیت اطلاعات

// Closure: combination of a function bundled with its lexical environment

function CounterReq() {
  let counter = 0;
  return function inner() {
    counter++;
    return counter;
  };
}
const loginReqs = CounterReq();
console.log(loginReqs());
console.log(loginReqs());

const signUpReqs = CounterReq();
console.log(signUpReqs());
console.log(signUpReqs());
console.log(signUpReqs());
