import React from "react";

// styles
import styles from "../styles/users.module.scss";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { NavLink } from "react-router-dom";

export const Users: React.FC = () => {
  const users = useTypedSelector((state) => state.users.users)



  return (
    <div className={styles.users}>
      <div className={styles.star}>⛦</div>
      {
        users.map((user) => {
          return (
          <ul>
            <li className={styles.user_li}>
              <NavLink to={`/${user.id}`}>{user.username}</NavLink>
            </li>
          </ul>
          )
        })
      }
    </div>
  );
};
