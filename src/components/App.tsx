import { Users } from "./Users";
import { Chats } from "./Chats";
import React, { useEffect } from "react";
// import { Route, Routes } from "react-router-dom";
import styles from "../styles/app.module.scss";
import { useTypedDispatch } from "../hooks/useTypedDispatch";
import { loadUsers } from "../redux/UsersSlice/UsersSlice";
import { Route, Routes } from "react-router-dom";

export const App: React.FC = () => {
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  });

  return (
    <Routes>
      <Route
        path="/:id?"
        element={
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
        }
      />
    </Routes>
  );
};
