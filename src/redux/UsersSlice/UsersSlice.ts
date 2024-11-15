import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import React from "react"

interface initialStateTyped {
    users: Array<{
    username: string,
    id: number
    }>,
    loading: boolean
}


const initialState: initialStateTyped = {
    users: [],
    loading: false
}

export const loadUsers = createAsyncThunk(
    'FETCH_USERS',
    async() => {
        const response = await fetch('http://localhost:8000/users')

        return response.json()
    }
) 

export const UserSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(loadUsers.pending, (state) => {
            state.loading = true
        })
        .addCase(loadUsers.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
        })
    }
})

export default UserSlice.reducer