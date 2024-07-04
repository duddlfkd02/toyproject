const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");





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
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);