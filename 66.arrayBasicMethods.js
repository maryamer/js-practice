// const arr = ["A", "B", "C", "D"];

// 1. length
// 2. push :add element to end of array and returns the new length of the array
// 3. pop : removes the last element of array and returns it
// 4. shift : Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// 5. unshift : Inserts new elements at the start of an array, and returns the new length of the array.
// 6. indexOf : Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
// 7.includes: Determines whether an array includes a certain element, returning true or false as appropriate.
// 8. slice => NOT MUTATE :Returns a copy of a section of an array. For both start and end.
// 9.splice :MUTATE => Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// splice(start)
// splice(start , deleteCount)
// splice(start , deleteCount, item1)
// splice(start , deleteCount, item1,item2 , item3)
// 10.reverse
// 11.join :Adds all the elements of an array into a string, separated by the specified separator string.
// 12.concat : Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// 13. at => arr[0] = arr.at(0)

// // cceass the last index of an array:
// 1. arr[arr.length -1]
// 2.arr.slice(-1[0])
// 3. arr.at(-1)

// console.log(arr.at(0));

//

//

//

//

// // forEach method : loop on array,map,set
// The forEach() method executes a provided function once for each array element.
// myarr.forEach(callback function => A function to execute for each element in the array. Its return value is discarded.)

// const myarr = ["records", "reactions", "necessary", "next.js", "vue js"];
// const courses = [];
// forEach return => undefined
// myarr.forEach((element, index, myarr) => {
//   courses.push({
//     id: index + 1,
//     title: element[0].toUpperCase() + element.toLowerCase().slice(1),
//   });
// });

//

//

//

//

// // forEach on Set and Map data structure
// const someArr = ["records", "reactions", "necessary", "next.js", "vue js"];
// const coursesSet = new Set(someArr);
// coursesSet.forEach((item, key, myset) => {
//   console.log(item, key, myset);
// });
//
// const mapData = new Map([
//   ["name", "maryam"],
//   ["job", "developer"],
// ]);
// mapData.forEach((value, key, map) => {
//   console.log(key, value, map);
// });

//

//

//

//

// // transforming array : map , filter, reduce => NOT MUTATE
//  map method // => returns new array and NOT MUTATE
// map usage => transform and return new array
// forEach usage => side effect : save to DB

// const users = [
//   {
//     id: 1,
//     age: 28,
//     name: "maryam",
//     isActive: true,

//     role: "TEACHER",
//   },
//   {
//     id: 2,
//     age: 20,
//     name: "zahra",
//     isActive: false,

//     role: "ADMIN",
//   },
//   {
//     id: 3,
//     age: 22,
//     name: "sanam",
//     isActive: true,

//     role: "MANAGER",
//   },
// ];
// with foreach
// const userIds = users.forEach((user) => {
//   userIds.push(user.id);
// });
// const userIds = users.map(({ id }) => {
//   return { id: id };
// });

// /// // challenge // /// //
// const newUsers = users.map((user) => {
//   return {
//     msg: `hi ${user.name} ,your profile is ${
//       user.isActive ? "active" : "not active"
//     } and your role is ${user.role}`,
//     ...user,
//   };
// });
// console.log(newUsers);

//

//

//

//

// filter method : NOT MUTATE // => satisfy on a condition ?
//  how to filter all active users?
// const active = users.filter((user) => user.isActive);
// console.log(active);
//
// 10 user => delete user
// const deleteUser = (id) => users.filter((user) => user.id !== id);
// console.log(deleteUser(1));

//

//

//

//

// reduce method : NOT MUTATE => the final result is a single value //
//reduce(callBaclValue, initialValue) => Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
//
// const total = users.reduce((acc, current, index) => acc + current.id, 0);
// console.log(total);
//
// const products = [
//   { title: "p1", price: "88.99$", quantity: 2 },
//   { title: "p2", price: "68.99$", quantity: 2 },
//   { title: "p3", price: "558.99$", quantity: 2 },
// ];
// const totalPrice = products.reduce((acc, product) => {
//   let price =
//     parseFloat(product.price.slice(0, product.price.length - 1)) *
//     product.quantity;
//   //   or
//   let price2 = parseFloat(product.price.split("$")[0]) * product.quantity;
//   return (acc += price);
// }, 0);
// console.log(totalPrice);

//

//

//

//

// //calc average challenge - chain method // //
// const userMarks = [9, 10, 13, 18, 20, 15, 7];
// 1. calculate the average of marks
// 2. calculatte the average of pased students
// 3. shift marks based on +3 an recalculate the ave.
// 1
// const ave = userMarks.reduce((acc, mark, index, arr) => {
//   return (acc += mark / arr.length);
// }, 0);
// console.log(ave.toFixed(2));
// // 2
// const passAve = userMarks
//   .filter((mark) => mark >= 10)
//   .reduce((acc, mark, index, arr) => {
//     return (acc += mark / arr.length);
//   }, 0);
// console.log(passAve.toFixed(1));
// // 3
// const plus3Ave = userMarks
//   .map((mark) => mark + 3)
//   .reduce((acc, mark, index, arr) => {
//     return (acc += mark / arr.length);
//   }, 0);
// console.log(plus3Ave.toFixed(2));

//

//

//

//

// // find and findIndex method // //
// find //
// const products = [
//   { id: 1, title: "p1", price: "88.99$", quantity: 2 },
//   { id: 2, title: "p2", price: "68.99$", quantity: 2 },
//   { id: 3, title: "p3", price: "558.99$", quantity: 2 },
// ];
// const p1 = products.find((p) => p.title === "p1");
// console.log(p1);
// findIndex => indexOf //
// both return => index
// indexOf => a simple value and can't get callbacck function
// findIndex => i(()=>{...})
// products.findIndex((p) => p.title === "p1");
// //challenge : remove a product ? based on p.id (with findIndex and splice)
// const removeProduct = (id) => {
//   const clone = [...products];
//   const pIndex = clone.findIndex((p) => p.id === id);
//   const filtered = clone.splice(pIndex, 1);
//   //   splice MUTATEs array
//   console.log(filtered);
//   console.log(clone);
// };
// removeProduct(1);

//

//

//

//

// // some and every methods // // => return boolean
//some => at least one item satisfy in callback condition
// every => all items stisfy in callback condition
// const users = [
//   {
//     id: 1,
//     age: 28,
//     name: "maryam",
//     isActive: true,
//     role: "TEACHER",
//   },
//   {
//     id: 2,
//     age: 20,
//     name: "zahra",
//     isActive: false,
//     role: "ADMIN",
//   },
//   {
//     id: 3,
//     age: 22,
//     name: "sanam",
//     isActive: true,
//     role: "MANAGER",
//   },
// ];
// some
// const hasActive = users.some((u) => u.isActive);
// console.log(hasActive);
// every
// const isAllActive = users.every((u) => u.isActive);
// console.log(isAllActive);

// // checkAlredyEnrolled(cart, enrolledCourses);
// const enrolledCourses = [2, 3];
// const cart = [
//   { id: 1, title: "p1", price: "88.99$" },
//   { id: 2, title: "p2", price: "68.99$" },
//   { id: 3, title: "p3", price: "558.99$" },
// ];
// function checkAlredyEnrolled(cart, enrolledCourses) {
//   const courseIds = cart.map((c) => c.id);
//   const found = enrolledCourses.some((id) => courseIds.includes(id));
//   // or
//   //   const found = enrolledCourses.some((id) => courseIds.indexOf(id) >= 0);
//   if (found) return "you alredy registered in one of courses";
//   return "ok";
// }
// console.log(checkAlredyEnrolled(cart, enrolledCourses));

//

//

//

//

// // sort method // // => MUTATE
// string
const userNameList = ["cike", "billiam", "ali"];
console.log(userNameList.sort());

// number
const nums = [1, 30, 4, 21, 1000];
console.log(nums.sort());
// nums.sort(compare function);
// return > 0 =>[B,A] (switch)
// return < 0 =>[A,B] (same)

// ascending:
// const sortedNumsAsc = nums.sort((a, b) => {
//   if (a < b) {
//     return -1;
//   }
//   return 1;
// });
// or
const sortedNumsAsc = nums.sort((a, b) => a - b);
console.log(sortedNumsAsc);

// descending:
// const sortedNumsDesc = nums.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   }
//   return 1;
// });
const sortedNumsDesc = nums.sort((a, b) => b - a);
console.log(sortedNumsDesc);
