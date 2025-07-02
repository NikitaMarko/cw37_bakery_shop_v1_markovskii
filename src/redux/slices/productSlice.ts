import {createSlice} from "@reduxjs/toolkit";
import {ProductType} from "../../utils/shop-types.ts";
type productsState = {
    currProds: ProductType[]
}
const initialState: productsState = {currProds:[]};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        prodsUpd: (state, action) => {
            state.currProds = action.payload
        }
    }
})

export const {prodsUpd} = productSlice.actions;
export const prodsReducer = productSlice.reducer;