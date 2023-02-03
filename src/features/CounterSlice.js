import { createSlice } from "@reduxjs/toolkit";

const dataSlice=createSlice({
    name:"dataSlice",
    initialState : [{name:'name1',id:1},{name:'name2',id:'2'}],
    reducers:{
        editData: (state,action)=>{
            console.log('Edit :')
            console.log(action.payload)
            state[action.payload.index]=action.payload.newObj;
            return (state)
        },
        addData:(state,action)=>{
            console.log(action.payload)
            return (state)
        }
    }
})
export const {editData,addData}=dataSlice.actions;
export default dataSlice.reducer