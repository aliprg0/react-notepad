import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        index: 1,
        title: "Clean The Kitchen"
    }
];

export const noteSlice = createSlice({
    name:"note",
    initialState,
    reducers:{
        addNote: (state,action) => {
            state.push(action.payload)
        },
        deleteNote: (state,action) => {
            return state.filter((note,index) => index !== action.payload)
        },
    },
});

export const {addNote , deleteNote} = noteSlice.actions
export default noteSlice.reducer