"use strict";

var notificationCheckbox = document.getElementById("notification-checkbox");

var notificationsEnabled = Notification.permission === "granted" && localStorage.getItem("taskNotifications") === "on";
notificationCheckbox.checked = notificationsEnabled;

notificationCheckbox.addEventListener("change", function (e) {
    if (e.target.checked) {
        if (!("Notification" in window)) {
            alert("This browser does not support notifications.");
            return;
        }

        Notification.requestPermission().then(function (permission) {
            if (permission === "granted") {
                localStorage.setItem("taskNotifications", "on");
            }
        });
    } else {
        localStorage.setItem("taskNotifications", "off");
    }
});
