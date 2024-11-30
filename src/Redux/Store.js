import { configureStore } from "@reduxjs/toolkit";
import estateReducer  from "./Slice";

export const store = configureStore({
    reducer:{
        estate:estateReducer
    },
})