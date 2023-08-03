const getDataBtn = document.querySelector(".get-data");
const postDataBtn = document.querySelector(".post-data");
const deleteDataBtn = document.querySelector(".delete-data");
const updateDataBtn = document.querySelector(".update-data");

getDataBtn.addEventListener("click", getUsers);
postDataBtn.addEventListener("click", postUser);
deleteDataBtn.addEventListener("click", deleteUser);
updateDataBtn.addEventListener("click", updateUser);

const app = axios.create({
  baseURL: "https://reqres.in/api",
  withCredentials: true,
});

// req => ok -Nok
// res => ok -Nok
app.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);
app.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 2xx => ok
// 4xx => front error
// 400 => bad request => email or pass wrong xxx
// 401 => unAuthorized
// 403 => access error - tahrim
// 404 => not found
// 5xx => backend error- server error

//  axios
// async await with try catch
async function getUsers() {
  const res = await app.get("/users");
  if (res) {
    console.log(res.data.data);
  } else {
    alert("error");
  }
}
async function postUser() {
  try {
    const user = {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    };
    const res = await app.post("/login", user);
    if (res) {
      console.log(res.data);
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error.response.data.error);
  }
}

// then catch
// function getUsers() {
//   app
//     .get("/users")
//     .then(({ data }) => console.log(data.data))
//     .catch((err) => console.log(err));
// }
// function postUser() {
//   const user = {
//     email: "eve.holt@reqres.in",
//     // password: "cityslicka",
//   };
//   app
//     .post("/login", user)
//     .then(({ data }) => console.log(data))
//     .catch((err) => console.log(err.response.data.error));
// }

//
//
//
// config axios

//
//
//
//

// put - patch and delete methods

async function deleteUser() {
  const token = "revobnl";
  try {
    const res = await app.delete("/users/1", {
      headers: {
        Authorization: `Breaer ${token}`,
      },
    });
    if (res) {
      console.log(res);
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error.response.data.error);
  }
}

// put vs patch =>
// patch => partial update(name,email) <= recomended
// patch : if id exist => update . else => error
// put => full update => all data should be appended
// put : if id exist => update . else => create.

async function updateUser() {
  const user = {
    name: "maryam",
    email: "maryemail",
  };
  try {
    const res = await app.patch("/users/3", user);
    if (res) {
      console.log(res);
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error.response.data.error);
  }
}

//
//
//

// set header in request

// role => admin , user, seo, ...
// token => admin,..
// http-only cookie => not access from browser and front
// withCredentials: true => send to backend http-only cookies to backend

// authontication => who are you?
// authorization => premmision of the user
