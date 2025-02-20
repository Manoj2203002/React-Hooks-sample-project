import { auth } from "./Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
export const docreateUserWithEmailAndPassword=async(email,password)=>{
    return( createUserWithEmailAndPassword(auth,email,password));
};

export const dosignInWithEmailAndPassword =(email,password)=>{
    return(signInWithEmailAndPassword(auth,email,password));
}