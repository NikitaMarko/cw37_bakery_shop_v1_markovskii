import SignUpForm from "../templates/SignUp";
import type {LoginData, SignupData} from "../../utils/shop-types.ts";
import React from "react";
import {registerWithEmailAndPassword} from "../../firebase/firebaseAuthService";
import {useNavigate} from "react-router-dom";


const Registration = () => {
    const navigate = useNavigate();
    const signUpSubmit = (data:SignupData) => {
        console.log(JSON.stringify(data))
    }
    const signUpWithEmail = async (data: SignupData) => {
        const userEmailPass:LoginData ={
            email:data.email,
            password:data.password
        }
        try{
            await registerWithEmailAndPassword(userEmailPass);
            navigate('/login');
        }catch(error){
            console.log(error)
        }
    }
    return (
        <div>
            <SignUpForm submitFunc={signUpWithEmail()}/>
            </div>
    );
};

export default Registration;