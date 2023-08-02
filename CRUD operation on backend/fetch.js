// what is back-end api
// ajax - fetch api

// how to call back-end API
// Axios
// Fetch Api
// XMLHttpRequest

// get and post data using fetch method
const getDataBtn = document.querySelector(".get-data");
const postDataBtn = document.querySelector(".post-data");

getDataBtn.addEventListener("click", getUsers);
postDataBtn.addEventListener("click", loginUser);

function getUsers() {
  fetch("https://reqres.in/api/users")
    .then((res) => {
      return res.json();
    })
    .then(({ data }) => {
      console.log("data", data);
    })
    .catch();
}

// function loginUser() {
//   const user = {
//     email: "eve.holt@reqres.in",
//     // password: "cityslicka",s
//   };
//   fetch("https://reqres.in/api/login", {
//     method: "POST",
//     body: JSON.stringify(user),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((res) => res.json())
//     .then((res) => {
//       if (res.ok) {
//         return res;
//       } else {
//         return res.error;
//       }
//     })
//     .then((res) => console.log(res))
//     .catch((err) => {
//       console.log(err.message);
//     });
// }

// error handling

async function loginUser() {
  try {
    const user = {
      email: "eve.holt@reqres.in",
      // password: "cityslicka",
    };
    const res = await fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    if (result.ok) {
      return result;
    }
    throw new Error(result.error);
  } catch (error) {
    console.log(error.message);
  }
}
