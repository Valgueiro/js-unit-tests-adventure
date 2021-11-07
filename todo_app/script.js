import { TodoList, Todo } from "./todo.js";

// getting all required elements
const INPUT_BOX = document.querySelector(".inputField input");
const ADD_BTN = document.querySelector(".inputField button");
const TODO_LIST = document.querySelector(".todoList");
const DELETE_ALL_BTN = document.querySelector(".footer button");
const PENDING_TASKS_NUMBER = document.querySelector(".pendingTasks");

const todoList = new TodoList();

// onkeyup event
INPUT_BOX.onkeyup = () => {
  let userEnteredValue = INPUT_BOX.value; //getting user entered value
  if (userEnteredValue.trim() != 0) {
    //if the user value isn't only spaces
    ADD_BTN.classList.add("active"); //active the add button
  } else {
    ADD_BTN.classList.remove("active"); //unactive the add button
  }
};

showTasks(); //calling showTask function

ADD_BTN.onclick = () => {
  const userEnteredValue = INPUT_BOX.value;
  const newTodo = new Todo(userEnteredValue);

  todoList.addTodo(newTodo);
  showTasks(); //calling showTask function
  ADD_BTN.classList.remove("active"); //unactive the add button once the task added
};

function showTasks() {
  // Update pending tasks number
  PENDING_TASKS_NUMBER.textContent = list.numberOfTodos;

  if (todoList.hasTodos) {
    //if array length is greater than 0
    DELETE_ALL_BTN.classList.add("active"); //active the delete button
  } else {
    DELETE_ALL_BTN.classList.remove("active"); //unactive the delete button
  }
  let newLiTag = "";
  todoList.todos.forEach((todo, index) => {
    newLiTag += `<li>${todo.name}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
  });

  TODO_LIST.innerHTML = newLiTag; //adding new li tag inside ul tag
  INPUT_BOX.value = ""; //once task added leave the input field blank
}

// delete task function
function deleteTask(index) {
  todoList.removeTodo(index)

  showTasks();
}

// delete all tasks function
DELETE_ALL_BTN.onclick = () => {
  todoList.clearList();
  showTasks(); 
};

window.deleteTask = deleteTask;
