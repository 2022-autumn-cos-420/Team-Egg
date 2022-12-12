import { collection, getDocs, query, where} from "firebase/firestore";
import React from "react";
import { JsxEmit } from "typescript";
import { db } from "../firebase-config";
import Course from "../interfaces/Course";
import Query from "../interfaces/Query"; 

export async function FetchCourseDataBase(queries: Query[]){

    let q = query(collection(db, "course"));

    queries.forEach(aQuery => {
        q = query(q, where(aQuery.field, aQuery.compare, aQuery.search));
    });
    const data = await getDocs(q);
    const courseList : Course[] = data.docs.map((doc): Course => (
        {
            docId: doc.id,
            title: doc.data().title,
            description: doc.data().description,
            creditHours: doc.data().creditHours,
            lectureTimes: [],
            department: doc.data().department,
            courseNumber: doc.data().courseNumber,
            lectureType: doc.data().lectureType,
            semester: doc.data().semester,
            year: doc.data().year
        }
    ));
    return (courseList);
}


function CourseSearch({courseList}: {courseList: Course[]}): JSX.Element {

    return <div data-testid="CourseSearchComponent">
        {courseList.map((c :Course) => {
            {/* Loop through course list, creating a clickable course for each one*/}
            return <div data-testid="ClickableCourse" key={c.docId}>
                    <div>
                        <div>{c.department} {c.courseNumber}</div>
                        <div>{c.semester} {c.year}</div> 
                    </div>
                    <div>{c.title}</div>
                    <div>{c.creditHours}</div>
            </div>
        })}
        {courseList.length === 0 ? "No Courses Found" :""}
    </div>


}

export default CourseSearch;