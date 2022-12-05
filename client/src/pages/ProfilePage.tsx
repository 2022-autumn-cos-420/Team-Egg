import React, {useEffect, useState} from 'react';

import {useNavigate} from "react-router-dom";
import {auth, db} from "../firebase-config";


function ProfilePage(){
    useEffect(() => {
        if (!auth.currentUser)
            navigate("/");
    }, []);

    let navigate = useNavigate();
    return <div className="flex flex-col items-center">
        <div className="flex flex-row mt-4 w-3/4 rounded-md shadow-md items-stretch
            border-2 border-crt_BB_lightBlue">
            {/*Left side of profile component*/}
            <div className="flex border-r-2 border-crt_BB_lightBlue w-[200px]">
                Clickable Options
            </div>

            {/*Right side of profile component*/}
            <div className="w-full">
                <div className="text-3xl font-bold border-b-2 border-crt_BB_lightBlue">Profile</div>
                <div>Other Stuff</div>
            </div>
        </div>
    </div>;

}

export default ProfilePage;