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

// function loginUser(email, pass, callback) {
//   setTimeout(() => {
//     // return { userEmail: email, userPass: pass };
//     callback({ userEmail: email, userPass: pass });
//   }, 2000);
// }
// function enrolledCouses(email, callback) {
//   setTimeout(() => {
//     callback(["react", "node", "next"]);
//   }, 1500);
// }
// function getEpisode(courseTitle, callback) {
//   setTimeout(() => {
//     callback(["E01", "E02", "E03"]);
//   }, 1000);
// }

// loginUser("myEMAIL", "mypassword", (userData) => {
//   console.log(userData);
//   enrolledCouses(userData.email, (courses) => {
//     console.log(courses);
//     getEpisode(courses[0], (episodes) => {
//       console.log(episodes);
//     });
//   });
// });
// [].map(() => {});

// // callback hell

// //
// //
// //

// // promise:

// // create
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // if(x){
//     // resolve({email:'maryamemail'})
//     // }else{
//     reject(new Error("password is not defined"));
//     // }
//   }, 1000);
// });

// // consume
// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// function loginUser(email, pass) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       // return { userEmail: email, userPass: pass };
//       res({ email: "maryamemail" });
//     }, 2000);
//   });
// }
// function enrolledCouses(email) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(["react", "node", "next"]);
//     }, 1500);
//   });
// }
// function getEpisode(courseTitle) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(["E01", "E02", "E03"]);
//     }, 1500);
//   });
// }

// // loginUser("maryamemail", "maryampass")
// //   .then((data) => {
// //     return enrolledCouses(data.email);
// //   })
// //   .then((courses) => {
// //     console.log(courses);
// //     return getEpisode(courses[0]);
// //   })
// //   .then((ep) => {
// //     console.log(ep);
// //   })
// //   .catch((err) => {
// //     console.log(err.message);
// //   });

// loginUser("maryamemail", "maryampass")
//   .then((data) => enrolledCouses(data.email))
//   .then((courses) => getEpisode(courses[0]))
//   .then((ep) => console.log(ep))
//   .catch((err) => console.log(err.message));

//
//
// consume promises at the same time
// not conected request at the same time
// const getPosts = new Promise((res, rej) => {
//   setTimeout(() => {
//     res(["post 1", "post 2", "post 3"]);
//   }, 1500);
// });
// const getCourses = new Promise((res, rej) => {
//   setTimeout(() => {
//     res(["course 1", "course 2", "course 3"]);
//   }, 1000);
// });

// Promise.all([getCourses, getPosts])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

//
//
//

// async await

function loginUser(email, pass) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      // return { userEmail: email, userPass: pass };
      res({ email: "maryamemail" });
    }, 2000);
  });
}
function enrolledCouses(email) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(["react", "node", "next"]);
    }, 1500);
  });
}
function getEpisodes(courseTitle) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(["E01", "E02", "E03"]);
    }, 1500);
  });
}

// async function displayEpisodes() {
//   const user = await loginUser("maryamemail");
//   // console.log(user);
//   const courses = await enrolledCouses(user.email);
//   // console.log(courses);
//   const episodes = await getEpisodes(courses[0]);
//   console.log(episodes);
//   return episodes;
// }

displayEpisodes = async () => {
  const user = await loginUser("maryamemail");
  // console.log(user);
  const courses = await enrolledCouses(user.email);
  // console.log(courses);
  const episodes = await getEpisodes(courses[0]);
  // console.log(episodes);
  return episodes;
};
displayEpisodes();

// IIFE:
(async () => {
  // console.log(await displayEpisodes());
})();

//
//
//

//  //event loop in JavaScript and node.js
// call stack - event loop - Web Api
// search kon js event loop visualized

console.log("first log");
setTimeout(() => {
  console.log("callback after 2sec");
}, 1000);
console.log("secound log");

// javascrript engine : call stack +memory heap
// heap => function or variable define
// call stack => execute or call function

// web Api: global object => window
// setTimeOut()
// location
// fetch
// loalStorage
// navigator
// DOM Api => querySelector,...

// window.setTimeout()
