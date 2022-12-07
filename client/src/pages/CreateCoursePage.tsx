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
        <label htmlFor="postText" className="">Course Title</label>
         <textarea className="p-1 text-black border-2 border-black" id="postText" placeholder="Course Description Text"
            onChange={(e)=>{setCourseTitle(e.target.value)}} value={courseTitle}></textarea>

    </div>
}

function CourseCode(
    {courseCode, setCourseCode} :
    {courseCode: string,
    setCourseCode: (courseCode: string) => void}
): JSX.Element {
    return <div data-testid="courseDepartment" className="flex flex-col">
        <label htmlFor="postText" className="">Course Department (3 letters)</label>
         <textarea className="p-1 text-black border-2 border-black" id="postText" placeholder="Course Description Text"
            onChange={(e)=>{setCourseCode(e.target.value)}} value={courseCode}></textarea>

    </div>
}

function CourseNumber(
    {courseNum, setCourseNum} :
    {courseNum: number,
        setCourseNum: (courseNum: number) => void}
): JSX.Element {
    return <div data-testid="courseNumber" className="flex flex-col">
        <label htmlFor="postText" className="">Course Number</label>
         <textarea className="p-1 text-black border-2 border-black" id="postText" placeholder="Course Description Text"
            onChange={(e)=>{
                const x = parseInt(e.target.value);
                if(isNaN(x)) setCourseNum(0)
                else setCourseNum(x)
                }
            } value={courseNum}></textarea>

    </div>
}

function CourseHours(
    {courseHours, setCourseHours} :
    {courseHours: number,
        setCourseHours: (courseHours: number) => void}
): JSX.Element {
    return <div data-testid="courseCreditHours" className="flex flex-col">
        <label htmlFor="postText" className="">Credit Hours</label>
         <textarea className="p-1 text-black border-2 border-black" id="postText" placeholder="Course Description Text"
            onChange={(e)=>{
                const x = parseInt(e.target.value);
                if(isNaN(x)) setCourseHours(0)
                else setCourseHours(x)
                }
            } value={courseHours}></textarea>

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
        <CourseCode courseCode={courseCode} setCourseCode={setCourseCode} />
        <CourseTitle courseTitle={courseTitle} setCourseTitle={setCourseTitle} />
        <CourseDesc courseDesc={courseDesc} setCourseDesc={setCourseDesc} />
        <CourseNumber courseNum={courseNum} setCourseNum={setCourseNum} />
        <CourseHours courseHours={courseHours} setCourseHours={setCourseHours} />
    </div>

}

export default CreateCoursePage;