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




function CreateCoursePage(): JSX.Element {
    const [courseDesc, setCourseDesc]  = useState<string>("");


    return <div data-testid="createCoursePage">
        <div>Create Course Page</div>
        <CourseDesc courseDesc={courseDesc} setCourseDesc={setCourseDesc}/>
    
    </div>

}

export default CreateCoursePage;