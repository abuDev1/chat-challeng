import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface initialStateTyped {
  messages: Array<{
    message_id: number;
    user_id: number;
    timestamp: string;
    message: string;
  }>;
  loading: boolean;
}

const initialState: initialStateTyped = {
  messages: [],
  loading: false,
};

export const loadMessages = createAsyncThunk(
    'FETCH_MESSAGES',
    async() => {
        const response = await fetch('http://localhost:8000/messages')

        return response.json()
    }
)

export const MessagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers:{},

    extraReducers: (builder) => {
        builder
        .addCase(loadMessages.pending, (state) => {
            state.loading = true
        })
        .addCase(loadMessages.fulfilled, (state, action) => {
            state.loading = false
            state.messages = action.payload
        })
    }
})

export default MessagesSlice.reducer