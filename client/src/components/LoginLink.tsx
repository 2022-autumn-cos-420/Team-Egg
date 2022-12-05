import React from 'react';

import {Auth, signInWithPopup} from 'firebase/auth';
import {auth, provider, db} from '../firebase-config';
import {NavigateFunction, useNavigate} from 'react-router-dom';
import {User} from "../interfaces/User";
import { addDoc, getDocs, collection, query, where, CollectionReference, DocumentData } from 'firebase/firestore';


async function createUser({auth, c}: {auth: Auth, c: CollectionReference<DocumentData>}){
    if(!auth.currentUser || !auth.currentUser.emailVerified || !auth.currentUser.email) return;
    const u = {
        uid: auth.currentUser.uid,
        eduEmail: auth.currentUser.email.endsWith(".edu"),
        preferences: [],
        name: ""
    }
    await addDoc(c, u);
}

export async function firebaseUser({auth, setUserData}: {auth: Auth, setUserData: (userData: User | null) => void}){
    const c = collection(db, "StandardUser");
    const user = await getDocs(query(c, where("uid", "==", auth.currentUser?.uid)));
    let accessLevel :number = 0;
    if (user.size === 0){
        await createUser({auth, c});
    } else {
        const aCheck = collection(db, "AdvancedUser");
        const admin = await getDocs(query(aCheck, where("uid", "==", auth.currentUser?.uid)));
        if (admin.size !== 0)
            accessLevel = admin.docs[0].data().accessLevel;
    }
    if (auth.currentUser && auth.currentUser.email && auth.currentUser.emailVerified)
    setUserData({
        uid: auth.currentUser.uid,
        eduEmail: auth.currentUser.email.endsWith(".edu"),
        preferences: [],
        name: auth.currentUser.displayName,
        accessLevel: accessLevel
    });
}


function LoginWithGoogle({setUserData, navigate} : {
    setUserData: (userData: User|null) => void,
    navigate: NavigateFunction}){
    signInWithPopup(auth, provider).then((result) => {
        localStorage.setItem("isAuth","true");
        firebaseUser({auth, setUserData}).then((result) => {
            console.log("User Set");
            console.log(auth.currentUser?.uid);
        });
        navigate("/");
    });
}


function LoginLink({setUserData} : {setUserData: (userData: User | null) => void}){
    let navigate = useNavigate();
    return <div className="cursor-pointer" onClick={() =>{
        LoginWithGoogle({setUserData, navigate});
    }}>
        Log In
    </div>
}


export default LoginLink;