import SignUpForm from "../templates/SignUp";
import type {LoginData, SignupData} from "../../utils/shop-types.ts";
import React from "react";
import {registerWithEmailAndPassword} from "../../firebase/firebaseAuthService";
import {useNavigate} from "react-router-dom";
import {createUserWithEmailAndPassword} from "firebase/auth";
// import firebase from "firebase/compat";
import {auth} from "../../configurations/firebase-config";
import { updateProfile } from "firebase/auth";
import { FirebaseError } from "firebase/app";


const Registration = () => {
    const navigate = useNavigate();
    // const signUpSubmit = (data:SignupData) => {
    //     console.log(JSON.stringify(data))
    // }
    const signUpWithEmail = async (data: SignupData) => {
        const userEmailPass:LoginData ={
            email:data.email,
            password:data.password
        }
        try{
            const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
            const user = userCredential.user;
            const fullName = [data.firstName, data.lastName].filter(Boolean).join(' ');
            await updateProfile(user,{displayName:fullName});
            console.log('User was added: ', {displayName:user.displayName, email:user.email});

            await registerWithEmailAndPassword(userEmailPass);
            navigate('/login');
        }
        catch (error) {
            if (error instanceof FirebaseError) {
                switch (error.code) {
                    case 'auth/email-already-in-use':
                        alert('Этот email уже зарегистрирован. Попробуйте войти или восстановить пароль.');
                        break;
                    case 'auth/invalid-email':
                        alert('Неверный формат email.');
                        break;
                    case 'auth/weak-password':
                        alert('Пароль слишком простой. Минимум 6 символов.');
                        break;
                    default:
                        alert('Ошибка регистрации: ' + error.message);
                }
            } else {
                console.error('Неизвестная ошибка:', error);
            }
        }
    };
    return (
        <div>
            <SignUpForm submitFunc={signUpWithEmail}/>
            </div>
    );
};

export default Registration;