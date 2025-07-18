import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./slices/authSlice";
import {prodsReducer} from "./slices/productSlice";
import {cartReducer} from "./slices/cartSlice";


export const store = configureStore({
    reducer: {
        "auth":authReducer,
        "products":prodsReducer,
        "cart":cartReducer,
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch