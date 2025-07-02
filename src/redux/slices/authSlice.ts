import {createSlice} from "@reduxjs/toolkit";
type AuthState = {
    authUser: {
        email:string,
        displayName:string
    } | null
}
const initialState:AuthState = {
    authUser: null
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        loginAction: (state, action) => {
            state.authUser = action.payload
        },
        logoutAction: (state) => {
            state.authUser = null
        }
    }
});

export const {loginAction, logoutAction} = authSlice.actions;
export const authReducer = authSlice.reducer;