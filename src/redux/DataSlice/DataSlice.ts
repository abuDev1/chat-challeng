// import { createAsyncThunk } from "@reduxjs/toolkit"

import React from "react";
import { useTypedDispatch } from "../../hooks/useTypedDispatch";

// interface initialStateTyped {
//     myMessage: Array<{
//         // message_id: number
//         // user_id: number
//         timestamp: string
//         message: string
//     }>
//     loading: boolean
// }

// const initialState: initialStateTyped = {
//     myMessage: [],
//     loading: false
// }

// export const sendMyMessage = createAsyncThunk(
//     'FETCH_MY_MESSAGE',
//     async() => {
//         const response = await fetch("http://localhost:8000/advertisement", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 timestamp: "20.00",
//                 message: myMessage
//             })})
//     }
// )

// interface FormProps {
//     myMessage: string
// }


export const sendData: React.FC = (myMessage): any => {
    return (dispatch: any) => {
      dispatch({
        type: "send/data/start",
      });
  
      fetch("http://localhost:8000/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            timestamp: "20.00",
            message: myMessage
        })})
          .then((res) => res.json())
          .then((data) => {
            dispatch({
              type: "send/data/success",
              payload: data,
            });
          })
    };
  };
  