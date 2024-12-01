const fetchNotifications = async () => {
  try {
    const response = await fetch("db.json");
    if (!response.ok) {
      throw new Error("알림 데이터 불러오기 실패");
    }
    return await response.json();
  } catch (error) {
    console.log("알림 데이터 불러오기 오류 발생", error);
    return [];
  }
};

const renderNotifications = (notifications) => {
  const notificationList = document.getElementById("notification-list");
  const unreadCountSpan = document.getElementById("unread-count");

  notificationList.innerHTML = "";

  const unreadCount = notifications.filter((notifi) => !notifi.read).length;
  unreadCountSpan.textContent = unreadCount;

  notifications.forEach((notification) => {
    const li = document.createElement("li");
    li.className = `notification ${notification.read ? "read" : "unread"}`;

    li,
      (innerHTML = `
 <img src="${notification.image}" alt="${notification.user}'s profile image" class="user-image" />
      <div class="notification-content">
        <strong>${notification.user}</strong> ${notification.action}
        ${notification.details ? `<span>${notification.details}</span>` : ""}
        <small>${notification.time}</small>
      </div>
`);

    li.addEventListener("click", () => markAsRead(notifications.id, notifications));

    notificationList.appendChild(li);
  });

  const markAsRead = (notifications, id) => {
    const notification = notifications.find((notifiId) => notifiId.id === id);
    if (notification && !notification.read) {
      notification.read = true;
      renderNotifications(notifications);
    }
  };

  document.getElementById("mark-all-read").addEventListener("click", () => {
    alert("read");
    notifications.forEach((notifi) => (notifi.read = true));
    renderNotifications(notifications);
  });

  // let notifications = [];

  fetchNotifications().then((data) => {
    notifications = data;
    renderNotifications(notifications);
  });
};
