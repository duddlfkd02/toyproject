const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

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

// function sayHello(item) {
//     console.log("this is the turn of", item);
// }

const savedToDos = localStorage.getItem("todos")
// console.log(savedToDos); //string

if (savedToDos !== null) {
    const parsedTodos = JSON.parse(savedToDos);
    // console.log(parsedTodos) //array
    parsedTodos.forEach((item) => {
        console.log("this is the turn of", item)
    });//array의 각 item에 해당함수를 한번씩 실행
}

