const getDataBtn = document.querySelector(".get-data");
const postDataBtn = document.querySelector(".post-data");

getDataBtn.addEventListener("click", getUsers);
postDataBtn.addEventListener("click", postUser);

//  axios
// async await with try catch
async function getUsers() {
  const res = await axios.get("https://reqres.in/api/users");
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
    const res = await axios.post("https://reqres.in/api/login", user);
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
//   axios
//     .get("https://reqres.in/api/users")
//     .then(({ data }) => console.log(data.data))
//     .catch((err) => console.log(err));
// }
// function postUser() {
//   const user = {
//     email: "eve.holt@reqres.in",
//     // password: "cityslicka",
//   };
//   axios
//     .post("https://reqres.in/api/login", user)
//     .then(({ data }) => console.log(data))
//     .catch((err) => console.log(err.response.data.error));
// }
