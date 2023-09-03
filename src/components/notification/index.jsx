import Notification from "rc-notification";
import React from "react";

import NotificationContent from "./NotificationContent";
import NotificationCloseButton from "./NotificationCloseButton";

import { TimesDelete } from "../icons";

import "./style.css";

let notification = null;

Notification.newInstance(
  {
    style: {
      top: 40,
      right: 8,
      bottom: "auto",
      position: "fixed",
    },
    maxCount: 3,
    prefixCls: "ui-notification",
    closeIcon: (
      <NotificationCloseButton>
        <TimesDelete size={16} />
      </NotificationCloseButton>
    ),
  },
  (n) => (notification = n)
);

export function open({ message, description, type, duration }) {
  notification.notice({
    content: (
      <NotificationContent
        type={type}
        message={message}
        description={description}
      />
    ),
    style: { right: 0 },
    // duraction должен передаваться в милисекундах
    duration: duration !== undefined ? duration / 1000 : 4,
    closable: true,

    onClose() {},
  });
}
