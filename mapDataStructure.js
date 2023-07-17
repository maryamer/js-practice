// Map : object => key can take can take any type of literals
const user = new Map();

// set(add)
//set: 1.return updated map and key value
user.set("name", "maryam");
console.log(user);

// 2. chain set
const arr = [1, 2];
user.set("email", "fnifgjv").set(true, "ok add").set(1, true);
console.log(user.set(arr, "fnifgjv").set(true, "ok add").set(["r", 5], true));
console.log(user);

//3. get data
console.log(user.get("name"));

//4. check exist data
console.log(user.has("dmkjfkn"));

//5.delete
user.delete("name");
console.log(user);

// 6. clear
user.clear();
console.log(user);
