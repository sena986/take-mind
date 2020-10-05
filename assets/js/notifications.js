const body = document.querySelector("body");

const fireNotification = (text, color) => {
  const notification = document.createElement("div");
  notification.innerText = text;
  notification.style.backgroundColor = color;
  notification.className = "notification";
  body.appendChild(notification);
};

export const handelNewUser = ({ nickname }) =>
  fireNotification(`${nickname}님이 접속하였습니다.`, "rgb(0, 122, 255)");

export const handleDisconnected = ({ nickname }) =>
  fireNotification(`${nickname}님이 퇴장하였습니다.`, "rgb(255, 149, 0)");
