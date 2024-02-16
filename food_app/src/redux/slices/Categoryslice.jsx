import { createSlice } from "@reduxjs/toolkit";

const Categoryslice=createSlice({
    name:"category",
    initialState:{
       category:"All",
    },

    reducers:{
        setcategory:(state,action)=>{
            state.category=action.payload;
        }
    }
}
)


export const {setcategory}=Categoryslice.actions;
export default Categoryslice.reducer;