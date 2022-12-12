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

    return <div data-testid="CourseSearchComponent" 
        className="flex flex-col space-y-2 ml-2 mt-2">
        {courseList.map((c :Course) => {
            {/* Loop through course list, creating a clickable course for each one*/}
            return <a key={c.docId} data-testid="ClickableCourse" href={`/reviewView?cid=${c.docId}`}><div 
                className="border-2 border-black w-1/2 rounded-xl 
                    shadow-lg flex flex-col cursor-pointer space-x-0
                    select-none hover:bg-gray-50"
                >
                    <div className="flex flex-row text-3xl justify-between p-3">
                        <div>{c.department} {c.courseNumber}</div>
                        <div>{c.semester} {c.year}</div>
                    </div>
                    <div className="flex flex-row text-2xl justify-between p-3">
                        <div className="text-left">{c.title}</div>
                        <div className="grow-0 w-[200px]">{c.creditHours} {c.creditHours === 1 ? "Credit Hour" : "Credit Hours"}</div>
                    </div>
            </div></a>
        })}
        {courseList.length === 0 ? "No Courses Found" :""}
    </div>


}

export default CourseSearch;