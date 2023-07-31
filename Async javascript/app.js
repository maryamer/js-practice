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

// console.log("first log");

// function greeting() {
//   console.log("this is greeting log");
// }
// setTimeout(() => {
//   greeting();
// }, 1000);
// // blocking
// // non-blocking

// console.log("secound log");

//
//
//

// callback=> call back later
// 1. login user
// 2. enrolled courses
// 3. episode

// callback
// promise
// async await

function loginUser(email, pass, callback) {
  setTimeout(() => {
    // return { userEmail: email, userPass: pass };
    callback({ userEmail: email, userPass: pass });
  }, 2000);
}
loginUser("myEMAIL", "mypassword", (userData) => {
  console.log(userData);
});
[].map(() => {});
