// library
import React from "react";

// components
import { Chating } from "./Chating";

// styles
import styles from "../styles/openedChat.module.scss";

export const OpenedChat = () => {
  return (
    <div className={styles.chat_cont}>
      <div className={styles.header_of_chat}>Lincode Chat</div>
      <div className={styles.chating_cont}>
        <Chating />
      </div>
    </div>
  );
};
