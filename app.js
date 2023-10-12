const notifications = document.querySelectorAll(".notification");
const countOpenNotification = document.querySelector(".number__of__notifications");
const allMessageMarker = document.querySelector(".all__message__marker");
const markers = document.querySelectorAll(".marker");
const comment = document.querySelector(".comment");

function allNotifactionRead() {
    markers.forEach(marker => marker.classList.remove("marker"));
    notifications.forEach(notification => notification.classList.add("change__color"));
}

function countReadNotification(count) {
    countOpenNotification.textContent = count;
}

let count = 7
allMessageMarker.addEventListener("click", () => {
    count = 0;
    countReadNotification(count);
    allNotifactionRead()
});

notifications.forEach(notification => {
    notification.addEventListener("click", () => {
        count--;
        countReadNotification(count)
        const marker = notification.childNodes[3].childNodes[1].firstChild.nextSibling.childNodes[2];
        notification.classList.add("change__color");
        marker.classList.remove("marker");
    })
});

notifications[3].addEventListener("click", () => {
    comment.classList.toggle("show");
})






