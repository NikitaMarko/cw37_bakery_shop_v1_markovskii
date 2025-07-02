import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./slices/authSlice.ts";
import {prodsReducer} from "./slices/productSlice.ts";


export const store = configureStore({
    reducer: {
        "auth":authReducer,
        "products":prodsReducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch