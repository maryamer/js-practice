// fotm => submit create new todo => {id,createdAt,title, isCompleted}
// const tod,=> todos.push()

// selecting
// let todos = [];
const todoInput = document.querySelector(".todo-input");
const todoForm = document.querySelector(".todo-form");
const todoEditInput = document.querySelector(".todo-edit-input");
const todoEditForm = document.querySelector(".todo-edit-form");
const todoList = document.querySelector(".todolist");
const selectFilter = document.querySelector(".filter-todos");
const closeModalBtn = document.querySelector(".close-modal");

let editItemId = "";

const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");

// events
todoForm.addEventListener("submit", addNewTodo);
todoEditForm.addEventListener("submit", editTodo);

document.addEventListener("DOMContentLoaded", (e) => {
  const todos = getAllTodos();
  createTodos(todos);
});

selectFilter.addEventListener("change", filterTodos);
closeModalBtn.addEventListener("click", closeEditModal);
backdrop.addEventListener("click", closeEditModal);

// functions
function addNewTodo(e) {
  e.preventDefault();
  if (!todoInput.value) {
    return alert("please type something");
  }
  const newTodo = {
    id: Date.now(),
    createdAT: new Date().toISOString(),
    title: todoInput.value,
    isCompleted: false,
  };
  const todos = saveTodo(newTodo);
  createTodos(todos);
  filterTodos(todos);
}
function createTodos(todos) {
  //   create todos on DOM
  let result = "";
  todos.forEach((todo) => {
    result += `
<li class="todo">
<p class="todo__title ${todo.isCompleted && "completed"}">${todo.title}</p>
<span class="todo__createdAt">${new Date(todo.createdAT).toLocaleDateString(
      "fa-IR"
    )}</span>
<button class="todo__check" data-todo-id=${
      todo.id
    }><i class=" far fa-check-square"></i></button>
<button class="todo__remove" data-todo-id=${
      todo.id
    }><i class="far fa-trash-alt"></i></button>
<button class="show-modal" data-todo-id=${todo.id}>Edite</button>
</li>
`;
  });
  todoList.innerHTML = result;
  todoInput.value = "";
  const removeBtns = [...document.querySelectorAll(".todo__remove")];
  removeBtns.forEach((btn) => {
    btn.addEventListener("click", removeTodo);
  });
  const checkBtns = [...document.querySelectorAll(".todo__check")];
  checkBtns.forEach((btn) => {
    btn.addEventListener("click", checkTodo);
  });
  const showModalBtns = [...document.querySelectorAll(".show-modal")];
  showModalBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // backdrop, modal => remove hidden class
      editItemId = btn.getAttribute("data-todo-id");
      backdrop.classList.remove("hidden");
      modal.classList.remove("hidden");
    });
  });
}

function removeTodo(e) {
  let todos = getAllTodos();
  const todoId = Number(e.target.dataset.todoId);
  const filteredTodos = todos.filter((todo) => todo.id !== todoId);
  todos = filteredTodos;
  createTodos(filteredTodos);
  saveTodos(todos);
  filterTodos();
}
function checkTodo(e) {
  let todos = getAllTodos();
  const todoId = Number(e.target.dataset.todoId);
  const todo = todos.find((todo) => todo.id === todoId);
  todo.isCompleted = !todo.isCompleted;
  createTodos(todos);
  saveTodos(todos);
  filterTodos();
}
function editTodo(e) {
  e.preventDefault();
  let todoId = editItemId;
  let todos = getAllTodos();
  console.log(todos);
  let todo = todos.find((todo) => Number(todo.id) === Number(todoId));
  todo.title = todoEditInput.value;
  createTodos(todos);
  saveTodos(todos);
  filterTodos();
  closeEditModal();
}
function closeEditModal() {
  // backdrop, modal => add hidden class
  backdrop.classList.add("hidden");
  modal.classList.add("hidden");
}
function filterTodos() {
  const todos = getAllTodos();
  const filter = selectFilter.value;
  switch (filter) {
    case "all": {
      // todos
      createTodos(todos);
      break;
    }
    case "completed": {
      const filteredTodos = todos.filter((t) => t.isCompleted);
      createTodos(filteredTodos);
      break;
    }
    case "uncompleted": {
      const filteredTodos = todos.filter((t) => !t.isCompleted);
      createTodos(filteredTodos);
      break;
    }
    default: {
      createTodos(todos);
    }
  }
}

// local storage => web API
// localStorage.setItem("todos", JSON.stringify(todos));
// JSON.parse(localStorage.getItem("todos"));

function getAllTodos() {
  const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  return savedTodos;
}
function saveTodo(todo) {
  const savedTodos = getAllTodos();
  savedTodos.push(todo);
  localStorage.setItem("todos", JSON.stringify(savedTodos));
  return savedTodos;
}
function saveTodos(todos) {
  const savedTodos = todos;
  localStorage.setItem("todos", JSON.stringify(savedTodos));
  return savedTodos;
}
