import { createSlice } from "@reduxjs/toolkit";

const initialState={
        propertyList:[],
        SearchData:[]
}


export const ReduxSlice = createSlice({
    name:'estate',
    initialState:initialState,
    reducers:{
        propertyData:(state,action)=>{
            state.propertyList = action.payload.propertyLists
        },
        searchData:(state,action)=>{
            state.SearchData= action.payload.searchLists
        }
    }
})

export const {propertyData,searchData} = ReduxSlice.actions
export default ReduxSlice.reducer