// list 추가하기
const addContent = document.querySelector('.input_box');
const memos = document.querySelectorAll('.list_inner');
const listBox = document.querySelector('.list_box');

//메모 리스트 스토리지에 저장
function saveMemo() {
    localStorage.setItem('memos', listBox.innerHTML);
}

//저장된 리스트 불러오기
function showMemo() {
    listBox.innerHTML = localStorage.getItem('memos');
    saveMemo();
}
// showMemo();


//추가버튼 누르면 리스트 추가
function plusContent() {
    const listInner = document.createElement('ul');
    let list = document.createElement('li');
    let deleteBtn = document.createElement('img');

    listInner.className = 'list_box';
    list.className = 'list';
    deleteBtn.className = 'deleteBtn'

    deleteBtn.src = 'image/delete.png';
    list.innerHTML = addContent.value;

    listBox.appendChild(listInner);
    listInner.appendChild(list).appendChild(deleteBtn);
    addContent.value = '';

    deleteBtn.addEventListener('click', delteList);
    saveMemo();
}

//리스트 옆 삭제 버튼 클릭시 삭제
function delteList(e) {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        saveMemo();
    }
}

//엔터 눌렀을 때 리스트 추가
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        plusContent();
    }
});