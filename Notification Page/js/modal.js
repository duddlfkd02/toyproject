import { MockData } from "../mockData.js";
import { renderNotifications } from "./index.js";

export const showModal = (notification) => {
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");

  //모달 콘텐츠 동적 추가
  modalBody.innerHTML = `
  <h2>${notification.user}</h2>
  <p>${notification.action}</p>
    ${notification.details ? `<p>Details: ${notification.details}</p>` : ""}
    ${notification.message ? `<p>Message: ${notification.message}</p>` : ""}
    <small>${notification.time}</small>
  `;

  modal.setAttribute("data-id", notification.id);

  modal.classList.remove("hidden");
  modal.classList.add("show");
};

//모달 닫기 함수
export const closeModal = (id, notifications) => {
  const modal = document.getElementById("modal");
  modal.classList.remove("show");
  modal.classList.add("hidden");

  const notification = notifications.find((notifi) => notifi.id === id);
  if (notification && !notification.read) {
    notification.read = true;
    renderNotifications(notifications);
  }
};

export const modalCloseButton = document.getElementById("modal-close");
modalCloseButton.addEventListener("click", () => {
  const modal = document.getElementById("modal");
  const notificationId = modal.getAttribute("data-id");
  closeModal(notificationId, MockData);
});
