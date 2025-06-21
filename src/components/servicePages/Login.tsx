
import SignIn from "../templates/SignIn";
import type {LoginData} from "../../utils/shop-types.ts";
import {useAppDispatch} from "../../redux/hooks";
import {loginAction} from "../../redux/slices/authSlice";
import React from "react";

const Login = () => {
    const dispatch = useAppDispatch();
    const submitFn = (loginData: LoginData)=> {
        // console.log(JSON.stringify(loginData))
        dispatch(loginAction(loginData.email))
    }


    return (
        <div>
            <SignIn submitFn={submitFn}/>
            </div>
    );
};

export default Login;