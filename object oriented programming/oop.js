// const course1 = {
//   title: "Next.js",
//   price: 100,
//   discount: 30,
//   students: ["Ali", "Vahid", "Maryam"],
//   isFree: false,
//   category: {
//     id: 1,
//     englishTitle: "frontend",
//     title: "Front-end",
//   },
//   calcOfPrice: function () {
//     this.offPrice = this.price * (1 - this.discount / 100);
//     return this.offPrice;
//   },
// };

// const course2 = {
//   title: "React.js",
//   price: 200,
//   discount: 10,
//   students: ["Ali", "Mike", "Maryam"],
//   isFree: true,
//   category: {
//     id: 1,
//     englishTitle: "frontend",
//     title: "Front-end",
//   },
//   calcOfPrice: function () {
//     this.offPrice = this.price * (1 - this.discount / 100);
//     return this.offPrice;
//   },
// };

// // factory func and constructor func => class =>function
// // syntactic sugar => c = c + 1 => c++, for(i; i<5 ; i++) => for of
// // class => syntatic sugar => function :ok ! (2016)

// function CreateCourse1(title, price, discount, isFree) {
//   this.title = title;
//   this.price = price;
//   this.discount = discount;
//   this.isFree = isFree;
//   //   never do this:
//   //   this.calcOfPrice = function () {
//   //     return this.price * (1 - this.discount / 100);
//   //   };
//   // constructure function => class => OOP
// }

// //
// //
// //

// // prototype:
// const arr = [1, 3, 4];
// const obj = { name: "maryam" };
// const str = new String("maryam");
// // arr => Array.prototype => object.prototype => null
// // obj => object.prototype => null
// // str => String.prototype => object.prototype => null

// //
// //
// //

// // add methods on prototype
// function CreateCourse2(title, price, discount, isFree) {
//   this.title = title;
//   this.price = price;
//   this.discount = discount;
//   this.isFree = isFree;
// }
// CreateCourse2.prototype.calcOfPrice = function () {
//   return this.price * (1 - this.discount / 100);
// };
// const course = new CreateCourse2("Next.js", 200, 10, false);
// console.log(course.calcOfPrice());
// console.log(course.__proto__ === CreateCourse2.prototype);

// //
// //
// //

// // convert constructor funnction to class
// class Courses {
//   constructor(title, price, discount, isFree) {
//     this.title = title;
//     this.price = price;
//     this.discount = discount;
//     this.isFree = isFree;
//   }
//   calcOfPrice = () => {
//     return this.price * (1 - this.discount / 100);
//   };
// }
// const courseClass = new Courses("Next.js", 200, 10, false);
// console.log(courseClass.calcOfPrice());
// console.log(courseClass.__proto__ === Courses.prototype);

// //
// //
// //
// //

// // setter and getter

// // data property
// // accesor property => methods that start with set and get keywords => set fff() or get fff() keywords

// const user = {
//   firstName: "Maryam",
//   lastName: "Ebrahimi",
//   get fullName() {
//     return `${this.firstName} ${user.lastName}`;
//   },
//   set fullName(name) {
//     if (name && name.includes(" ")) {
//       [this.firstName, this.lastName] = name.split(" ");
//     } else {
//       alert(`${name} is not a valid fullname`);
//     }
//   },
// };
// console.log(user.fullName);
// user.fullName = "mahta mohammadi";
// console.log(user.fullName);

// const user2 = {
//   name: "ali",
//   birthday: "1995-05-06T00:11:23.819Z",
//   get age() {
//     // const now = new Date();
//     // const birthday = new Date(this.birthday);
//     // const millisec = Number(now) - Number(birthday);
//     // const age = Math.floor(millisec / (365 * 24 * 60 * 60 * 1000));
//     const now = new Date().getFullYear();
//     const birthday = new Date(this.birthday).getFullYear();
//     return now - birthday;
//   },
// };
// user2.age;

// //
// //
// //
// //

// // static method and static property

// class Article {
//   constructor(title) {
//     this.title = title;
//   }
//   static testMethod() {
//     console.log(this);
//     return this;
//   }
//   static compare(first, secound) {
//     return first.title === secound.title;
//   }
//   static testData = "data";
// }
// // Article.testMethod = function () {
// //   console.log(this);
// // };
// // Article.testData = "data";

// // const article = new Article("noode js");
// const articles = [new Article("node.js"), new Article("react.js")];
// // article.testMethod();
// Article.testMethod();
// console.log(Article.compare(...articles));
// console.log(Article.testData);

// // static methods =>
// // 1. helper(utility) methods related to class => database related
// // 2. constructor method => create new instance

//
//
//
//

// 4 principle of OOP
// 1.abstraction
// // ignore or hide details that don't matter
// //show essentials
// //reduce complexity
// //map,eventListener..
//
// 2. Encapsuoating
// // keeping properties and methods private inside the class,so they are not accessible forom outside of the class
// // some kind of 'data hiding
//
// 3.Inheritance
// // child class extends parent class
// //making all properties and methods of certain class available to a child class
// // reuse common logic
//
// 4. polymorphism
// //many shapes
// //A child class can overwrite inherited methods  from a parent class

//
//
//
//

// class inheritance
// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   greet() {
//     return `hi ${this.name},welcome to js`;
//   }
// }
// const user3 = new User("saheb");
// console.log(user3.greet());

// class Admin extends User {
//   constructor(name, role) {
//     super(name); // call parent constructor => this =>
//     this.role = role;
//   }
//   introduce() {
//     return `my name is ${this.name} ${this.role}`;
//   }
// }

// const admin = new Admin("Ali", "Admin");
// console.log(admin.introduce());

//
//
//
//

// //encapsulating =>protected fields, private fields ,private methods,public methods

// protected properties : Encapsulation
// data privacy

// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   greet() {
//     return `hi ${this.name},welcome to js`;
//   }
// }
// const user3 = new User("saheb");
// console.log(user3.greet());

// class Admin extends User {
//   constructor(name, role) {
//     super(name); // call parent constructor => this =>
//     this._role = role;
//     this._permissions = [];
//   }
//   _checkRole() {
//     return this._role;
//   }
//   addProduct(product) {
//     if (this._checkRole() === "ADMIN") {
//       return `you can add ${product}`;
//     }
//   }
//   introduce() {
//     return `my name is ${this.name} ${this.role}`;
//   }
// }

// const admin = new Admin("Ali", "ADMIN");
// console.log(admin.introduce());
// console.log(admin.addProduct("React"));

//
//
//
//

// private fields : encapsulating

class User {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `hi ${this.name},welcome to js`;
  }
}
const user3 = new User("saheb");
console.log(user3.greet());

class Admin extends User {
  // public field
  numOfCreatedPosts = 0;
  // private field
  #permissions = [];
  #role = "";
  constructor(name, role) {
    super(name);
    this.#role = role;
  }
  _checkRole() {
    return this.#role;
  }
  addPermission(permission) {
    this.#permissions.push(permission);
    console.log(this.#permissions);
  }
  addProduct(product) {
    if (this._checkRole() === "ADMIN") {
      return `you can add ${product}`;
    }
  }
  introduce() {
    return `my name is ${this.name} ${this.role}`;
  }
}

const admin = new Admin("Ali", "ADMIN");
console.log(admin.introduce());
console.log(admin.addProduct("React"));
admin.addPermission("product");
