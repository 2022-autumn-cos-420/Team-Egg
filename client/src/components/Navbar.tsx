import React, {useState} from "react";

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {auth} from "../firebase-config";
import {onAuthStateChanged, signOut} from 'firebase/auth';
import {User} from "../interfaces/User";

import HomePage from "../pages/HomePage";
import LogInLink from "./LoginLink";
import FindMatch from "./Findmatch";
import CreateReview from "../pages/CreateReview";
import logo from  "../images/bbsLogo.png";
import MatchPage from "../pages/MatchPage";
import LoginLink from "./LoginLink";


function logout({setIsAuth}: {setIsAuth: (isAuth: boolean) => void}){
    signOut(auth);
}

export function SignedInMessage({isAuth , user} : {isAuth: boolean, user: User | null}){
    return <div data-testid="signedInMessage" className="text-sm absolute right-5 bottom-1">
        {isAuth? `Signed in as ${user?.displayname}`: "Not Signed In"}
    </div>
}

export default function Navbar(){
    const [isAuth, setIsAuth] = useState<boolean>(false);
    let currentUser : User | null = null;
    

    onAuthStateChanged(auth, (user) => {
        if(user){
            localStorage.setItem("isAuth","true");
            if (auth.currentUser != null)
            currentUser = {
                displayname: auth.currentUser.displayName,
                email: auth.currentUser.email,
                uid: auth.currentUser.uid
            }
            setIsAuth(true);
        } else {
            localStorage.clear();
            currentUser = null;
            setIsAuth(false);
        }
    });

    return <Router>
        <nav className="relative p-4 items-center 
        flex flex-col w-full justify-between min-w-fit
        bg-crt_BB_lightBlue text-white
        whitespace-nowrap">
        <div className="flex flex-row items-cetner w-full justify-between">
            <div className="min-w-fit mr-2">
                <Link to="/"><img className="w-[50px]" src={logo} alt="BlackBearSquare Logo"></img></Link>{/*logo spot */}
            </div>

            {/*Menu items*/}
            <div className="w-full flex italic justify-around text-2xl space-x-6">
                <Link to="/matchtest">Match Test</Link>
                <Link to="/createReviewTest">Create Review Test</Link>
                {!isAuth ? 
                <LoginLink isAuth={isAuth} setIsAuth={setIsAuth}></LoginLink> :
                <Link onClick={()=> {
                    logout({setIsAuth});
                }} to="/">Log Out</Link>
                }
                <SignedInMessage isAuth={isAuth} user={currentUser}/>
            </div>
        </div>
        </nav>
            
        <Routes>
            <Route path="/" element= {<HomePage></HomePage>}></Route>
            
            <Route path="/matchtest" element= {<MatchPage></MatchPage>}></Route>
            <Route path="/createReviewTest" element= {<CreateReview></CreateReview>}></Route>
        </Routes>
    </Router>
}