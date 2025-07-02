
import  {updateProfile, signOut, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword} from 'firebase/auth';
import type {LoginData, SignupData} from "../utils/shop-types.ts";
import {auth} from "../configurations/firebase-config.ts";


const loginWithEmail = async (data: LoginData)=> {
    const result = await signInWithEmailAndPassword(auth,data.email, data.password);
    const user = result.user;
    return Promise.resolve({email: user.email, displayName: user.displayName})
}

const loginWithGoogle = async () => {
   const provider = new GoogleAuthProvider();
   const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log(auth.currentUser);
    return Promise.resolve({email: user.email, displayName: user.displayName})
}

export const login = async (data:LoginData) => {
    return data.email === "GOOGLE"? loginWithGoogle() : loginWithEmail(data)
}

export const registerWithEmailAndPassword = async (data:LoginData) => {
     await createUserWithEmailAndPassword(auth, data.email, data.password)
    return data.email;
}

export const exit = async () => {
    await signOut(auth);
}

export const updateUserProfile = async (data:SignupData) => {
    const user = auth.currentUser;
    if(user)
    await updateProfile(user, {displayName: data.firstName, photoURL:null})
    else throw new Error ("User to update not found")
}