import { createSlice } from "@reduxjs/toolkit";

const Searchslice=createSlice({
    name:"search",
    initialState:{
        search:" ",
    },
    reducers:{
        setsearch:(state,action)=>{
            state.search=action.payload;
        }
    }
})

export const {setsearch}=Searchslice.actions;
export default Searchslice.reducer;