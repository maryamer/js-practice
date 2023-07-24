// counter project section1
// const incBtn = document.querySelector(".increment");
// const decBtn = document.querySelector(".decrement");
// const resetBtn = document.querySelector(".reset");
// const counterValue = document.querySelector(".counter_value");
// let count = Number(counterValue.textContent);
// const inc = () => {
//   count++;
//   counterValue.textContent = count;
// };
// const dec = () => {
//   count--;
//   counterValue.textContent = count;
// };
// const reset = () => {
//   count = 0;
//   counterValue.textContent = count;
// };
// const counter = (e) => {
//   const classList = e.target.classList;
//   if (classList.contains("reset")) count = 0;
//   else if (classList.contains("increment")) count++;
//   else count--;

//   counterValue.textContent = count;
// };
// incBtn.addEventListener("click", counter);
// decBtn.addEventListener("click", counter);
// resetBtn.addEventListener("click", counter);

//
//
//
//

// counter project section2
const counterValue = document.querySelector(".counter_value");
let count = Number(counterValue.textContent);
const btns = document.querySelectorAll(".btn");
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const classList = e.target.classList;
    if (classList.contains("reset")) count = 0;
    else if (classList.contains("increment")) count++;
    else count--;
    if (count > 0) counterValue.style.color = "green";
    else if (count === 0) counterValue.style.color = "gray";
    else counterValue.style.color = "red";
    counterValue.textContent = count;
  });
});
