import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customAxios from '../../services/customAxios'

export const getDoas = createAsyncThunk(
    "categories/getDoas",
    async (data) => {
        const res = await customAxios.get('category/'+data.id);
        console.log(res);
        return res.data.data
    }
)

const initialState = {
    loading: true,
    error: false,
    data: {
        doa: [],
        cateogory: {}
    }
}
export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        sortDoa: (state) => {
            if(!state.loading){
                state.data.doa = state.data.doa.sort((a, b) => a.id - b.id);
            }
        }
    },
    extraReducers: {
        [getDoas.pending]: (state) => {
            state.loading = true;
        },
        [getDoas.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        }
      
    }
});

export const {sortDoa} = categorySlice.actions
export default categorySlice.reducer