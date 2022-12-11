import React from "react";
import Course from "../interfaces/Course";
import Query from "../interfaces/Query"; 

export function FetchCourseDataBase({queries}: {queries: Query[]}){

    return [];
}


function CourseSearch({courseList}: {courseList: Course[]}): JSX.Element {

    return <div data-testid="CourseSearchComponent">
        This is a test
    </div>


}

export default CourseSearch;