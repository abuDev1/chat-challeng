// library
import React, { useEffect, useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useTypedDispatch } from "../hooks/useTypedDispatch";
import { useParams } from "react-router-dom";
import { sendData } from "../redux/DataSlice/DataSlice";


// styles
import styles from "../styles/chating.module.scss";

export const Chating: React.FC = () => {
  const messages = useTypedSelector((state) => state.messages.messages);
  const users = useTypedSelector((state) => state.users.users);
  const dispatch = useTypedDispatch();
  const id = parseInt(useParams().id);

  const [myMessage, setMyMessage] = useState('')
  const handleClick = () => {
    dispatch(sendData(myMessage))
  }

  return (
    <div className={styles.chating}>
      <div className={styles.header_of_chating}>
        {users.filter((u) => u.id === id).map((item) => item.username)}
      </div>
      <div className={styles.messages_cont}>
        <div className={styles.user_message}>
          <div className={styles.user_of_message}>
            {" "}
            {users.filter((u) => u.id === id).map((item) => item.username)}
          </div>
          <div className={styles.message_of_user}>
            <p>
              {messages
                .filter((el) => el.message_id === id)
                .map((item) => item.message)}
            </p>
          </div>
          <div className={styles.message_time}>
            {messages
              .filter((el) => el.message_id === id)
              .map((item) => item.timestamp)}
          </div>
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
        <input
          placeholder="Введите ваше сообщение ..."
          className={styles.placeholder}
          value={myMessage}
          onChange={(e) => setMyMessage(e.target.value)}
        />
        <button onSubmit={handleClick}>Отправить</button>
      </div>
    </div>
  );
};
