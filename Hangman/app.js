window.onload = function () {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    // 알파벳 버튼 만들기
    const buttons = function () {
        const alphabet_container = document.querySelector('#alphabet_container');
        const alphaBox = document.createElement('ul');

        for (let i = 0; i < alphabet.length; i++) {
            alphaBox.id = 'alphabet_container';
            const list = document.createElement('li');
            list.id = 'alphabet_btn'; // css 설정값 부여
            list.innerHTML = alphabet[i];
            alphabet_container.appendChild(alphaBox);
            alphaBox.appendChild(list);
        }
    }


    // 2. 알파벳 입력한 값 표기하기
    const answer = function () {
        holder = document.getElementById('hold');
        correct = document.createElement('ul');

    }

    // Play
    // Correct answer
    const gameStart = function () {
        const categories = [
            ['apple', 'banana', 'cherry', 'melon', 'lemon', 'watermelone'],
            ['dog', 'cat', 'turtle', 'bird', 'bear', 'dolphin'],
            ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
        ]

        let chosenCategory = categories[Math.floor(Math.random() * categories.length)]; // 전체 3가지 배열 중 1개 배열 추출
        let word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)] //선택된 배열 중 단어 1개 선택
        console.log(word);
        buttons();
    }//gameStart fnt
    gameStart();
}//onload fnt

