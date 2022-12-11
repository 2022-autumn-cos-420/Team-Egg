import React, {useState, useEffect} from "react";
import CourseSearch, {FetchCourseDataBase} from "../components/CourseSearch";
import {useLocation} from 'react-router-dom';
import Query from "../interfaces/Query";

export function parseQuery(searchQuery: string) : Query[]{


    return [];
}




export default function CourseSearchPage(): JSX.Element {
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        console.log(location.search);
    }, []);

    return <div data-testid="CourseSearchPage">
        
        <CourseSearch courseList={[]}/>

    
    </div>


}