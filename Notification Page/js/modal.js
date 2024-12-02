import { renderNotifications } from "./index.js";
import { MockData } from "../mockData.js";

export const showModal = (notification) => {
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");

  modalBody.innerHTML = `
    <h2>${notification.user}</h2>
    <p>${notification.action}</p>
    ${notification.details ? `<p>Details: ${notification.details}</p>` : ""}
    ${notification.message ? `<p>Message: ${notification.message}</p>` : ""}
    <small>${notification.time}</small>
  `;

  if (notification.id) {
    modal.setAttribute("data-id", notification.id); // ID 설정
  } else {
    console.error("Notification ID is undefined");
  }

  modal.classList.remove("hidden");
  modal.classList.add("show");
};

export const closeModal = (id, notifications) => {
  const modal = document.getElementById("modal");
  modal.classList.remove("show");
  modal.classList.add("hidden");

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

export const modalCloseButton = document.getElementById("modal-close");
modalCloseButton.addEventListener("click", () => {
  const modal = document.getElementById("modal");
  const notificationId = modal.getAttribute("data-id");

  if (!notificationId) {
    console.error("No data-id found on modal");
    return;
  }

  closeModal(notificationId, MockData);
});
