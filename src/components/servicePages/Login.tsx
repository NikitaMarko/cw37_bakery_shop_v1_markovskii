
import SignIn from "../templates/SignIn";
import type {LoginData} from "../../utils/shop-types.ts";
import {useAppDispatch} from "../../redux/hooks";
import {loginAction} from "../../redux/slices/authSlice";
import React from "react";
import { useNavigate } from "react-router-dom";
import {login} from "../../firebase/firebaseAuthService";

const Login = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    // const submitFn = (loginData: LoginData)=> {
    //     console.log(JSON.stringify(loginData))
    //     dispatch(loginAction(loginData.email))
    // }
    const loginWithFirebase = async (loginData: LoginData) => {
        try{
            const email = await login(loginData);
            dispatch(loginAction(email));
            navigate('/');
        }catch(err){
            console.log(err) //Todo
        }
    }

    return (
        <div>
            <SignIn submitFn={loginWithFirebase}/>
        </div>
    );
};


export default Login;