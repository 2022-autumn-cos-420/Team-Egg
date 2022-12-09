import React, { useState } from 'react'
import { Button } from "react-bootstrap"
import { Form } from "react-bootstrap";
import {Review} from "../interfaces/Review";

function LectureType(
    {uLectureType, setULectureType}:
    {uLectureType: string, setULectureType: (uLectureType: string) => void}
){
    return (
         <div className = "mt-8">
                <p>How did the class meet for lectures?</p>
                <form>
                    <input type="radio" id="In Person" name="lectureStyle" value="In Person" checked = {uLectureType === "In Person"}
onChange={ (e) => { setULectureType(e.target.value) }} ></input>
                    <label htmlFor="In Person">In Person</label><br></br>
                    <input type="radio" id="Online Synchronous" name="lectureStyle" value="Online Synchronous" checked = {uLectureType === "Online Synchronous"}
onChange={ (e) => { setULectureType(e.target.value) } }></input>
                    <label htmlFor="Online Synchronous">Online Synchronous</label><br></br>
                    <input type="radio" id="Online Asynchronous" name="lectureStyle" value="Online Asynchronous" checked = {uLectureType === "Online Asynchronous"}
onChange={ (e) => { setULectureType(e.target.value) } }></input>
                    <label htmlFor="Online Asynchronous">Online Asynchronous</label><br></br>
                    <input type="radio" id="Mixed" name="lectureStyle" value="Mixed" checked = {uLectureType === "Mixed"}
onChange={ (e) => { setULectureType(e.target.value) }} ></input>
                    <label htmlFor="Mixed">Mixed</label><br></br>
                </form>
            </div>)
}

function ClassSize(
    {uClassSize, setUClassSize}:
    {uClassSize: string, setUClassSize: (uClassSize: string) => void}
){
    return(<div className = "mt-8">
    <p>How many students were in your class?</p>
    <form>
        <input type="radio" id="Less than 10" name="classSize" value="Less than 10" checked = {uClassSize === "Less than 10"}
onChange={ (e) => { setUClassSize(e.target.value) }}></input>
        <label htmlFor="Less than 10">Less than 10</label><br></br>
        <input type="radio" id="10-25" name="classSize" value="10-25" checked = {uClassSize === "10-25"}
onChange={ (e) => { setUClassSize(e.target.value) }}></input>
        <label htmlFor="10-25">10-25</label><br></br>
        <input type="radio" id="26-50" name="classSize" value="26-50" checked = {uClassSize === "26-50"}
onChange={ (e) => { setUClassSize(e.target.value) }}></input>
        <label htmlFor="26-50">26-50</label><br></br>
        <input type="radio" id="51-100" name="classSize" value="51-100" checked = {uClassSize === "51-100"}
onChange={ (e) => { setUClassSize(e.target.value) }}></input>
        <label htmlFor="51-100">51-100</label><br></br>
        <input type="radio" id="Over 100" name="classSize" value="Over 100" checked = {uClassSize === "Over 100"}
onChange={ (e) => { setUClassSize(e.target.value) }}></input>
        <label htmlFor="Over 100">Over 100</label><br></br>
    </form>
</div>)
}

function ExamDifficulty(
    {uExamDiff, setUExamDiff}:
    {uExamDiff: string, setUExamDiff: (uExamDiff: string) => void}
){
    return(<div className = "mt-8">
    <p>How difficult were this course's exams?</p>
    <form>
        <input type="radio" id="There were no exams" name="examDifficulty" value="There were no exams" checked = {uExamDiff === "There were no exams"}
onChange={ (e) => { setUExamDiff(e.target.value) }}></input>
        <label htmlFor="There were no exams">There were no exams</label><br></br>
        <input type="radio" id="Easy" name="examDifficulty" value="Easy" checked = {uExamDiff === "Easy"}
onChange={ (e) => { setUExamDiff(e.target.value) }}></input>
        <label htmlFor="Easy">Easy</label><br></br>
        <input type="radio" id="Moderate" name="examDifficulty" value="Moderate" checked = {uExamDiff === "Moderate"}
onChange={ (e) => { setUExamDiff(e.target.value) }}></input>
        <label htmlFor="Moderate">Moderate</label><br></br>
        <input type="radio" id="Difficult" name="examDifficulty" value="Difficult" checked = {uExamDiff === "Difficult"}
onChange={ (e) => { setUExamDiff(e.target.value) }}></input>
        <label htmlFor="Difficult">Difficult</label><br></br>
        <input type="radio" id="Very Difficult" name="examDifficulty" value="Very Difficult" checked = {uExamDiff === "Very Difficult"}
onChange={ (e) => { setUExamDiff(e.target.value) }}></input>
        <label htmlFor="Very Difficult">Very Difficult</label><br></br>
    </form>
</div>)
}

function MaterialDifficulty(
    {uMaterialDiff, setUMaterialDiff}:
    {uMaterialDiff: string, setUMaterialDiff: (uMaterialDiff: string) => void}
){
    return(<div className = "mt-8">
    <p>How difficult was it to learn this course's material?</p>
    <form>
        <input type="radio" id="Easy" name="contentDifficulty" value="Easy" checked = {uMaterialDiff === "Easy"}
onChange={ (e) => { setUMaterialDiff(e.target.value) }}></input>
        <label htmlFor="Easy">Easy</label><br></br>
        <input type="radio" id="Moderate" name="contentDifficulty" value="Moderate" checked = {uMaterialDiff === "Moderate"}
onChange={ (e) => { setUMaterialDiff(e.target.value) }}></input>
        <label htmlFor="Moderate">Moderate</label><br></br>
        <input type="radio" id="Difficult" name="contentDifficulty" value="Difficult" checked = {uMaterialDiff === "Difficult"}
onChange={ (e) => { setUMaterialDiff(e.target.value) }}></input>
        <label htmlFor="Difficult">Difficult</label><br></br>
        <input type="radio" id="Very Difficult" name="contentDifficulty" value="Very Difficult" checked = {uMaterialDiff === "Very Difficult"}
onChange={ (e) => { setUMaterialDiff(e.target.value) }}></input>
        <label htmlFor="Very Difficult">Very Difficult</label><br></br>
    </form>
</div>
)
}
function AmountOfTime(
    {uAmountTime, setUAmountTime}:
    {uAmountTime: string, setUAmountTime: (uAmountTime: string) => void}
){
    return (<div className = "mt-8">
    <p>How many hours per week did you spend on this class?</p>
    <form>
        <input type="radio" id="Less than 1" name="hoursPerWeek" value="Less than 1"  checked = {uAmountTime === "Less than 1"}
onChange={ (e) => { setUAmountTime(e.target.value) }}></input>
        <label htmlFor="Less than 1">Less than 1</label><br></br>
        <input type="radio" id="1-2" name="hoursPerWeek" value="1-2" checked = {uAmountTime === "1-2"}
onChange={ (e) => { setUAmountTime(e.target.value) }}></input>
        <label htmlFor="1-2">1-2</label><br></br>
        <input type="radio" id="2-4" name="hoursPerWeek" value="2-4" checked = {uAmountTime === "2-4"}
onChange={ (e) => { setUAmountTime(e.target.value) }}></input>
        <label htmlFor="2-4">2-4</label><br></br>
        <input type="radio" id="4-8" name="hoursPerWeek" value="4-8" checked = {uAmountTime === "4-8"}
onChange={ (e) => { setUAmountTime(e.target.value) }}></input>
        <label htmlFor="4-8">4-8</label><br></br>
        <input type="radio" id="8-15" name="hoursPerWeek" value="8-15" checked = {uAmountTime === "8-15"}
onChange={ (e) => { setUAmountTime(e.target.value) }}></input>
        <label htmlFor="8-15">8-15</label><br></br>
        <input type="radio" id="15 or more" name="hoursPerWeek" value="15 or more" checked = {uAmountTime === "15 or more"}
onChange={ (e) => { setUAmountTime(e.target.value) }}></input>
        <label htmlFor="15 or more">15 or more</label><br></br>
    </form>
</div>)
}

function CourseEnjoyability(
    {uCourseE, setUCourseE}:
    {uCourseE: string, setUCourseE: (uCourseE: string) => void}
){
    return( <div className = "mt-8">
    <p>Overall, how much did you enjoy taking this course?</p>
    <form>
        <input type="radio" id="I didn't enjoy this course at all" name="overallEnjoyment" value="I didn't enjoy this course at all" checked = {uCourseE === "I didn't enjoy this course at all"}
onChange={ (e) => { setUCourseE(e.target.value) }}></input>
        <label htmlFor="I didn't enjoy this course at all">I didn't enjoy this course at all</label><br></br>
        <input type="radio" id="I didn't enjoy this class" name="overallEnjoyment" value="I didn't enjoy this class"  checked = {uCourseE === "I didn't enjoy this class"}
onChange={ (e) => { setUCourseE(e.target.value) }}></input>
        <label htmlFor="I didn't enjoy this class">I didn't enjoy this class</label><br></br>
        <input type="radio" id="I have neutral feelings about this course" name="overallEnjoyment" value="I have neutral feelings about this course"  checked = {uCourseE === "I have neutral feelings about this course"}
onChange={ (e) => { setUCourseE(e.target.value) }}></input>
        <label htmlFor="I have neutral feelings about this course">I have neutral feelings about this course</label><br></br>
        <input type="radio" id="I enjoyed taking this course" name="overallEnjoyment" value="I enjoyed taking this course"  checked = {uCourseE === "I enjoyed taking this course"}
onChange={ (e) => { setUCourseE(e.target.value) }}></input>
        <label htmlFor="I enjoyed taking this course">I enjoyed taking this course</label><br></br>
        <input type="radio" id="I really enjoyed taking this course" name="overallEnjoyment" value="I really enjoyed taking this course"  checked = {uCourseE === "I really enjoyed taking this course"}
onChange={ (e) => { setUCourseE(e.target.value) }}></input>
        <label htmlFor="I really enjoyed taking this course">I really enjoyed taking this course</label><br></br>
    </form>
</div>)
}

function CompletionStatus(
    {uCompStat, setUCompStat}:
    {uCompStat: string, setUCompStat: (uCompStat: string) => void}
){
    return(<div className = "mt-8">
    <p>What is your completion status in this course?</p>
    <form>
        <input type="radio" id="Passed" name="completionStatus" value="Passed" checked = {uCompStat === "Passed"}
onChange={ (e) => { setUCompStat(e.target.value) }}></input>
        <label htmlFor="Passed">Passed</label><br></br>
        <input type="radio" id="Failed" name="completionStatus" value="Failed" checked = {uCompStat === "Failed"}
onChange={ (e) => { setUCompStat(e.target.value) }}></input>
        <label htmlFor="Failed">Failed</label><br></br>
        <input type="radio" id="Still Taking" name="completionStatus" value="Still Taking" checked = {uCompStat === "Still Taking"}
onChange={ (e) => { setUCompStat(e.target.value) }}></input>
        <label htmlFor="Still Taking">Still Taking</label><br></br>
        <input type="radio" id="Dropped" name="completionStatus" value="Dropped" checked = {uCompStat === "Dropped"}
onChange={ (e) => { setUCompStat(e.target.value) }}></input>
        <label htmlFor="Dropped">Dropped</label><br></br>
        <input type="radio" id="Prefer Not to Say" name="completionStatus" value="Prefer Not to Say" checked = {uCompStat === "Prefer Not to Say"}
onChange={ (e) => { setUCompStat(e.target.value) }}></input>
        <label htmlFor="Prefer Not to Say">Prefer Not to Say</label><br></br>
    </form>
</div>)
}

function ClassGrade(
    {uGrade, setUGrade}:
    {uGrade: string, setUGrade: (uGrade: string) => void}
){
    return(<div className ="mt-8">
    <p>What grade did you achieve in this course?</p>
    <form>
        <input type="radio" id="A" name="Grade" value="A" checked = {uGrade === "A"}
onChange={ (e) => { setUGrade(e.target.value) }}></input>
        <label htmlFor="A">A</label><br></br>
        <input type="radio" id="B" name="Grade" value="B" checked = {uGrade === "B"}
onChange={ (e) => { setUGrade(e.target.value) }}></input>
        <label htmlFor="B">B</label><br></br>
        <input type="radio" id="C" name="Grade" value="C" checked = {uGrade === "C"}
onChange={ (e) => { setUGrade(e.target.value) }}></input>
        <label htmlFor="C">C</label><br></br>
        <input type="radio" id="D" name="Grade" value="D" checked = {uGrade === "D"}
onChange={ (e) => { setUGrade(e.target.value) }}></input>
        <label htmlFor="D">D</label><br></br>
        <input type="radio" id="F" name="Grade" value="F" checked = {uGrade === "F"}
onChange={ (e) => { setUGrade(e.target.value) }}></input>
        <label htmlFor="F">F</label><br></br>
        <input type="radio" id="Prefer Not to Say" name="Grade" value="Prefer Not to Say" checked = {uGrade === "Prefer Not to Say"}
onChange={ (e) => { setUGrade(e.target.value) }}></input>
        <label htmlFor="Prefer Not to Say">Prefer Not to Say</label><br></br>
    </form>
</div>)
}

function AdditionalComments(
    {uComments, setUComments}:
    {uComments: string, setUComments: (UComments: string) => void}
){
    return(<div className="flex justify-center mt-8">
    <div className="mb-3 xl:w-96">
       <label htmlFor="exampleFormControlTextarea1" className="form-label inline-block mb-2 text-gray-700">Additional Comments</label>
           <textarea
               className="
               form-control
               block
               w-full
               px-3
               py-1.5
               text-base
               font-normal
               text-gray-700
               bg-white bg-clip-padding
               border border-solid border-gray-300
               rounded
               transition
               ease-in-out
               m-0
               focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
               id="exampleFormControlTextarea1"
               rows={3}
               placeholder="Your Comments Here"
               onChange={ (e) => { setUComments(e.target.value) }}
           ></textarea>
   </div>
</div>)
}
export default function CreateReview(): JSX.Element {
    const [page, setPage] = useState<number>(1);
    const [uReview,setUReview] = useState<Review>({
        lectureStyle: "",
        classSize: "",
        examDifficulty: "",
        materialDifficulty: "",
        amountOfTime: "",
        courseEnjoyability: "",
        completionStatus: "",
        classGrade: "",
        additionalComments: ""
    })
    const[uLectureType,setULectureType] = useState<string>("");
    const[uClassSize,setUClassSize] = useState<string>("");
    const[uExamDiff,setUExamDiff] = useState<string>("");
    const[uMaterialDiff,setUMaterialDiff] = useState<string>("");
    const[uAmountTime,setUAmountTime] = useState<string>("");
    const[uCourseE, setUCourseE] = useState<string>("");
    const[uCompStat, setUCompStat] = useState<string>("");
    const[uGrade,setUGrade] = useState<string>("");
    const[uComments,setUComments] = useState<string>("");
    function nextPage(): void{
        setPage(page + 1);
    }

    function previousPage(): void{
        setPage(page -1);
    }
    
    return(
        <div>
            {(page === 1) && <div>
                <div className="text-xl italic">*To ensure that you answer honestly,you may choose your level of anonymity before posting this review</div>
           
                <LectureType uLectureType={uLectureType} setULectureType={setULectureType}></LectureType>
                <ClassSize uClassSize={uClassSize} setUClassSize={setUClassSize}></ClassSize>
                <ExamDifficulty uExamDiff={uExamDiff} setUExamDiff={setUExamDiff}></ExamDifficulty>
                <MaterialDifficulty uMaterialDiff={uMaterialDiff} setUMaterialDiff={setUMaterialDiff}></MaterialDifficulty>
                <AmountOfTime uAmountTime={uAmountTime} setUAmountTime={setUAmountTime}></AmountOfTime>
                <CourseEnjoyability uCourseE={uCourseE} setUCourseE={setUCourseE}></CourseEnjoyability>

                <div className="text-right">
                    <Button onClick={nextPage} className="m-4 bg-crt_BB_lightBlue hover:bg-crt_BB_darkBlue text-white font-bold py-2 px-4 rounded-full">Next</Button>
                </div>
            </div>}
            {(page === 2) && <div>
                <CompletionStatus uCompStat={uCompStat} setUCompStat={setUCompStat}></CompletionStatus>
                <ClassGrade uGrade={uGrade} setUGrade={setUGrade}></ClassGrade> 
                <AdditionalComments uComments={uComments} setUComments={setUComments}></AdditionalComments>
                <div className="flex flex-row w-full justify-between">
                    <div className= "text-left">
                        <Button onClick={previousPage} className= "m-4 bg-crt_BB_lightBlue hover:bg-crt_BB_darkBlue text-white font-bold py-2 px-4 rounded-full">Back</Button>
                    </div>
                    <div className= "text-right">
                        <Button onClick={nextPage} className="m-4 bg-crt_BB_lightBlue hover:bg-crt_BB_darkBlue text-white font-bold py-2 px-4 rounded-full">Next</Button>
                    </div>
                </div>
            </div>}
            {(page === 3) && <div className = "text-center">
                <div className = "border-2 border-black border-solid w-fit flex flex-col">
                    {uLectureType}
                    {uClassSize}
                    {uExamDiff}
                    {uMaterialDiff}
                    {uAmountTime}
                    {uCourseE}
                    {uCompStat}
                    {uGrade}
                    {uComments}
                </div>
                <div className= "text-left">
                        <Button onClick={previousPage} className= "m-4 bg-crt_BB_lightBlue hover:bg-crt_BB_darkBlue text-white font-bold py-2 px-4 rounded-full">Back</Button>
                </div>
            </div>}
        </div>
    );
}

