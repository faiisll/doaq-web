import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    path: "/",
    keyword: "",
    result: []
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
        },
        setResult: (state, action) => {
            const res = action.payload.filter(item => {
                return (item.judul.toLowerCase()).includes(state.keyword.toLowerCase());
            });

            if(state.keyword !== ""){
                state.result = res;
            }else{
                state.result = [];
            }
        }
    }
});

export const {changeActive, changeKey, setResult} = navbarSlice.actions
export default navbarSlice.reducer