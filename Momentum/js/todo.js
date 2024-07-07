const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    console.log(li)
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const newLi = document.createElement("li");
    newLi.id = newTodo.id;
    const newSpan = document.createElement("span");
    newSpan.innerText = newTodo.text;
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
    const newTodoObj = {
        text: newTodo,
        id: Date.now(), //각 li item을 구별하기 위해 작성
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY)


if (savedToDos !== null) {
    const parsedTodos = JSON.parse(savedToDos);
    toDos = parsedTodos; //이전에 저장되어있던 리스트도 유지 (이전것 복원)
    parsedTodos.forEach(paintToDo);
}

