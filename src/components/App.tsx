import { Users } from "./Users";
import { Chats } from "./Chats";
import { Layout } from "./Layout";
import React, { useEffect } from "react";
// import { Route, Routes } from "react-router-dom";
import styles from "../styles/app.module.scss";
import { useTypedDispatch } from "../hooks/useTypedDispatch";
import { loadUsers } from "../redux/UsersSlice/UsersSlice";
import { Route, Routes } from "react-router-dom";
import { loadMessages } from "../redux/ChatSlice/ChatSlice";
import { useTypedSelector } from "../hooks/useTypedSelector";

export const App: React.FC = () => {
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(loadUsers());
    dispatch(loadMessages())
  });

  const loadingChat = useTypedSelector((state) => state.messages.loading)
  const loadingUsers = useTypedSelector((state) => state.users.loading)


  // if (loadingUsers || loadingChat) {
  //   return(
  //     <div>
  //       <Layout />
  //     </div>
  //   )
  // }  
  
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
