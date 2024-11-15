import React from "react";

// styles
import styles from "../styles/users.module.scss";
import { useTypedSelector } from "../hooks/useTypedSelector";

export const Users: React.FC = () => {
  const users = useTypedSelector((state) => state.users.users)


  return (
    <div className={styles.users}>
      <div className={styles.star}>⛦</div>
      {
        users.map((user) => {
          return (
          <ul>
            <li>
              {user.username}
            </li>
          </ul>
          )
        })
      }
    </div>
  );
};






// <ul>
// <li>User Userovic</li>  
// <li>User Userovic</li>
// <li>User Userovic</li>
// <li>User Userovic</li>
// <li>User Userovic</li>
// <li>User Userovic</li>
// <li>User Userovic</li>
// <li>User Userovic</li>
// <li>User Userovic</li>
// <li>User Userovic</li>
// <li>User Userovic</li>
// <li>User Userovic</li>
// <li>User Userovic</li>
// <li>User Userovic</li>
// <li>User Userovic</li>
// <li>User Userovic</li>
// <li>User Userovic</li>
// <li>User Userovic</li>
// <li>User Userovic</li>
// <li>User Userovic</li>
// <li>User Userovic</li>
// </ul>