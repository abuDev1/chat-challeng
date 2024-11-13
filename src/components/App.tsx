import { Users } from "./Users";
import { Chats } from "./Chats";
import React from "react";
// import { Route, Routes } from "react-router-dom";
import styles from "../styles/app.module.scss";

export const App: React.FC = () => {
  return (
    <div className={styles.app_cont}>
      <div className={styles.row}>
        <div className={styles.colomn_one}>
          <Users />
        </div>
        <div className={styles.colomn_two}>
          <Chats />
        </div>
      </div>
    </div>
  );
};
