import React, {useState, useEffect} from "react";
import CourseSearch, {FetchCourseDataBase} from "../components/CourseSearch";
import {useLocation} from 'react-router-dom';
import Query from "../interfaces/Query";

export function parseQuery(searchQuery: string) : Query[]{
    const searchParams = new URLSearchParams(searchQuery);

    let queryList :Query[] = [];
    let majorStringList = searchParams.get("majors");
    let chString = searchParams.get("ch")

    if(majorStringList != null){
        const majorList = majorStringList.split(",")
        for(let i = 0; i < majorList.length; i++){
            queryList.push({  
                field: "department",
                compare: "==",
                search: majorList[i]
            });
        }
    }
    if(chString != null){
        queryList.push({
            field: "creditHours",
            compare: "<=",
            search: chString
        });
    }
    return queryList;
}




export default function CourseSearchPage(): JSX.Element {
    const location = useLocation();

    useEffect(() => {
        console.log(location.search);
    }, []);

    return <div data-testid="CourseSearchPage">
        
        <CourseSearch courseList={[]}/>

    
    </div>


}