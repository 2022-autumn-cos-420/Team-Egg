import React from 'react';

import {Auth, signInWithPopup} from 'firebase/auth';
import {auth, provider, db} from '../firebase-config';
import {NavigateFunction, useNavigate} from 'react-router-dom';
import {User} from "../interfaces/User";
import { addDoc, getDocs, collection, query, where, CollectionReference, DocumentData } from 'firebase/firestore';


async function createUser({auth, c}: {auth: Auth, c: CollectionReference<DocumentData>}){
    if(!auth.currentUser || !auth.currentUser.emailVerified || !auth.currentUser.email) return;
    const u : User = {
        uid: auth.currentUser.uid,
        eduEmail: auth.currentUser.email.endsWith(".edu"),
        preferences: [],
        name: ""
    }
    await addDoc(c, u);
}

async function firebaseUser({auth, c}: {auth: Auth, c: CollectionReference<DocumentData>}){
    const user = await getDocs(query(c, where("uid", "==", auth.currentUser?.uid)));
    if (user.size === 0){
        await createUser({auth, c});
    } else {
        console.log("user exists");
    }
}


function LoginWithGoogle({setIsAuth, navigate} : {setIsAuth: (isAuth: boolean) => void, 
navigate: NavigateFunction}){
    const c = collection(db, "StandardUser");
    signInWithPopup(auth, provider).then((result) => {
        localStorage.setItem("isAuth","true");
        setIsAuth(true);
        firebaseUser({auth, c}).then((result) => {
            
        });
        navigate("/");
    });
}


function LoginLink({isAuth, setIsAuth} : {isAuth: boolean, setIsAuth: (isAuth: boolean) => void}){
    let navigate = useNavigate();
    return <div className="cursor-pointer" onClick={() =>{
        LoginWithGoogle({setIsAuth, navigate});
    }}>
        Log In
    </div>
}


export default LoginLink;