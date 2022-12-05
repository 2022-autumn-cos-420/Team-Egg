import { Auth } from 'firebase/auth';
import React, {useEffect, useState} from 'react';

import {Link, useNavigate} from "react-router-dom";
import {db} from "../firebase-config";
import { User } from '../interfaces/User';

export function ProfileTitle({currentUser} : {currentUser : User | null}){
    return <div className="text-3xl font-bold border-b-2 border-crt_BB_lightBlue" 
        data-testid="profileTitleComponent">{currentUser? `${currentUser.name} Profile` : `You are not signed in`}</div>;
}

export function ProfileSideBar({currentUser} : {currentUser : User | null}){
    return <div className="flex flex-col border-r-2 border-crt_BB_lightBlue w-[200px]" 
        data-testid="profileSidebarComponent">
            <div>Clickable Stuff</div>
            {currentUser && currentUser.accessLevel > 3 ? <CreateCourseLink currentUser={currentUser}/> : ""}


        </div>;
}

export function ProfileContent({currentUser} : {currentUser : User | null}){
    return <div data-testid="profileContentComponent">Content</div>
}

function CreateCourseLink({currentUser} : {currentUser: User | null}){
    return <Link data-testid="createCourseLink" to="/createCourse"></Link> 

}



function ProfilePage({currentUser}: {currentUser: User | null}){
    return <div className="flex flex-col items-center">
        <div className="flex flex-row mt-4 w-3/4 rounded-md shadow-md items-stretch
            border-2 border-crt_BB_lightBlue">
            {/*Left side of profile component*/}
            <ProfileSideBar currentUser={currentUser}/>

            {/*Right side of profile component*/}
            <div className="w-full">
                <ProfileTitle currentUser={currentUser}/>
                <ProfileContent currentUser={currentUser}/>
            </div>
        </div>
    </div>;

}

export default ProfilePage;