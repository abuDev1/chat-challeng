import { configureStore } from "@reduxjs/toolkit";
import UsersReducer from '../redux/UsersSlice/UsersSlice'

export const store = configureStore({
    reducer: {
        users: UsersReducer,
        // chat: ChatReducer
    }
}) 

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch