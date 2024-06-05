import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    city:'',
}
const citySlice = createSlice({
    name:"city",
    initialState,
    reducers:{
        addCity:(state,action)=>{
            state.city = action.payload.data;
        }


    }
});

export const {addCity} = citySlice.actions;

export default citySlice.reducer;