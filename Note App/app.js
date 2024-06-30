const notesContainer = document.querySelector('.note-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');

// 저장되어있는 메모들 불러오는 함수
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem('notes');
}
showNotes();

// 새로 작성한 노트들 저장하는 함수
function updateStorage() {
    localStorage.setItem('notes', notesContainer.innerHTML);
}

// 메모하기 버튼 누르면 노트가 추가되는 함수
createBtn.addEventListener('click', () => {
    let inputBox = document.createElement('p');
    let deleteImg = document.createElement('img');
    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable', 'true');
    deleteImg.src = 'images/delete.png';
    notesContainer.appendChild(inputBox).appendChild(deleteImg);
});

// 삭제하기 버튼, 작성하면 저장하는 함수 추가
notesContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === 'P') {
        notes = document.querySelectorAll('.input-box');
        notes.forEach(note => {
            note.onkeyup = function () {
                updateStorage();
            }
        })
    }
})

// 문자 줄바꿈 생성
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        document.execCommand('insertLineBreak');
        e.preventDefault();
    }
})