const createCourse = (title, price, discount) => {
  return {
    title: title,
    price: price,
    discount: discount,

    calcOfPrice() {
      return price * (1 - discount / 100);
    },
  };
};
console.log(createCourse("next.js", 200, 10).calcOfPrice());
