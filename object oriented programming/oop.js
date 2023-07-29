const course1 = {
  title: "Next.js",
  price: 100,
  discount: 30,
  students: ["Ali", "Vahid", "Maryam"],
  isFree: false,
  category: {
    id: 1,
    englishTitle: "frontend",
    title: "Front-end",
  },
  calcOfPrice: function () {
    this.offPrice = this.price * (1 - this.discount / 100);
    return this.offPrice;
  },
};

const course2 = {
  title: "React.js",
  price: 200,
  discount: 10,
  students: ["Ali", "Mike", "Maryam"],
  isFree: true,
  category: {
    id: 1,
    englishTitle: "frontend",
    title: "Front-end",
  },
  calcOfPrice: function () {
    this.offPrice = this.price * (1 - this.discount / 100);
    return this.offPrice;
  },
};

// factory func and constructor func => class =>function
// syntactic sugar => c = c + 1 => c++, for(i; i<5 ; i++) => for of
// class => syntatic sugar => function :ok ! (2016)

function CreateCourse1(title, price, discount, isFree) {
  this.title = title;
  this.price = price;
  this.discount = discount;
  this.isFree = isFree;
  //   never do this:
  //   this.calcOfPrice = function () {
  //     return this.price * (1 - this.discount / 100);
  //   };
  // constructure function => class => OOP
}

//
//
//

// prototype:
const arr = [1, 3, 4];
const obj = { name: "maryam" };
const str = new String("maryam");
// arr => Array.prototype => object.prototype => null
// obj => object.prototype => null
// str => String.prototype => object.prototype => null

//
//
//

// add methods on prototype

function CreateCourse2(title, price, discount, isFree) {
  this.title = title;
  this.price = price;
  this.discount = discount;
  this.isFree = isFree;
  //   this.calcOfPrice = function () {
  //     return this.price * (1 - this.discount / 100);
  //   };
}
// console.log(CreateCourse2.prototype);
CreateCourse2.prototype.calcOfPrice = function () {
  return this.price * (1 - this.discount / 100);
};
const course = new CreateCourse2("Next.js", 200, 10, false);
console.log(course.calcOfPrice());
