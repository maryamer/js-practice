// Set: iterable data =>arrray, string

// there is no index in set
// order of datas is not important in set

const set = new Set([1, 2, 3, 2, 3, 4, 5, 6, 6]);
console.log(set);

// 1. size
console.log(set.size);

// 2. check => has
console.log(set.has(1));

// 3. add
console.log(set.add(7));

// 4. delete
set.delete(2);
console.log(set);

// 5. can not get value with insex in set

// 6. clear
// set.clear();
// console.log(set);

// 7. loop
// for (const item of set) console.log(item);

// create unique array::
const roles = ["ADMIN", "ADMIN", "TEACHER", "MANAGER"];
const uniqueRoles = [...new Set(roles)];
console.log(uniqueRoles);
console.log(new Set(roles).size);

// create unique string:
console.log([...new Set("mmmmaaaarrrryyamm")]);
console.log([...new Set("mmmmaaaarrrryyamm")].join(""));
