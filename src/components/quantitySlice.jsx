import { createSlice } from "@reduxjs/toolkit";

const initialState={
    quantity:0
}


export const quantitySlice =createSlice({
    name:"quantity",
    initialState:initialState,
    reducers:{
        increment:(state)=>
        {
            state.quantity +=1;
        },
        decrement:(state)=>
        {
          
             state.quantity -=1; 
           
        }
    }
})

export const {increment,decrement}=quantitySlice.actions;
export default quantitySlice.reducer;