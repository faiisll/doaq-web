import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    path: "/",
    keyword: ""
}
export const navbarSlice = createSlice({
    name: "navbar",
    initialState,
    reducers: {
        changeActive: (state, action) => {
            state.path = action.payload;
        },
        changeKey: (state, action) => {
            state.keyword = action.payload;
        }
    }
});

export const {changeActive, changeKey} = navbarSlice.actions
export default navbarSlice.reducer