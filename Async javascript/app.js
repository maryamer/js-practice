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
// 1. login user => email
// 2. email => enrolled courses
// 3. course title=> episode

// callback
// promise
// async await

function loginUser(email, pass, callback) {
  setTimeout(() => {
    // return { userEmail: email, userPass: pass };
    callback({ userEmail: email, userPass: pass });
  }, 2000);
}
function enrolledCouses(email, callback) {
  setTimeout(() => {
    callback(["react", "node", "next"]);
  }, 1500);
}
function getEpisode(courseTitle, callback) {
  setTimeout(() => {
    callback(["E01", "E02", "E03"]);
  }, 1000);
}

loginUser("myEMAIL", "mypassword", (userData) => {
  console.log(userData);
  enrolledCouses(userData.email, (courses) => {
    console.log(courses);
    getEpisode(courses[0], (episodes) => {
      console.log(episodes);
    });
  });
});
[].map(() => {});

// callback hell

//
//
//

// promise:

// create
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // if(x){
    // resolve({email:'maryamemail'})
    // }else{
    reject(new Error("password is not defined"));
    // }
  }, 1000);
});

// consume
promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err.message);
  });
