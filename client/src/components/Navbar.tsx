import React from "react";

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import HomePage from "../pages/HomePage";
import LogInPage from "../pages/LogInPage";
import FindMatch from "./Findmatch";
import CreateReview from "../pages/CreateReview";
import logo from  "../images/bbsLogo.png";



export default function Navbar(){
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
                <Link to="/login">Log</Link>
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