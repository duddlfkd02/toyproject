const showNum = document.querySelector('.showNumber');
const result = document.querySelector('.result');
const operator = document.querySelectorAll("button.operator");

function input(num) {
    showNum.value += num;
}

let calcNum = [];

operator.forEach((button) => {
    button.addEventListener('click', () => {
        calcNum.push(showNum.value);
        calcNum.push(button.innerHTML);
        console.log(calcNum);
        showNum.value = '';
    })
})

result.addEventListener('click', () => {
    calcNum.push(showNum.value);
    showNum.value = eval(calcNum.join(''));
})


//리셋버튼
function reset() {
    showNum.value = '';
    calcNum.length = 0;
}

