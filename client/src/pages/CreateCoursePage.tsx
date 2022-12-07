import React, { useState } from "react";

function CourseDesc(
    {courseDesc, setCourseDesc} :
    {courseDesc: string,
    setCourseDesc: (courseDesc: string) => void}
): JSX.Element {
    return <div data-testid="courseDesc" className="flex flex-col">
        <label htmlFor="postText" className="">Course Description</label>
         <textarea className="p-1 text-black border-2 border-black" id="postText" placeholder="Course Description Text"
            onChange={(e)=>{setCourseDesc(e.target.value)}} value={courseDesc}></textarea>

    </div>
}

function CourseTitle(
    {courseTitle, setCourseTitle} :
    {courseTitle: string,
    setCourseTitle: (courseTitle: string) => void}
): JSX.Element {
    return <div data-testid="courseTitle" className="flex flex-col">
        <label htmlFor="postText" className="">Course Description</label>
         <textarea className="p-1 text-black border-2 border-black" id="postText" placeholder="Course Description Text"
            onChange={(e)=>{setCourseTitle(e.target.value)}} value={courseTitle}></textarea>

    </div>
}





function CreateCoursePage(): JSX.Element {
    const [courseDesc, setCourseDesc]  = useState<string>("");
    const [courseTitle, setCourseTitle]  = useState<string>("");
    const [courseCode, setCourseCode]  = useState<string>("");
    const [courseNum, setCourseNum]  = useState<number>(0);
    const [courseHours, setCourseHours] = useState<number>(0);

    return <div data-testid="createCoursePage">
        <div>Create Course Page</div>
        <CourseTitle courseTitle={courseTitle} setCourseTitle={setCourseTitle} />
        <CourseDesc courseDesc={courseDesc} setCourseDesc={setCourseDesc}></CourseDesc>
    
    </div>

}

export default CreateCoursePage;