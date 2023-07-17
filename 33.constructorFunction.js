function CreateCourse(title, price, discount) {
  this.title = title;
  this.price = price;
  this.discount = discount;
  this.calcOfPrice = function () {
    return price * (1 - discount / 100);
  };
  //   return this;
}

const course1 = new CreateCourse("next", 200, 10);
console.log(course1.calcOfPrice());
