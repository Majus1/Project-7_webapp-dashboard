// Variables
const alertCancleButton = document.querySelector("#alert-cancle-button");
const alertNotificationBar = document.querySelector("#alert-notification-bar");
// THE BASE
alertCancleButton.addEventListener("click", ()=> {
    alertNotificationBar.style.display="none";
});