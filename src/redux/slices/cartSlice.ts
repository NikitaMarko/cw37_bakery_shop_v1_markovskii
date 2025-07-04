import {createSlice} from "@reduxjs/toolkit";
import {ShopCartProdType} from "../../utils/shop-types";


const initialState:{cartProducts:ShopCartProdType[]} = {
    cartProducts: []
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCart:(state, action) =>{
            state.cartProducts = action.payload;
        },
        resetCart:(state) =>{
            state.cartProducts = [];
        }
    }
})

export const {setCart, resetCart} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;