import React from "react";

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import HomePage from "../pages/HomePage";
import LogInPage from "../pages/LogInPage";
import FindMatch from "./Findmatch";
import CreateReview from "../pages/CreateReview";



export default function Navbar(){
    return <Router>
        <nav className="relative p-4 items-center 
        flex flex-col w-full justify-between min-w-fit
        bg-black text-white">
        <div className="flex flex-row items-cetner w-full justify-between">
            <div className="min-w-fit">
                <Link to="/">BlackBear Square</Link>{/*Logo Spot */}
            </div>

            {/*Menu items*/}
            <div className="w-full flex italic justify-around text-2xl space-x-6">
                <Link to="/login">Log In</Link>
                <Link to="/matchtest">Match Test</Link>
                <Link to="/createReviewTest">Create Review Test</Link>
            </div>
        </div>
        </nav>
            
        <Routes>
            <Route path="/" element= {<HomePage></HomePage>}></Route>
            <Route path="/login" element= {<LogInPage></LogInPage>}></Route>
            <Route path="/matchtest" element= {<FindMatch></FindMatch>}></Route>
            <Route path="/createReviewTest" element= {<CreateReview></CreateReview>}></Route>
        </Routes>
    </Router>
}