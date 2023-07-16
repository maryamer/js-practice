// // // spread operators : ...

// 1. add some data to the end
// const arr = [4, 5];
// const arr2 = [1, 2, 3, ...arr];
// console.log(arr2);

// 2. pass all array index as argument
// const arr = [1, 2, 3, 4, 5];
// console.log(...arr);

// 3. push items to array
// const tags = ["back", "front"];
// console.log([...tags, "full"]);

// 4. copy
// const tags = ["front", "next", "react"];
// const newTags = [...tags];

// 5. join arrays
// const backendTags = ["node"];
// const join = [...backendTags, ...tags];

// // string:
// 1.add charachter to string
// const str = "maryam";
// console.log(...str);
// console.log([...str, "e"]);

// // object:
const user = {
  name: "John",
  id: 1,
};

// 1.add key value to object
// console.log({ ...user, email: "maryam@Gmail.com" });

// 2. clone/copy object
const newUser = { ...user };
newUser.email = "maryam@GamepadHapticActu";
console.log(user, newUser);
