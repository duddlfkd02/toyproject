const API_KEY = '702d9ee76b7a0a07725030f59039c210';
const COORDS = 'coords'; //localStorated에 저장할 키 이름

// api 받아온 값 입력할 변수
const weather = document.querySelector('.temp');
const city = document.querySelector('.city');
const humidity = document.querySelector('.humidity');
const windy = document.querySelector('.wind');


// api 정보 불러오는 함수
function getWeather(lat, lng) { //위도, 경도 넘겨받음
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
        .then((response) => {
            //response로만 받아오면 body를 읽을 수 없어서 json으로 형태로 받아와야함
            return response.json() //json 데이터 가져오기
        }).then((json) => {
            // console.log(json);
            const temperature = json.main.temp;
            const cityName = json.name;
            const humidi = json.main.humidity;
            const wind = json.wind.speed;
            weather.innerText = `${parseInt(temperature)}°C`;
            city.innerText = `${(cityName)}`;
            humidity.innerText = `${parseInt(humidi)}%`;
            windy.innerText = `${parseInt(wind)}km/h`;
        });
}

//위치 받아온 객체를 localStorage에 저장하는 함수
function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

// 위치정보 가져오기 (위치 성공적으로 읽으면 실행)
function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = { // 가져온 위도 경도 객체로 저장
        latitude, // latitude: latitude 와 동일 (키 값 같으면 생략)
        longitude
    };
    saveCoords(coordsObj); //localStorage 에 저장하는 함수 호출
    getWeather(latitude, longitude) // api 함수 호출
}

function handleGeoError() {
    console.log('error')
}

//위치 값 요청하는 함수
function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

//위도, 경도 값 받아오는 함수 
function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS); // 저장된 coords를 가져오기
    if (loadedCoords === null) { // 저장된 값이 없다면 위치정보 읽는 함수 실행해라
        askForCoords();
    } else { // 저장된 값이 있다면 odj로 파싱해라
        const parsedCoords = JSON.parse(loadedCoords);
        // console.log(parsedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude); // 파싱된 obj를 날씨 api로 넘기기
    }
}

function init() {
    loadCoords(); // 위치정보 가져오기
}

init();
