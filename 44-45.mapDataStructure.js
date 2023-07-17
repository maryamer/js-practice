// Map : object => key can take can take any type of literals
// const user = new Map();

// set(add)
//set: 1.return updated map and key value
// user.set("name", "maryam");
// console.log(user);

// 2. chain set
// const arr = [1, 2];
// user.set("email", "fnifgjv").set(true, "ok add").set(1, true);
// console.log(user.set(arr, "fnifgjv").set(true, "ok add").set(["r", 5], true));
// console.log(user);

//3. get data
// console.log(user.get("name"));

//4. check exist data
// console.log(user.has("dmkjfkn"));

//5.delete
// user.delete("name");
// console.log(user);

// 6. clear
// user.clear();
// console.log(user);

// // //an example of map data type
let john = { name: "John doe" },
  lily = { name: "lily bush" },
  peter = { name: "peter parker" };

// 1.
// const userRoles = new Map();
// userRoles.set(john, "ADMIN").set(lily, "MANAGER").set(peter, "SUBSCRIBER");

// 2.
const userRoles = new Map([
  [john, "ADMIN"],
  [lily, "MANAGER"],
  [peter, "SUBSCRIBER"],
]);
console.log(userRoles);

// get
console.log(userRoles.get(john));

// loop
for (const item of userRoles) {
  console.log(item);
}
for (const item of userRoles.entries()) {
  console.log(item);
}
for (const item of userRoles.entries()) {
  console.log(item[0].name, item[1]);
}
for (const [user, role] of userRoles.entries()) {
  console.log(user.name, role);
}
for (const item of userRoles.keys()) {
  console.log(item.name);
}
for (const item of userRoles.values()) {
  console.log(item);
}

//convert map keys to array
console.log([...userRoles.keys()]);

// convert map values to array
console.log([...userRoles.values()]);
