import React, {useState, useEffect} from "react";
import CourseSearch, {FetchCourseDataBase} from "../components/CourseSearch";
import {useLocation} from 'react-router-dom';
import Query from "../interfaces/Query";
import Course from "../interfaces/Course";

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
    const [courseList, setCourseList] = useState<Course[]>([]);

    useEffect(() => {
        const queryList : Query[] = parseQuery(location.search);
        let tempCourse : Course[] = [];

        const fetchData = async() => {
            tempCourse = await FetchCourseDataBase(queryList);
        }
        fetchData().catch(console.error);
        console.log(tempCourse);
    
    }, []);

    return <div data-testid="CourseSearchPage">
        
        <CourseSearch courseList={[]}/>

    
    </div>


}