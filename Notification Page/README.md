# FrontEnd Mentor - Notification Page

### 작업 목적 👩🏻‍💻

: 자바스크립트의 메소드, 구현방식을 복습하기 위해 작업 시도.

### 필수 구현 기능 📝

- "읽음", "읽지 않음" 표시하기
- "Mark all as read" 버튼 클릭 시 모두 읽음 처리, header 카운트 0으로 처리

### 추가 구현 기능 📝

- list 클릭 시 modal 로 내용 보여주기
- 닫기버튼 누르면 읽음 처리 되기

---

# Trouble Shooting 💥

### `modal` 생성 후 닫기 버튼을 눌렀을 때, 읽음 처리 반영이 되지 않음

### console Error 문구

```
Uncaught ReferenceError: parentInt is not defined
    at closeModal (modal.js:29:26)
    at HTMLSpanElement.<anonymous> (modal.js:41:3)
```

### 1차 작성 코드

```javascript
export const closeModal = (id, notifications) => {
  const modal = document.getElementById("modal");
  modal.classList.remove("show");
  modal.classList.add("hidden");

  const notificationId = parseInt(id, 10);  ❌ 문제 발생 부분
  const notification = notifications.find((notifi) => notifi.id === notificationId);
  if (notification && !notification.read) {
    notification.read = true;
    renderNotifications(notifications);
  }
};
```

<br />

### 원인 분석 🔍

`parseInt` 가 정의되지 않은 변수를 처리하려고 시도했기 때문.
`modal.getAttribute("data-id")` 로 가져온 값이 `null` 또는 할당이 제대로 되지 않은 경우일 수 있다.

<br />

### 코드 수정하기 🚧

```js
export const closeModal = (id, notifications) => {
  const modal = document.getElementById("modal");
  modal.classList.remove("show");
  modal.classList.add("hidden");

  ✅ ID 값이 null인지 확인
  const notificationId = id ? parseInt(id, 10) : null;

  if (notificationId === null) {
    console.error("Invalid notification ID");
    return;
  }

  const notification = notifications.find((notifi) => notifi.id === notificationId);
  if (notification && !notification.read) {
    notification.read = true;
    renderNotifications(notifications);
  }
};
```

#### `Number` 대신 `parseInt` 를 사용한 이유

- `getAttribute` 로 가져온 값은 항상 `"문자열"`로 반환된다.

  `data-id`에 숫자 외 다른 값(ex. "123aaa")이 있을 경우 `parseInt`로 숫자만 추출 (-> `Number` 사용 시 `NaN` 반환)

- 소수점이 없어야 하므로 `정수만 반환`

<br/>

### setAttribute 와 getAttribute

: DOM 요소의 HTML 속성을 설정하거나 가져오는데 사용하는 메소드

```js
element.setAttribute("속성 이름", "속성 값");

const modal = document.getElementById("modal");
modal.setAttribute("data-id", 1); // modal 요소에 data-id="1" 추가
```

```js
element.getAttribute("속성 이름");
const modal = document.getElementById("modal");
const id = modal.getAttribute("data-id"); // data-id 속성의 값 가져오기
console.log(id); // "1"
```
