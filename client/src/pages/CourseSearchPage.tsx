import React, {useState, useEffect} from "react";
import CourseSearch, {FetchCourseDataBase} from "../components/CourseSearch";
import {useLocation} from 'react-router-dom';






export default function CourseSearchPage(): JSX.Element {
    const location = useLocation();

    useEffect(() => {
        console.log(location);
    }, []);

    return <div data-testid="CourseSearchPage">
        
        <CourseSearch courseList={[]}/>

    
    </div>


}