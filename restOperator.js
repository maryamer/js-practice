// // rest operrator : ...

// spread operator:
// const arr = [1, 2, 3, ...[4,5]]
// 1. right side of =
// 2. expend data

// rest operator:
// const [a,b, ...others] = [1,2,3,4,5]
// 1. left side of =
// 2. packing data
// rest element must be last element

// in array:
// const tags1 = ["a", "b"];
// const tags2 = ["d", "e"];
// const merge = [...tags1, ...tags2];
// const [a, b, ...others] = merge;
// console.log(a, b, others);

// in object:
const user = {
  name: "user",
  email: "mary@gmail.com",
  phone: 907687,
  id: 1,
};

const { id, ...rest } = user;
console.log(id, rest);
