import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customAxios from '../../services/customAxios'

export const sendSaran = createAsyncThunk(
    "feedback/sendSaran",
    async (data) => {
        const res = await customAxios.post('/saran', data);
        return res;
    }
)

const initialState = {
    loading: false,
    error: false,
    success: false

}
export const feedbackSlice = createSlice({
    name: "feedback",
    initialState,
    reducers: {
       
    },
    extraReducers: {
        [sendSaran.pending]: (state) => {
            state.loading = true;
        },
        [sendSaran.fulfilled]: (state, action) => {
            state.loading = false;
            alert("Pesan terkirim.");

        }
      
    }
});

export const {} = feedbackSlice.actions
export default feedbackSlice.reducer