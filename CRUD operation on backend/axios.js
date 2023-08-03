const getDataBtn = document.querySelector(".get-data");
const postDataBtn = document.querySelector(".post-data");

getDataBtn.addEventListener("click", getUsers);
postDataBtn.addEventListener("click", postUser);

const app = axios.create({
  baseURL: "https://reqres.in/api",
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
