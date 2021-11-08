import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customAxios from '../../services/customAxios'

export const getDoa = createAsyncThunk(
    "doa/getDoa",
    async (data) => {
        const res = await customAxios.get('doa/'+data.id);
        console.log(res);
        return res.data.data
    }
)

const initialState = {
    loading: true,
    error: false,
    data: {
        doa: {},
        detail: []
    }
}
export const doaSlice = createSlice({
    name: "doa",
    initialState,
    reducers: {
        sortDetail: (state) => {
            if(!state.loading){
                state.data.detail = state.data.detail.sort((a,b) => a.id-b.id);
            }
        }
    },
    extraReducers: {
        [getDoa.pending]: (state) => {
            state.loading = true;
        },
        [getDoa.fulfilled]: (state, action) => {
            state.loading = false;

            if(action.payload.doa !== null){
                state.data = action.payload;
            }
        }
      
    }
});

export const {sortDetail} = doaSlice.actions
export default doaSlice.reducer