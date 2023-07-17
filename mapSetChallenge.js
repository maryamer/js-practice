//  map and set challenge
let john = { name: "John doe" },
  lily = { name: "lily bush" },
  peter = { name: "peter parker" };
maryam = { name: "peter parker" };
mary = { name: "peter parker" };
ali = { name: "peter parker" };

const userRoles = new Map([
  [john, "ADMIN"],
  [mary, "MANAGER"],
  [lily, "MANAGER"],
  [peter, "SUBSCRIBER"],
  [maryam, "SUBSCRIBER"],
  [ali, "SUBSCRIBER"],
]);

// loop
const uniqueRoles = [[...new Set(userRoles.values())]];
console.log(uniqueRoles);
