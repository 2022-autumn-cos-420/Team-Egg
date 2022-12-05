import { Auth } from 'firebase/auth';
import React, {useEffect, useState} from 'react';

import {useNavigate} from "react-router-dom";
import {db} from "../firebase-config";
import { User } from '../interfaces/User';

export function ProfileTitle(){
    return <div className="text-3xl font-bold border-b-2 border-crt_BB_lightBlue" 
        data-testid="profileTitleComponent">Profile</div>;
}

export function ProfileSideBar(){
    return <div className="flex border-r-2 border-crt_BB_lightBlue w-[200px]" 
        data-testid="profileSidebarComponent">Clickable</div>;
}

export function ProfileContent(){
    return <div data-testid="profileContentComponent">Content</div>
}



function ProfilePage({currentUser}: {currentUser: User | null}){
    return <div className="flex flex-col items-center">
        <div className="flex flex-row mt-4 w-3/4 rounded-md shadow-md items-stretch
            border-2 border-crt_BB_lightBlue">
            {/*Left side of profile component*/}
            <ProfileSideBar />

            {/*Right side of profile component*/}
            <div className="w-full">
                <ProfileTitle />
                <ProfileContent />
            </div>
        </div>
    </div>;

}

export default ProfilePage;