// use strict mode :
"use strict";
// * call, apply , bind methods=> the wholw point is call a method or function with a new this

// 1.to borrow another objects methods or
// 2. to create a custom value of this

// this => object that calls the method

const user = {
  name: "mary",
  job: "developer",
  birthY: 2003,
  getYearOfBirth() {
    console.log(2023 - this.birthY);
    // return 2023 - this.birthY;
  },
  introduceUser(greeting, message) {
    console.log(
      `${greeting}i'm ${this.name},a ${this.job}, my message to the world is ${message}`
    );
    return `i'm ${this.name},a ${this.job}, my message to the world is ${message}`;
  },
};

// user.getYearOfBirth();

const guestUser = {
  name: "ali",
  job: "developer",
  birthY: 1995,
};

user.introduceUser("gujkddtujym");

const newGetYearOfBirth = user.getYearOfBirth;
const newIntroduceUser = user.introduceUser;
newGetYearOfBirth.call(guestUser); // change this => to guestUser
newIntroduceUser.call(guestUser, "hi ", "learn coding");

newGetYearOfBirth.apply(guestUser); // change this => to guestUser
newIntroduceUser.apply(guestUser, ["hi ", "learn coding"]);

// 2.

function sayHello(greeting) {
  console.log(`${greeting} , ${this.name}`);
}

sayHello.call(guestUser, "hello");

// bind // => creaate another function
// call and apply don't have a return but bind does
// const introUserBind = newIntroduceUser.bind(guestUser);
// introUserBind("hi hi ", "learn js");
// const introUserBind2 = newIntroduceUser.bind(guestUser, "hello world ");
// introUserBind2("learn js");

document
  .querySelector(".add-user")
  .addEventListener("click", user.getYearOfBirth.bind(user));

//   partial application
const counter = (count, number) => {
  console.log(number + count);
};
counter(5, 4);

const countByFive = counter.bind(null, 5);
countByFive(4);

const countByFive2 = function (number) {
  return function (count) {
    console.log(count + number);
  };
};
countByFive2(4)(5);
