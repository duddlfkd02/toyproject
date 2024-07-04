const quotes = [
    {
        quotes: "어려움은 새로운 길을 만들어준다.",
        author: "프랭클린 D. 루스벨트"
    },
    {
        quotes: "좌절은 이길 수 있는 지름길이다.",
        author: "메리 케이 애셔"
    },
    {
        quotes: "포기하지 않으면 이길 수 있다.",
        author: "헤브라이드 앤더슨"
    },
    {
        quotes: "가장 큰 영광은 한 번도 실패하지 않고 힘들게 버틴 데에 있다.",
        author: "빈스 람바디"
    },
    {
        quotes: "어려운 시간에 참을성을 유지하는 것이 가장 중요하다.",
        author: "부다"
    },
    {
        quotes: "어떤 것도 포기하지 말고, 항상 나아가라. 어려운 일도 처음부터 어려운 것은 아니다.",
        author: "로버트 슐러"
    },
    {
        quotes: "성공은 넘어지고 일어나는 과정에서 시작된다.",
        author: "데이비드 J. 슈왈츠"
    },
    {
        quotes: "한 걸음씩 나아가는 것도 뒤로 물러서는 것보다 낫다.",
        author: "마르그리트 포이"
    },
    {
        quotes: "계속 움직이는 것이 중요하다. 성공의 비밀은 계속 하는 것이다.",
        author: "알버트 아인슈타인"
    },
    {
        quotes: "가장 어두운 밤에도 해가 떠있다.",
        author: "루시아 프로이크"
    }
]

const qoute = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

qoute.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;