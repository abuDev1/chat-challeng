// library
import React from 'react'

// components
import { OpenedChat } from './OpenedChat'

//styles 
import styles from '../styles/chats.module.scss'
import { useParams } from 'react-router-dom';

export const Chats = () => {
  const {id} = useParams();

  if (id !== undefined) {
  return (
    <div>
        <OpenedChat />
    </div>
  )
}
return <h4 className={styles.choose_user}>⬅ Выберите пользователя</h4> 
}
