// library
import React from 'react'

// components
import { OpenedChat } from './OpenedChat'

//styles 
import styles from '../styles/chats.module.scss'

export const Chats = () => {
  return (
    <div>
        <OpenedChat />
        {/* <h4 className={styles.choose_user}>⬅ Выберите пользователя</h4> */}
    </div>
  )
}
