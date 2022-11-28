import React from 'react';

import {signInWithPopup} from 'firebase/auth';
import {auth, provider} from '../firebase-config';
import {NavigateFunction, useNavigate} from 'react-router-dom';

function LoginWithGoogle({setIsAuth, navigate} : {setIsAuth: (isAuth: boolean) => void, 
navigate: NavigateFunction}){
    signInWithPopup(auth, provider).then((result) => {
        localStorage.setItem("isAuth","true");
        setIsAuth(true);
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