const addContent = document.querySelector('.input_box');
const listInner = document.querySelector('.list_inner');


//할일 추가
function plusContent(storageData) { // 매개변수
    let todoContents = addContent.value;
    if (storageData) {
        todoContents = storageData.contents //contains로 가져온거 문자로 바꿈
        console.log(todoContents)
    }
    if (addContent.value !== '') { //값이 빈칸이 아닐 때 추가

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
        //완료된 것도 로컬에 저장
        if (storageData && storageData.complete === true) {
            button.classList.add('complete');
        }
        saveMemo();
    }

}

//리스트 옆 삭제 버튼 클릭시 삭제
function deleteList(e) {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
    }
    saveMemo();
}

//전체 초기화
function reset() {
    const listAll = document.querySelectorAll('.list_inner li');
    for (let i = 0; i < listAll.length; i++) {
        listAll[i].remove();
    }
    saveMemo();
}

//로컬에 목록 저장
function saveMemo() {
    const saveItems = [];
    for (let i = 0; i < listInner.children.length; i++) {

        const todoObj = {
            contents: listInner.children[i].innerText,
            complete: listInner.children[i].classList.contains('complete')
        };

        saveItems.push(todoObj);
        console.log(JSON.stringify(saveItems))
    }
    localStorage.setItem('saved-items', JSON.stringify(saveItems));
}

const savedTodoList = JSON.parse(localStorage.getItem('saved-items'));
console.log(savedTodoList);

// //로컬에서 데이터 불러오기
if (savedTodoList) { //로컬데이터가 존재하면 실행
    for (let i = 0; i < savedTodoList.length; i++) {
        plusContent(savedTodoList[i]);
    }
}


//엔터 눌렀을 때 리스트 추가
function keyEnter() {
    // console.log(event); Enter keyCode === 13
    if (window.event.keyCode === 13) {
        plusContent();
    }
}
