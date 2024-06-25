const showNum = document.querySelector('.showNumber');

let operNum = 0; // 입력한 값을 담을 변수
let selectNum1 = 0;


function input(num) {
    showNum.value += num;
}

function operator(oper1) {
    selctOper = oper1 // 연산자 저장
    selectNum1 = parseFloat(showNum.value); // 숫자 정수로 바꾸기
    showNum.value = ''; // input 창은 비운다
}
// 계산 함수
function calculate() {
    let selectNum2 = parseFloat(showNum.value);
    switch (selctOper) {
        case '+':
            result = selectNum1 + selectNum2;
            break;
        case '-':
            result = selectNum1 - selectNum2;
            break;
        case '*':
            result = selectNum1 * selectNum2;
            break;
        case '/':
            result = selectNum1 / selectNum2;
            break;
    }
    showNum.value = result;
}

//리셋버튼
function reset() {
    showNum.value = '';

}

