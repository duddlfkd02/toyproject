const addContent = document.querySelector('.input_box');
const listInner = document.querySelector('.list_inner');
let todoList = document.querySelectorAll('.list');
// const resetBtn = document.querySelector('.resetBtn');
let memos = document.querySelectorAll('.input-box');


// //메모 리스트 스토리지에 저장
// function saveMemo() {
//     localStorage.setItem('memos', listInner.innerHTML);
//     console.log(memos);
// }



// //저장된 리스트 불러오기
// function showMemo() {
//     listInner.innerHTML = localStorage.getItem('memos');
// }
// showMemo();



//추가버튼 누르면 리스트 추가
function plusContent() {
    if (addContent.value !== '') {
        const listInner = document.querySelector('.list_inner');
        let list = document.createElement('li');
        let deleteBtn = document.createElement('img');
        const newBtn = document.createElement('button');

        list.className = 'list';
        deleteBtn.className = 'deleteBtn';
        newBtn.className = 'complete';

        deleteBtn.src = 'image/delete.png';
        list.textContent = addContent.value;

        list.appendChild(newBtn);
        listInner.appendChild(list).appendChild(deleteBtn);
        addContent.value = '';

        deleteBtn.addEventListener('click', deleteList);


        newBtn.addEventListener('click', () => {
            list.classList.toggle('complete');
        })
        saveMemo();
    }

}

//리스트 옆 삭제 버튼 클릭시 삭제
function deleteList(e) {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        // saveMemo();
    }
}


function reset() {
    const listAll = document.querySelectorAll('.list_inner li');
    for (let i = 0; i < listAll.length; i++) {
        listAll[i].remove();
    }
}

function saveMemo() {

    const saveItems = [];
    for (let i = 0; i < listInner.children.length; i++) {

        const todoObj = {
            contents: listInner.children[i].innerText,
            complete: listInner.children[i].classList.contains('complete')
        };

        saveItems.push(todoObj);

    }

    if (saveItems.length === 0) {
        localStorage.removeItem('saved-items')
    } else {
        localStorage.setItem('saved-items', JSON.stringify(saveItems));
    }
}

//엔터 눌렀을 때 리스트 추가
function keyEnter() {
    // console.log(event); Enter keyCode === 13
    if (window.event.keyCode === 13) {
        plusContent();
    }
}
