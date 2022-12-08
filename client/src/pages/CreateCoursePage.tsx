import React, { useState } from "react";

function CourseDesc(
    {courseDesc, setCourseDesc} :
    {courseDesc: string,
    setCourseDesc: (courseDesc: string) => void}
): JSX.Element {
    return <div data-testid="courseDesc" className="flex flex-col">
        <label htmlFor="postText" className="text-left">Course Description</label>
         <textarea className="p-1 text-black border-2 border-black" id="postText" placeholder="Course Description Text"
            onChange={(e)=>{setCourseDesc(e.target.value)}} value={courseDesc}></textarea>

    </div>
}

function CourseTitle(
    {courseTitle, setCourseTitle} :
    {courseTitle: string,
    setCourseTitle: (courseTitle: string) => void}
): JSX.Element {
    return <div data-testid="courseTitle" className="flex flex-col grow">
        <label htmlFor="postText" className="text-left">Course Title</label>
         <input className="p-1 text-black border-2 border-black" id="postText" placeholder="Course Title"
            onChange={(e)=>{setCourseTitle(e.target.value)}} value={courseTitle} />

    </div>
}

function CourseCode(
    {courseCode, setCourseCode} :
    {courseCode: string,
    setCourseCode: (courseCode: string) => void}
): JSX.Element {
    return <div data-testid="courseDepartment" className="flex flex-col">
        <label htmlFor="postText" className="">Department</label>
         <input className="p-1 text-black border-2 border-black" id="postText" placeholder="COS"
            onChange={(e)=>{
                if(e.target.value.length <= 3)
                    setCourseCode(e.target.value.toLocaleUpperCase())
            }} value={courseCode}/>

    </div>
}

function CourseYear(
    {courseYear, setCourseYear} :
    {courseYear: number,
        setCourseYear: (courseYear: number) => void}
): JSX.Element {
    return <div data-testid="courseYear" className="flex flex-col">
        <label htmlFor="postText" className="">Year</label>
         <input className="p-1 text-black border-2 border-black" id="postText" placeholder="2023"
            onChange={(e)=>{
                const x = parseInt(e.target.value);
                if(isNaN(x)) setCourseYear(2023)
                else setCourseYear(x)
                }
            } value={courseYear}/>

    </div>
}

function CourseSemester(
    {courseSemester, setCourseSemester} :
    {courseSemester: string,
        setCourseSemester: (courseSemester: string) => void}
): JSX.Element {
    return <div data-testid="courseSemester" className="flex flex-col">
        <label htmlFor="postText" className="">Semester</label>
         <input className="p-1 text-black border-2 border-black" id="postText" placeholder="Fall"
            onChange={(e)=>{
                setCourseSemester(e.target.value.toLocaleUpperCase());
                }
            } value={courseSemester}/>

    </div>
}

function CourseNumber(
    {courseNum, setCourseNum} :
    {courseNum: number,
        setCourseNum: (courseNum: number) => void}
): JSX.Element {
    return <div data-testid="courseNumber" className="flex flex-col">
        <label htmlFor="postText" className="">Course Number</label>
         <input className="p-1 text-black border-2 border-black" id="postText" placeholder="Course Description Text"
            onChange={(e)=>{
                const x = parseInt(e.target.value);
                if(isNaN(x)) setCourseNum(0)
                else if(e.target.value.length <= 3){
                        setCourseNum(x)
                    }
                }
            } value={courseNum}/>

    </div>
}

function CourseHours(
    {courseHours, setCourseHours} :
    {courseHours: number,
        setCourseHours: (courseHours: number) => void}
): JSX.Element {
    return <div data-testid="courseCreditHours" className="flex flex-col grow-0 w-[100px]">
        <label htmlFor="postText" className="">Credit Hours</label>
         <input className="p-1 text-black border-2 border-black" id="postText" placeholder="Course Description Text"
            onChange={(e)=>{
                const x = parseInt(e.target.value);
                if(isNaN(x)) setCourseHours(0)
                else setCourseHours(x)
                }
            } value={courseHours}/>

    </div>
}


function CourseSubmitButton({
    courseDesc, courseTitle, courseCode, courseNum, courseHours, courseYear, courseSemester   
}:{
    courseDesc: string,
    courseTitle: string,
    courseCode: string,
    courseNum: number,
    courseHours: number,
    courseYear: number,
    courseSemester: string
}): JSX.Element {

    const sendCourse = () => {
        if (courseDesc === "" ||
            courseTitle === "" ||
            courseCode === "" ||
            courseNum === 0 ||
            courseHours === 0)
        window.alert("Don't leave any fields blank");
    }

    return <button data-testid="courseSubmitButton" className="border-2 border-black cursor-pointer bg-crt_BB_grey italic hover:bg-crt_BB_lightBlue p-2 rounded-md" onClick={sendCourse}>
        Submit
    </button>
}


function CreateCoursePage(): JSX.Element {
    const [courseDesc, setCourseDesc]  = useState<string>("");
    const [courseTitle, setCourseTitle]  = useState<string>("");
    const [courseCode, setCourseCode]  = useState<string>("");
    const [courseNum, setCourseNum]  = useState<number>(0);
    const [courseYear, setCourseYear]  = useState<number>(2023);
    const [courseSemester, setCourseSemester]  = useState<string>("SPRING");
    const [courseHours, setCourseHours] = useState<number>(0);

    return <div data-testid="createCoursePage" className="flex flex-row justify-center">
        <div className="flex flex-col w-3/4 space-y-2">
            <div className="text-5xl mb-10 mt-5">Create Course Page</div>
            <div className="flex flex-row space-x-2 justify-center">
                <CourseCode courseCode={courseCode} setCourseCode={setCourseCode} />
                <CourseNumber courseNum={courseNum} setCourseNum={setCourseNum} />
                <CourseYear courseYear={courseYear} setCourseYear={setCourseYear} />
                <CourseSemester courseSemester={courseSemester} setCourseSemester={setCourseSemester} />
            </div>
            <div className="flex flex-row space-x-2 justify-center">
                <CourseTitle courseTitle={courseTitle} setCourseTitle={setCourseTitle} />
                <CourseHours courseHours={courseHours} setCourseHours={setCourseHours} />
            </div>
            <CourseDesc courseDesc={courseDesc} setCourseDesc={setCourseDesc} />
            <div className="text-left">
                <CourseSubmitButton courseYear= {courseYear} courseSemester= {courseSemester} courseDesc= {courseDesc} courseTitle = {courseTitle} courseCode = {courseCode} courseNum = {courseNum} courseHours = {courseHours}/>
            </div> 
        </div>
    </div>

}

export default CreateCoursePage;