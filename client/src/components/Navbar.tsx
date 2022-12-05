import React, {useState} from "react";

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {auth, db} from "../firebase-config";
import {onAuthStateChanged, signOut} from 'firebase/auth';

import HomePage from "../pages/HomePage";
import LogInLink from "./LoginLink";
import FindMatch from "./Findmatch";
import CreateReview from "../pages/CreateReview";
import logo from  "../images/bbsLogo.png";
import MatchPage from "../pages/MatchPage";
import ProfilePage from "../pages/ProfilePage";
import LoginLink, {firebaseUser} from "./LoginLink";

import {User} from "../interfaces/User";


function logout(){
    signOut(auth);
}

export function SignedInMessage({currentUser} : {currentUser: User | null}){
    return <div data-testid="signedInMessage" className="text-sm absolute right-5 bottom-1">
        {currentUser? `Signed in as ${currentUser.name}`: "Not Signed In"}
    </div>
}

export default function Navbar(){
    const [userData, setUserData]= useState<User|null>(null)

    onAuthStateChanged(auth, (user) => {
        if(user){
            localStorage.setItem("isAuth","true");
            firebaseUser({auth, setUserData})
        } else {
            localStorage.clear();
            setUserData(null);
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
                {userData ? <Link to="/profile">Profile</Link> : ""}
                {!userData ? 
                <LoginLink setUserData={setUserData}></LoginLink> :
                <Link onClick={()=> {
                    logout();
                }} to="/">Log Out</Link>
                }
                <SignedInMessage currentUser={userData}/>
            </div>
        </div>
        </nav>
            
        <Routes>
            <Route path="/" element= {<HomePage></HomePage>}></Route>
            <Route path="/matchtest" element= {<MatchPage></MatchPage>}></Route>
            <Route path="/createReviewTest" element= {<CreateReview></CreateReview>}></Route>
            <Route path="/profile" element={<ProfilePage currentUser={userData}></ProfilePage>}></Route>
        </Routes>
    </Router>
}