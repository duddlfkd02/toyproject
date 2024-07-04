const images = ["img1.jpg", "img2.jpg", "img3.jpg"];

// 이미지 배열에서 랜덤으로 접근
// body background image 로 넣기

const chosenImg = images[(Math.floor(Math.random() * images.length))];


const bgImage = document.createElement('IMG');
bgImage.src = `img/${chosenImg}`;
document.body.appendChild(bgImage);