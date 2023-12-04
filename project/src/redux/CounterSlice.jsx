import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";


const counterSlice = createSlice({
    name: "counter", 
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.akif += 1
        },
        decreament: (state) => {
            state.akif -= 1
        },
        increaseByAkhmad: (state, action) => {
            state.akif += action.payload
        }
    }
})

export const {increment, decreament, increaseByAkhmad} = counterSlice.actions
export default counterSlice.reducer