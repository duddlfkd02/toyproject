// 시작 버튼을 누르면 랜덤 숫자가 뜬다(3초 뒤 사라짐)
// 제출 버튼을 누르면 input === 랜덤 숫자 판별
const result = document.querySelector('.resultText');
const startBtn = document.querySelector('#startBtn');
let displayNum = document.querySelector('.displayNum');
let inputNum = document.querySelector('#inputNum');
let randomNum;


function start() {
    randomNum = rand(1000, 9999);
    displayNum.innerHTML = randomNum;
    startBtn.disabled = true;
    console.log(randomNum)
    setTimeout(() => {
        displayNum.innerHTML = '';
        startBtn.disabled = false;
    }, 3000)
}

function submit() {
    guess = parseInt(inputNum.value);
    if (isNaN(guess)) {
        alert('숫자를 입력하세요');
        return;
    }
    if (guess === randomNum) {
        result.innerHTML = '정답입니다!'
    } else {
        result.innerHTML = `오답입니다. 정답은 ${randomNum} 입니다.`
    }
}

//random 숫자 생성
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
