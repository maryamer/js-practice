// counter project section1
const incBtn = document.querySelector(".increment");
const decBtn = document.querySelector(".decrement");
const resetBtn = document.querySelector(".reset");
const counterValue = document.querySelector(".counter_value");
let count = Number(counterValue.textContent);
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

const counter = (e) => {
  const classList = e.target.classList;
  if (classList.contains("reset")) count = 0;
  else if (classList.contains("increment")) count++;
  else count--;

  counterValue.textContent = count;
};
incBtn.addEventListener("click", counter);
decBtn.addEventListener("click", counter);
resetBtn.addEventListener("click", counter);
