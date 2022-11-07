import React from "react";

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import  HomePage from "../pages/HomePage";



export default function Navbar(){
    return <Router>
        <Link to="/">BlackBear Square</Link>
        <Link to="/login">Log In</Link>
        <Routes>
            <Route path="/" element= {<HomePage></HomePage>}></Route>
        </Routes>
    </Router>
}