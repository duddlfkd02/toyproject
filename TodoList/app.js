const addContent = document.querySelector('.input_box');
const listInner = document.querySelector('.list_inner');
const resetBtn = document.querySelector('.resetBtn');
let memos = document.querySelectorAll('.list');

//메모 리스트 스토리지에 저장
function saveMemo() {
    localStorage.setItem('memos', listInner.innerHTML);
}

//저장된 리스트 불러오기
function showMemo() {
    listInner.innerHTML = localStorage.getItem('memos');
}
showMemo();


//추가버튼 누르면 리스트 추가
function plusContent() {
    if (addContent.value !== '') {
        let list = document.createElement('li');
        let deleteBtn = document.createElement('img');
        const newBtn = document.createElement('button');

        list.className = 'list';
        deleteBtn.className = 'deleteBtn';
        newBtn.className = 'complete';

        deleteBtn.src = 'image/delete.png';
        list.innerHTML = addContent.value;

        list.appendChild(newBtn);
        listInner.appendChild(list).appendChild(deleteBtn);
        console.log(listInner);


        addContent.value = '';

        deleteBtn.addEventListener('click', deleteList);
        saveMemo();

        newBtn.addEventListener('click', () => {
            list.classList.toggle('complete');
        })
    }

}

//리스트 옆 삭제 버튼 클릭시 삭제
function deleteList(e) {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        saveMemo();
    }
}

function reset() {
    listInner.remove();
    window.localStorage.clear();
}

//엔터 눌렀을 때 리스트 추가
function keyEnter() {
    // console.log(event); Enter keyCode === 13
    if (window.event.keyCode === 13) {
        plusContent();
    }
}