// Math

// console.log(Number("34"));
// console.log(Number.parseInt("34.5 rem"));
// console.log(Number.parseFloat("34.5 rem"));

// // rounding int:
// console.log(Math.floor(23.1)); //lound to less
// console.log(Math.floor(23.9)); //lound to less
// console.log(Math.floor(-23.1)); // round to less

// console.log(Math.ceil(23.1)); // round to more

// console.log(Math.round(23.1)); // currect round
// console.log(Math.round(23.5)); // currect round

// console.log(Math.trunc(23.5)); // cut after integer

// // random
// console.log(Math.floor(Math.random() * 8 + 1)); //between 1-8

// // min - max
// function generate(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// console.log(generate(3, 7));

// // rounding decimal
// const num = 23.55688;
// console.log(num.toFixed(2));
// console.log(+num.toFixed(2));

//

//

//

//

// // date and basic methods // //
// const now = new Date();
// console.log(now);
// const yr = now.getFullYear();
// const month = now.getMonth();
// const date = now.getDate(); //1-30
// const day = now.getDay(); // 0-6
// console.log(day);

// console.log(now.getTime()); // 1 jun 1970 (timestamp) //** **/
// console.log(Date.now()); // 1 jun 1970 (timestamp)
// console.log(Number(now)); // 1 jun 1970 (timestamp)
// console.log(+now); // 1 jun 1970 (timestamp)

// console.log(now.toDateString());
// console.log(now.toISOString()); //** **/
// console.log(now.toLocaleDateString("fa")); //** **/
// console.log(now.toLocaleString("fa"));
// console.log(now.toLocaleString());

//

//

//

//

// // // calculate date diffrence challenge // //
// // end - start => diffrence between days
// const daysDiff = (start, end) => {
//   const milliSec = new Date(end) - new Date(start);
//   console.log(new Date(end) - new Date(start));
//   const days = Math.floor(milliSec / (24 * 60 * 60 * 1000));
//   console.log(days);
//   return days;
// };
// daysDiff("7/22/2023", "7/26/2023");
// daysDiff("2023-07-22T18:10:07.080Z", "2023-08-20T18:10:07.080Z");
// // date-fns library

//

//

//

//

// // sort note based on date // //
// const notes = [
//   { id: 1, title: " Note 1", createdAt: "2023-08-20T18:10:07.080Z" },
//   { id: 2, title: " Note 2", createdAt: "2021-08-20T18:10:07.080Z" },
//   { id: 3, title: " Note 3", createdAt: "2020-08-20T18:10:07.080Z" },
//   { id: 4, title: " Note 4", createdAt: "2022-08-20T18:10:07.080Z" },
// ];
// // oldest ,newest
// // latest,earliest
// const sort = (sortBy = "latest", notes) => {
//   // descending
//   return [...notes].sort((a, b) => {
//     const dateA = new Date(a.createdAt).getTime();
//     const dateB = new Date(b.createdAt).getTime();
//     //   if (dateA < dateB) return 1;
//     //   if (dateA > dateB) return -1;
//     // descending
//     if (sortBy === "latest") return dateB - dateA;
//     // ascending
//     if (sortBy === "oldest") return dateA - dateB;
//   });
// };
// console.log(sort("oldest", notes));

//

//

//

//

// local date //
// toLocalDateString()
//
// const now = new Date();
// const options = {
//   year: "numeric",
//   month: "long",
//   day: "numeric",
//   weekday: "long",
//   hour: "numeric",
// };
// console.log(now.toLocaleDateString("fa-IR", options));
// console.log(Intl.DateTimeFormat("fa-IR", options).format(now));

//

//

//

//

// // settimeout() Vs setinterval() // //
// setTimeout => ONCE
// setInterval => repeatedly
// function sayHi(name) {
//   console.log(`say hi ${name}`);
// }
// const timerId = setTimeout(sayHi, 1000, "maryam");
// setTimeout(() => {
//   clearTimeout(timerId);
//   console.log("clear timer id");
// }, 2000);
// setInterval(sayHi, 3000, "ali");
//
// let count = 0;
// const intervalId = setInterval(() => {
//   if (count === 10) {
//     clearInterval(intervalId);
//     console.log(count);
//   } else {
//     count++;
//     console.log(count);
//   }
// }, 1000);

// spotwatch / countdown timer

function countDown(time) {
  const timer = () => {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    if (time === 0) {
      clearInterval(intervalId);
      console.log("click to resend otp");
      console.log(time);
    } else {
      console.log(min, ":", sec);
      time--;
    }
  };
  timer();
  const intervalId = setInterval(timer, 1000);
}
countDown(120);
