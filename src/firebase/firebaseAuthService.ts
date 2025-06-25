
import  {signOut, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword} from 'firebase/auth';
import type {LoginData} from "../utils/shop-types.ts";
import {auth} from "../configurations/firebase-config";



const loginWithEmail = async (data: LoginData)=> {
    await signInWithEmailAndPassword(auth,data.email, data.password);
    return data.email;

}

const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth,provider);
    const user = result.user
    console.log(auth.currentUser);
    return Promise.resolve(user.email)
}

export const login = async (data:LoginData) => {
    return data.email === "GOOGLE"? loginWithGoogle() : loginWithEmail(data)
}
export const registerWithEmailAndPassword = async (data:LoginData) =>{
    // await createUserWithEmailAndPassword(auth,data.email,data.password);
    console.log("Registration was successfully ", data.email);
    return data.email;
}

export const exit = async ()=>{
    await signOut(auth)
}