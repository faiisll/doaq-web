import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customAxios from '../../services/customAxios'

export const getCategories = createAsyncThunk(
    "home/getCategories",
    async () => {
        const res = await customAxios.get('category');

        if(res.status === 200) {
            // console.log(res);
            return res.data.data;
        }
    }
);

export const getAllDoas = createAsyncThunk(
    "home/allDoas",
    async() => {
        const res = await customAxios.get('doa');

        if(res.status === 200){
            return res.data.data;
        }
    }
)



const initialState = {
    loading: false,
    error: false,
    categories: [
    ],
    doas: []
}
export const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        
    },
    extraReducers: {
        [getCategories.pending]: (state, action) => {
            state.loading = true;
        },
        [getCategories.fulfilled]: (state, action) => {
            state.loading = false;
            state.categories = action.payload;
        },
        [getAllDoas.pending]: (state) => {
            state.loading = true;
        },
        [getAllDoas.fulfilled]: (state, action) => {
            state.loading = false;
            let doas = action.payload.sort((a, b) => a.id-b.id);
            state.doas = doas;
        }
    }
});

export const {} = homeSlice.actions
export default homeSlice.reducer