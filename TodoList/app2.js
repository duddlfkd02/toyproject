const todoInput = document.querySelector('.input_box');
const todoList = document.querySelector('.list_inner');

const savedTodoList = JSON.parse(localStorage.getItem('saved-items'));


if (savedTodoList) {
    for (let i = 0; i < savedTodoList.length; i++) {
        makeTodo(savedTodoList[i]);
    }
}

function keyEnter() {
    if (window.event.keyCode === 13 && todoInput.value !== '') {
        makeTodo();
    }
}

function plusBtn() {
    if (todoInput.value !== '') {
        makeTodo();
    }
}

function deleteList(e) {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
    }
    saveList();
}

function makeTodo(storageData) {
    let todoConetents = todoInput.value;
    if (storageData) {
        todoConetents = storageData.text
    }

    const todoList = document.querySelector('.list_inner');
    const newLi = document.createElement('li');
    const newBtn = document.createElement('button');
    const newSpan = document.createElement('span');
    const deleteBtn = document.createElement('img');

    newLi.appendChild(newBtn);
    newLi.appendChild(newSpan);
    newLi.appendChild(deleteBtn);

    deleteBtn.className = 'deleteBtn';
    deleteBtn.src = 'image/delete.png';

    newSpan.innerText = todoConetents;
    todoList.appendChild(newLi);

    todoInput.value = '';

    newBtn.addEventListener('click', () => {
        newLi.classList.toggle('complete');
        saveList();
    })

    deleteBtn.addEventListener('click', deleteList);

    saveList();

    if (storageData && storageData.complete === true) {
        newLi.classList.add('complete');
    }

}



function reset() {
    const listAll = document.querySelectorAll('.list_inner li');
    for (let i = 0; i < listAll.length; i++) {
        listAll[i].remove();
    }
    saveList();
}

function saveList() {
    const saveLists = [];
    for (let i = 0; i < todoList.children.length; i++) {
        const todoObj = {
            text: todoList.children[i].querySelector('span').innerText,
            complete: todoList.children[i].classList.contains('complete')
        };
        saveLists.push(todoObj);
    }
    if (saveLists.length === 0) {
        localStorage.removeItem('saved-items');
    } else {
        localStorage.setItem('saved-items', JSON.stringify(saveLists));
    }
}