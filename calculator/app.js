const showNum = document.querySelector('.showNumber');

let selectOper; // 클릭한 연산자
let selectNum1; // 처음 클릭한 버튼(숫자)
let selectNum2; // 다음으로 클릭한 버튼(숫자)

function input(num) {
    showNum.value += num;
}

function operator(operation) {
    selectOper = operation;
    selectNum1 = parseFloat(showNum.value);
    showNum.value = '';
}

function calculate() {
    selectNum2 = parseFloat(showNum.value);
    switch (selectOper) {
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

function reset() {
    showNum.value = '';
}
