import {createSlice} from "@reduxjs/toolkit";
import {ProductType} from "../../utils/shop-types";
type productsState = {
    currProds: ProductType[]
}
const initialState: productsState = {currProds:[]};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        prodsUpd: (state, action) => {
            state.currProds = action.payload.map((prods:ProductType)=>({
                ...prods, quantity:prods.quantity??0
            }))
        }
    }
})

export const {prodsUpd} = productSlice.actions;
export const prodsReducer = productSlice.reducer;