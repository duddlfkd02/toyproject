window.onload = function () {

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    //변수
    let guess;
    let guesses = [];
    let list;
    let word;
    let counter;
    let lives;
    let space;
    let categories
    let chosenCategory

    let categoryName = document.getElementById('categoryName');


    // 알파벳 버튼 만들기
    const buttons = function () {
        const alphabet_container = document.querySelector('#alphabet_container');
        const alphaBox = document.createElement('ul');

        for (let i = 0; i < alphabet.length; i++) {
            alphaBox.id = 'alphabet_container';
            list = document.createElement('li');
            list.id = 'alphabet_btn'; // css 설정값 부여
            list.innerHTML = alphabet[i];
            check();
            alphabet_container.appendChild(alphaBox);
            alphaBox.appendChild(list);
        }
    }

    //카테고리 힌트 보여주기
    let hintCate = function () {
        if (categories[0] === chosenCategory) {
            categoryName.innerHTML = 'The Chosen Category Is "FRUITS"'
        } else if (categories[1] === chosenCategory) {
            categoryName.innerHTML = 'The Chosen Category Is "ANIMALS"';
        } else if (categories[2] === chosenCategory) {
            categoryName.innerHTML = 'The Chosen Category Is "COLORS"'
        }
    }



    // 알파벳 입력한 값 표기하기
    let result = function () {
        holder = document.getElementById('hold');
        correct = document.createElement('ul');

        for (let i = 0; i < word.length; i++) {
            correct.setAttribute('id', 'my-word');
            guess = document.createElement('li');
            guess.setAttribute('class', 'guess');
            if (word[i] === '-') {
                guess.innerHTML = '-';
            } else {
                guess.innerHTML = '_';
            }

            guesses.push(guess);
            holder.appendChild(correct);
            correct.appendChild(guess);
        }
    }

    //남은 수명 보여주기
    let comments = function () {
        const showLives = document.getElementById('leftLives');
        showLives.innerHTML = `Lives left ${lives}`;
        if (lives < 1) {
            showLives.innerHTML = 'Game Over! Try Again';
        }
        for (let i = 0; i < guesses.length; i++) {
            if (counter + space === guesses.length) {
                showLives.innerHTML = 'You Win!!!';
            }
        }
    }


    // 버튼 클릭시 check() 함수
    let check = function () {
        list.onclick = function () {
            let guess = (this.innerHTML);
            this.setAttribute('class', 'active');
            // this.onclick = null;

            for (let i = 0; i < word.length; i++) {
                if (word[i] === guess) {
                    guesses[i].innerHTML = guess;
                    counter += 1;
                }
            }
            // 알파벳 버튼 클릭했을 때 단어 확인 후 수명 증감소
            let wordIdx = word.indexOf(guess);
            if (wordIdx === -1) {
                lives -= 1;
                comments()
            } else {
                comments()
            }
        }
    }


    // Game Start
    // Correct answer
    const gameStart = function () {
        categories = [
            ['apple', 'banana', 'cherry', 'melon', 'lemon', 'watermelone'],
            ['dog', 'cat', 'turtle', 'bird', 'bear', 'dolphin'],
            ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
        ]

        chosenCategory = categories[Math.floor(Math.random() * categories.length)]; // 전체 3가지 배열 중 1개 배열 추출
        word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)] //선택된 배열 중 단어 1개 선택
        // word = word.replace(/\s/g, "-");
        console.log(word);
        buttons();

        guesses = [];
        lives = 10;
        counter = 0;
        space = 0;
        result();
        comments();
        hintCate()

    }//gameStart fnt

    gameStart();

    //Reset button
    const reset = document.getElementById('resetBtn');
    reset.addEventListener('click', () => {
        correct.remove(correct);
        alphaBox.remove(alphaBox);
        categoryName.innerHTML = "";
        gameStart();
    })

}//onload fnt

