import { configureStore} from "@reduxjs/toolkit";
import quantityReducer from '../components/quantitySlice'

export const store=configureStore({

    reducer:{
       quantity :quantityReducer
    }
})