const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo) {
    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    newSpan.innerText = newTodo;
    const newBtn = document.createElement("button");
    newBtn.innerText = "❎";
    newBtn.addEventListener("click", deleteTodo);
    newLi.appendChild(newSpan);
    newLi.appendChild(newBtn);
    toDoList.appendChild(newLi);

}


function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem("todos")


if (savedToDos !== null) {
    const parsedTodos = JSON.parse(savedToDos);
    toDos = parsedTodos; //이전에 저장되어있던 리스트도 유지 (이전것 복원)
    parsedTodos.forEach(paintToDo);
}

