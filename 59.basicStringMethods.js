// String :

const user = "maryam mim mohammadi mim";

// 1. indexOf -lastIndexOF

// 2.slice()=> no mutation
// slice(indexStart)
// slice(indexStart, indexEnd)

// 3. includes()

// 4.startsWith

// 5. join- split
// const postTitle = "the new features in Next.js V 13";
// console.log(postTitle.split(" ").join("-").toLowerCase());

// const url = "/courses/react.js";

// console.log(url.split("/")[2]); // product title:

// 6. trim => cut the spaces around

// 7. toLowerCase() - toUpperCase()

// 8. replace('x','y')
// 8. replaceAll('x','y')

// // // // // challenge #1: search in a string: // // // // //
// // 1. find the index of searchTerm in string
// // 2. if not exist return "Not Includes"
// function search(string, searchTerm) {
//   const indexOf = string.toLowerCase().indexOf(searchTerm.toLowerCase().trim());
//   if (indexOf > -1) {
//     return indexOf;
//   }
//   return "Not Includes";
// }
// const str = "hello maryam i hpow JOHUB Joo JOO are YOU";
// console.log(search(str, "hellO"));

// // // // // challenge #2: check if user email exist: // // // // //
// const registeredEmail = "user.test@.com";
// function checkEmailExist(email) {
//   const signUpEmail = email.toLowerCase().trim();
//   if (registeredEmail === signUpEmail) return "email alredy exists";
//   return `welcome ${signUpEmail.split("@")[0]}`;
// }
// console.log(checkEmailExist("user.Tst@.com"));

// // // // // challenge #3: capitalize first letter: // // // // //
// const userName = "mArYAM";
// function capitalizeFirstLetter(letter) {
//   return letter[0].toUpperCase() + letter.toLowerCase().slice(1);
// }
// console.log(capitalizeFirstLetter(userName));

// // // // // challenge #4: capitalize first letter of all  words: // // // // //
// const msg = "the dogs are my favorite pets";
// function capitalizer(str) {
//   const arr = str.split(" ");
//   const newArr = [];
//   for (const item of arr) {
//     newArr.push(item[0].toUpperCase() + item.toLowerCase().slice(1));
//     console.log(newArr.join(" "));
//   }
// }
// capitalizer(msg);

// // // padding in string // // //

// const userName = "maryam";
// console.log(userName.padStart(10, "*").padEnd(13, "="));
// const time = "2:5:20";
// function formatTime(str) {
//   const arr = str.split(":");
//   const newArr = [];
//   for (const item of arr) newArr.push(item.padStart(2, 0));
//   console.log(newArr.join(":"));
// }
// formatTime(time);
// // or
// function padTime(time) {
//   let [hr, min, sec] = time.split(":");
//   hr = hr.padStart(2, 0);
//   min = min.padStart(2, 0);
//   sec = sec.padStart(2, 0);
//   const newTime = [hr, min, sec].join(":");
//   console.log(newTime);
// }
// padTime(time);

// // // // // challenge #5: mask credit cards numbers : // // // // //

// function hashCreditCard(number) {
//   const str = String(number).replaceAll(" ", "").replaceAll("-", "");
//   const last = str.slice(-4);
//   return last.padStart(str.length, "*");
// }

// console.log(hashCreditCard(5859831060602434));
// console.log(hashCreditCard("5859-8310-6060-2434"));
// console.log(hashCreditCard("5859 8310 6060 2434"));
