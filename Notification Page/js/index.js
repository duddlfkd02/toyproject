import { MockData } from "../mockData.js";
import { showModal } from "./modal.js";

const notificationList = document.getElementById("notification-list");
const unreadCountSpan = document.getElementById("unread-count");
const markAllReadButton = document.getElementById("mark-all-read");

// 1. 읽음 확인 함수
const markAsRead = (id, notifications) => {
  const notification = notifications.find((notifiId) => notifiId.id === id);
  if (notification && !notification.read) {
    notification.read = true;
    renderNotifications(notifications);
  }
};

export const renderNotifications = (notifications) => {
  notificationList.innerHTML = "";

  const unreadCount = notifications.filter((notifi) => !notifi.read).length;
  unreadCountSpan.textContent = unreadCount;

  notifications.forEach((notification) => {
    const li = document.createElement("li");
    li.className = `notification ${notification.read ? "read" : "unread"}`;

    li.innerHTML = `
     <img src="${notification.image}" alt="${notification.user}'s profile image" class="user-image" />
      <div class="notification-content">
        <strong>${notification.user}</strong> ${notification.action}
        ${notification.details ? `<span>${notification.details}</span>` : ""}
        <small>${notification.time}</small>
      </div>
`;

    li.addEventListener("click", () => showModal(notification));

    notificationList.appendChild(li);
  });
};

// 3. 전부 읽음 함수
markAllReadButton.addEventListener("click", () => {
  MockData.forEach((notifi) => (notifi.read = true));
  renderNotifications(MockData);
});

renderNotifications(MockData);
