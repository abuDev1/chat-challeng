// library
import React from "react";

// styles
import styles from "../styles/chating.module.scss";

export const Chating = () => {
  return (
    <div className={styles.chating}>
      <div className={styles.header_of_chating}>User Userovich</div>
      <div className={styles.messages_cont}>
        <div className={styles.user_message}>
          <div className={styles.user_of_message}>User Userovich</div>
          <div className={styles.message_of_user}>
            <p>Привет! Как дела? Можешь помочь?</p>
          </div>
          <div className={styles.message_time}>11.54</div>
        </div>
        <div className={styles.my_message}>
          <div className={styles.user_of_message}>Me</div>
          <div className={styles.message_of_user}>
            <p>Привет! В чем вопрос?</p>
          </div>
          <div className={styles.message_time}>12.30</div>
        </div>
      </div>
      <div className={styles.placeholder_cont}>
        <input placeholder="Введите ваше сообщение ..." className={styles.placeholder}/>
        <button>Отправить</button>
      </div>
    </div>
  );
};
